import express from 'express';
import { StatusCodes } from 'http-status-codes';
import _ from 'lodash';

import { ModelQuestions } from '../models/index.js';
import { validateObjectId } from '../middleware/middleware.js';

import QUESTION_CONSTANTS from '../constants/question.js';

const router = express.Router();

const { Question, validateQuestionPayload } = ModelQuestions;
const { SAFE_QUESTION_RESPONSE_KEYS } = QUESTION_CONSTANTS;

// Return all questions on the database
router.get('/', async (req, res) => {
  // for query searches
  let { title, tags } = req.query;

  // TODO: Do some pagination stuff here!

  if (title || tags) {
    title = title === undefined ? '-' : title.trim();
    tags = tags === undefined ? '-' : tags.trim();

    console.log('title', title, ' tags', tags, '*');

    const titleLikeQuestions = await Question.find({
      $or: [
        { title: { $regex: title, $options: 'i' } },
        { tags: { $regex: tags, $options: 'i' } },
      ],
    }).sort('title');

    if (!titleLikeQuestions) return res.send({ error: false, questions: [] });

    return res.send({
      error: false,
      questions:
        titleLikeQuestions.length < 3
          ? titleLikeQuestions
          : titleLikeQuestions.slice(0, 2),
    });
  }

  // end title search

  const allQuestions = await Question.find({}).sort();

  // for now assuming there is no error, but fix this latter.

  //TODO:  pick only a user needs to see! (security, reasons)!

  return res.send({ error: false, questions: allQuestions });
});

// Returns a specific question.
router.get('/:id', validateObjectId, async (req, res) => {
  const id = req.params.id;
  const question = await Question.findById(id).sort();

  if (!question)
    return res.status(StatusCodes.NOT_FOUND).send({
      error: true,
      message: 'The question with a given id is not found!',
    });

  const safeQuestionResponse = _.pick(question, SAFE_QUESTION_RESPONSE_KEYS);

  return res.send({
    error: false,
    question: safeQuestionResponse,
  });
});

// Create a new question
router.post('/', async (req, res) => {
  const { body } = req;
  let { questionType, title, description } = body;

  if (questionType === undefined) {
    questionType = null;
  } else {
    questionType.stream =
      questionType.stream === undefined ? null : questionType.stream.trim();
    questionType.subject =
      questionType.subject === undefined ? null : questionType.subject.trim();
  }

  title = title === undefined ? null : title.trim();
  description = description === undefined ? null : description.trim();

  const { error } = validateQuestionPayload({
    questionType,
    title,
    description,
  });

  if (error) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      error: 'true',
      message: error.details[0].message.toLowerCase(),
    });
  }

  // To prevent duplication of questions

  const dupQuestion = await Question.findOne({ title });
  console.log('dupQuestion', dupQuestion);

  if (dupQuestion)
    if (description === dupQuestion.description)
      return res.status(StatusCodes.BAD_REQUEST).send({
        error: 'true',
        message:
          'duplicate question.(with the same title and description is already existed!)',
      });

  const newQuestion = new Question({
    questionType,
    title,
    description,
  });

  await newQuestion.save();
  const safeQuestionResponse = _.pick(newQuestion, SAFE_QUESTION_RESPONSE_KEYS);

  return res.send({ error: false, question: safeQuestionResponse });
});

// Update a question
router.put('/', async (req, res) => {});

// Delete a question
router.delete('/', async (req, res) => {});

export default router;

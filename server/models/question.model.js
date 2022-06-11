import mongoose from 'mongoose';
import Joi from 'joi';

const questionSchema = mongoose.Schema({
  questionType: {
    type: {
      stream: { type: String, max: 30, required: true },
      subject: { type: String, max: 30, required: true },
    },
    required: true,
  },
  title: {
    type: String,
    maxLength: 256,
    required: true,
  },
  description: {
    type: String,
    minLength: 1,
    maxLength: 1024,
  },
  tags: {
    type: String,
    //maxLength: 255,
    default: '',
  },
  images: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  view: {
    type: Number,
    default: 0,
  },
  vote: {
    type: Number,
    default: 0,
  },
  comments: {
    type: [Object],
    default: [],
  },
  bookMarkedBy: {
    type: [mongoose.Types.ObjectId], // user id, users who saved this question
    default: [],
  },
  isReportedBy: {
    type: [mongoose.Types.ObjectId], // user id, who reported!
    default: [],
  },
  answers: {
    type: [Object],
    default: [],
  },
});

const Question = mongoose.model('Questions', questionSchema);

function validateQuestionPayload(questionPayload) {
  // validation using joi //

  const schema = Joi.object({
    questionType: Joi.object({
      stream: Joi.string().max(30).required(),
      subject: Joi.string().max(30).required(),
    }),
    title: Joi.string().max(256).required(),
    description: Joi.string().min(1).max(256),
    // tags: Joi.string().min(1).max(256),
  });
  return schema.validate(questionPayload);
}

export default { Question, validateQuestionPayload };

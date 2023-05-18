const QUESTION_REPORT = {
  NOT_A_QUESTION: 'NOT_A_QUESTION',
  DUPLICATE: 'DUPLICATE',
  OFF_TOPIC: 'OFF_TOPIC',
  TOO_BROAD: 'TOO_BROAD',
  SPAM: 'SPAM',
  VIOLENCE: 'VIOLENCE',
  RACISM: 'RACISM',
  PORNOGRAPHY: 'PORNOGRAPHY',
  PERSONAL_DETAILS: 'PERSONAL_DETAILS',
};
const QUESTION_STATUS = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
  ON_HOLD: 'ON_HOLD',
  DELETED: 'DELETED',
};

/*
 "_id": "62a4fe5c3f1524b756ff9a77",
        "questionType": {
            "stream": "Natural Science",
            "subject": "Biology",
            "_id": "62a4fe5c3f1524b756ff9a78"
        },
        "title": "What is mitocondria?",
        "description": "In a cell biology, or as ecaplined in page 17 of the grade 7th book ...",
        "images": [],
        "view": 0,
        "vote": 0,
        "comments": [],
        "bookMarkedBy": [],
        "isReportedBy": [],
        "answers": [],
        "createdAt": "2022-06-11T20:43:08.277Z"
*/
const SAFE_QUESTION_RESPONSE_KEYS = [
  '_id',
  'questionType',
  'title',
  'description',
  'images',
  'view',
  'vote',
  'comments',
  'answers',
  'createdAt',
];

export default {
  QUESTION_REPORT,
  QUESTION_STATUS,
  SAFE_QUESTION_RESPONSE_KEYS,
};

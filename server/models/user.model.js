import mongoose from 'mongoose';

// answers bookmark feed last questions searches
const userSchema = new mongoose.Schema({
  answers: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  bookmarks: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  feed: {
    type: {
      lists: [mongoose.Schema.Types.ObjectId],
      lastCheckedTime: {
        type: [mongoose.Schema.Types.Date],
        default: Date.now(),
      },
    },
    default: {},
  },
  last: {
    type: {
      ip: mongoose.Schema.Types.String,
      active: mongoose.Schema.Types.Date,
    },
    default: {},
  },
  questions: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  searches: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
});

const User = mongoose.model('User', userSchema);

export default {
  User,
};

import mongoose from 'mongoose'


const questionSchema = new mongoose.Schema({
  questionStatement: {
    type: String,
    required: true,
  },

  answer: {
    type: Number,
  },

  options: [String]
})

const Question = mongoose.model('Question', questionSchema)

export default Question

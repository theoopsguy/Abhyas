import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  units: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Unit',
    },
  ]
})

const Subject = mongoose.model('Subject', subjectSchema)

export default Subject

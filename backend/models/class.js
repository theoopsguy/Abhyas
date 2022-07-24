import mongoose from 'mongoose';


const classSchema = new mongoose.Schema({
  standard: {
    type: Number, 
    required: true,
  },

  subjects: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Subject',
    },
  ],
})

const Class = mongoose.model('Class', classSchema)

export default Class

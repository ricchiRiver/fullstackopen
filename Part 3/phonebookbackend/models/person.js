const mongoose = require('mongoose')

mongoose.set('strictQuery', false)


const url = process.env.MONGODB_URI


console.log('connecting to', url)

mongoose.connect(url)
  .then(
    console.log('connected to MongoDB')
  )
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name should be informed'],
    minLength: [3, 'Name should be at least 3 characters long'],
    unique: true
  },
  number: {
    type: String,
    required: [true, 'Number should be informed'],
    minLength: [8, 'Number should be at least 8 characters long'],
    validate: {
      validator: n => {
        return /\d{2,3}-\d+/.test(n)
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  }
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Person', personSchema)
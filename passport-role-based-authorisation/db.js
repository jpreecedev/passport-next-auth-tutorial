import { UserModel } from './server/database/schema'
import mongoose from 'mongoose'

const { Types } = mongoose

mongoose.connect('mongodb://root:example@localhost:27017/test?authSource=admin&w=1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

UserModel.find({}).exec((err, users) => {
  users.forEach(u => console.log(u))
})

// UserModel.updateOne({ _id: "<YOUR USER ID>" }, { role: "Admin" }).exec()

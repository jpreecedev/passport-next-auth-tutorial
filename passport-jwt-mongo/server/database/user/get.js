import { UserModel } from '../schema'

async function getUserById(id) {
  return await UserModel.findById(id).exec()
}

async function getUserByEmail(email) {
  return await UserModel.findOne({ email }).exec()
}

export { getUserById, getUserByEmail }

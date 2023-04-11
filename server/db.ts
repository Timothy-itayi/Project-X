const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

interface User {
  name: string
  date_of_birth: number
  likes: string
  dislikes: string
}

module.exports = {
  getAllUsers,
  getUserById,
  deleteUserById,
  // updateUserById,
  // postNewUser,
  addNewUser,
}

function getAllUsers(db = connection) {
  return db('users').select('*')
}

async function getUserById(id: number, db = connection) {
  return await db('users').select().where('id', id)
}

function addNewUser(user: User, db = connection) {
  return db('users').insert({
    name: user.name,
    date_of_birth: user.date_of_birth,
    likes: user.likes,
    dislikes: user.dislikes,
  })
}

async function deleteUserById(id: number, db = connection) {
  try {
    const user = await db('users').where('id', id).select().first()
    if (!user) {
      // Return an error response if user not found
      return { error: 'User not found' }
    }
    await db('users').where('id', id).del()
    // Return success response
    return { success: true }
  } catch (error) {
    console.log(error)
    // Return error response
    return { error: 'Failed to delete user' }
  }
}

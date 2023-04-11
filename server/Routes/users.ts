const express = require('express')
import { Request, Response } from 'express'
const db = require('../db')

const router = express.Router()
module.exports = router

// Add express.json() middleware to parse request bodies
router.use(express.json())

// GET /users
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await db.getAllUsers()
    res.json(users)
    console.log(users)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to fetch users' })
  }
})

// GET /users/:id
router.get('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  try {
    console.log(req.params.id)
    const user = await db.getUserById(id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to fetch user' })
  }
})
//  Post /users/add
router.post('/add', async (req: Request, res: Response) => {
  // Add the user to the database and then redirect
  const { name, date_of_birth, likes, dislikes } = req.body

  try {
    console.log(req.body)
    await db.addNewUser({
      name: name,
      date_of_birth: date_of_birth,
      likes: likes,
      dislikes: dislikes,
    })

    console.log('added new user')
    res.redirect('/users')
  } catch (error) {
    console.log(error)
    // Handle error if any and send an appropriate response
    res.status(500).json({ error: 'Failed to add user' })
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  // Delete the user from the database using its id
  try {
    await db.deleteUserById(id)
    // Redirect to the schedule page for the specified day after successful deletion
    // res.redirect(`/users/${user}`)
    console.log('Successfully deleted User')
    res.status(200).json({ message: 'User deleted successfully' })
  } catch (error) {
    console.log(error)
    // Handle error if any and send an appropriate response
    res.status(500).json({ error: 'Failed to delete user' })
  }
})

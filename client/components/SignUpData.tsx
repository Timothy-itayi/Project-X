import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../apis/users' // Import the functions from your api folder

interface UserData {
  name: string
  date_of_birth: number
  likes: string
  dislikes: string
}

const SignUpData = () => {
  const [users, setUsers] = useState<UserData[]>([])

  useEffect(() => {
    getAllUsers() // Call the getAllUsers function from your api folder
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error))
  }, [])

  return (
    <div>
      <h2>Sign Up Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Likes</th>
            <th>Dislikes</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.likes}</td>
              <td>{user.dislikes}</td>
              <td>{user.date_of_birth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SignUpData

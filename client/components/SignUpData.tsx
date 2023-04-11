import React from 'react'

interface PropsData {
  name: string
  Likes: string
  Dislikes: string
  DateofBirth: number
}

const SignUpData = ({ props: PropsData }) => {
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
          {PropsData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.Likes}</td>
              <td>{user.Dislikes}</td>
              <td>{user.dateOfBirth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SignUpData

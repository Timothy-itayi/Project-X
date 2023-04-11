// api/users.ts
import request from 'superagent'
import { User } from '../DataModels/data'

const rootUrl = '/api/v1/users'

export async function getAllUsers() {
  const response = await request.get(rootUrl)
  return response.body as User[]
}

export async function getUserById(userId: number): Promise<User> {
  const response = await request.get(`${rootUrl}/${userId}`)
  return response.body as User
}

export async function deleteUser(id: number) {
  await request.delete(`${rootUrl}/${id}`)
}
export async function addNewUser(user: Partial<User>): Promise<User> {
  const response = await request.post(rootUrl).send(user)
  return response.body as User
}

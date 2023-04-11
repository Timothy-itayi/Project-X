import React, { useState } from 'react'

type Props = {
  title?: string
  buttonText?: string
  onGoBack: () => void
  showSignupForm: boolean
}

type FormData = {
  name: string
  likes: string
  dislikes: string
  dateOfBirth: string
}

const SignUpForm = ({
  title = 'Sign Up',
  buttonText = 'Submit',
  onGoBack,
  showSignupForm,
}: Props) => {
  if (!showSignupForm) {
    return null
  }

  const [name, setName] = useState('')
  const [likes, setLikes] = useState('')
  const [dislikes, setDislikes] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Create FormData object to hold form data
    const formData: FormData = {
      name,
      likes,
      dislikes,
      dateOfBirth,
    }
    try {
      // Make HTTP POST request to submit form data
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitted(true)
      } else {
        console.error('Failed to submit form data:', response.status)
      }
    } catch (error) {
      console.error('Failed to submit form data:', error)
    }
  }

  const handleReset = () => {
    setName('')
    setLikes('')
    setDislikes('')
    setDateOfBirth('')
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div>
        <h1>Thank you for Signing up!</h1>
        <button onClick={handleReset}>Go Back</button>
      </div>
    )
  }

  return (
    <>
      <div>
        <h1>{title}</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <br />
          <label>
            Likes:
            <input
              type="text"
              value={likes}
              onChange={(event) => setLikes(event.target.value)}
            />
          </label>
          <br />
          <label>
            Dislikes:
            <input
              type="text"
              value={dislikes}
              onChange={(event) => setDislikes(event.target.value)}
            />
          </label>
          <br />
          <label>
            Date of Birth:
            <input
              type="date"
              value={dateOfBirth}
              onChange={(event) => setDateOfBirth(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">{buttonText}</button>
        </form>
        <br />
        <button onClick={onGoBack}>Go Back</button>
      </div>
    </>
  )
}

export default SignUpForm

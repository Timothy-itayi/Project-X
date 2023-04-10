import React, { useState } from "react";
import GoBackButton from "./GoBackButton";

type Props = {
  onGoBack: () => void;
  title?: string;
  buttonText?: string;
};

const SignUpForm = ({ onGoBack, title = "Sign Up", buttonText = "Submit" }: Props) => {
  const [name, setName] = useState("");
  const [likes, setLikes] = useState("");
  const [dislikes, setDislikes] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setLikes("");
    setDislikes("");
    setDateOfBirth("");
    setSubmitted(false);
    onGoBack();
  };

  if (submitted) {
    return (
      <div>
        <h1>Thank you for {title.toLowerCase()}!</h1>
        <button onClick={handleReset}>Go Back</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Likes:
          <input type="text" value={likes} onChange={(event) => setLikes(event.target.value)} />
        </label>
        <br />
        <label>
          Dislikes:
          <input type="text" value={dislikes} onChange={(event) => setDislikes(event.target.value)} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)} />
        </label>
        <br />
        <button type="submit">{buttonText}</button>
      </form>
      <br />
      <button onClick={onGoBack}>Go Back</button>
    </div>
  );
};

export default SignUpForm;

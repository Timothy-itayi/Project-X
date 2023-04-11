// import React, { useState } from 'react'
// import GoBackButton from './GoBackButton'
// import SignUpForm from './SignUpForm'

// interface Image02Props {
//   image: string
//   index: number
//   onGoBack: () => void
// }

// const Image02Component: React.FC<Image02Props> = ({
//   image = 'image02.JPG',
//   index = 2,
//   onGoBack,
// }) => {
//   const [clicked, setClicked] = useState(false)

//   // const handleGoBack = () => {
//   //   onGoBack();
//   // };

//   const handleClick = () => {
//     setClicked(true)
//     console.log(handleClick)
//   }

//   if (!image) {
//     return <div>Error: No image provided.</div>
//   }

//   if (clicked) {
//     // function handleGoBack(): void {
//     //   throw new Error('Function not implemented.')
//     // }

//     return (
//       <div>
//         <SignUpForm />
//       </div>
//     )
//   }

//   // return (
//   //   <div>
//   //     <h1>Image {index}</h1>
//   // <img src={`/images/${image}`} alt={`Profile Image ${index}`} onClick={handleClick} />
//   //     <GoBackButton onClick={handleGoBack} />
//   //   </div>
//   );
// }

// export default Image02Component

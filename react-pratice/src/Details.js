import React from 'react'

const Details = (props) => {
  const handleClick = () => {
    alert("I am clicking")
  }
  const {image,name,description} = props.laptop
  return(
    <div>
      <img src={image} alt="laptop" />
      <h1>{name}</h1>
      <p>{description}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Details
  
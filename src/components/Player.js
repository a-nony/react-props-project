import React from 'react'
import Card from 'react-bootstrap/Card';


const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div>
      <Card style={{ width: '18rem', margin: "10px"}}>
      <Card.Img style={{ width: "400px" }} variant="top" src={imageUrl} />
      <Card.Body>
      <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Player

// import Button from 'react-bootstrap/Button';

// function BasicExample() {
//   return (
    
//   );
// }

// export default BasicExample;

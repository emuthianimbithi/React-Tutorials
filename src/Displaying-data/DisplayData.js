import React from 'react'
import { Card } from "react-bootstrap";
import users from './UserData'

const DisplayData = () => {
  return (
    <div>
      {users.map((user, index) => (
        <Card key={user.name+user.age} className="mb-3">
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
              {user.name} is {user.age} years old!!
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default DisplayData
import React, {useState} from 'react'
import { useMemo } from 'react';
import {Card, Button, Form, InputGroup} from 'react-bootstrap';
const UsersDataSet = require('../../../../data/users.json');

function UseMemoHookExample1() {

  const [users, setUsers] = useState(UsersDataSet);

  const selectedUser = useMemo(() => {
    return users.find(itm=>itm?.id==30)
  }, [users])
 
  return (
    <Card>
      <Card.Header as="h5">useMemo hook Example 1</Card.Header>
      <Card.Body>
        <Card.Title>useMemo hook</Card.Title>
        <Card.Text>
            {
                selectedUser?.firstName
            }
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default UseMemoHookExample1
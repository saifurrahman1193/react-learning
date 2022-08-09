import React, {useState} from 'react'
import { useMemo } from 'react';
import {Card, Button, Form, InputGroup} from 'react-bootstrap';

function UseMemoHookExample1() {

  const [users, setUsers] = useState([
    {'id': '1', 'name': 'Anwar'},
    {'id': '2', 'name': 'Brad'},
    {'id': '3', 'name': 'Carl'},
    {'id': '4', 'name': 'Dexter'},
    {'id': '5', 'name': 'Esper'},
    {'id': '6', 'name': 'Fred'},
  ]);

  const selectedUser = useMemo(() => {
    return users.find(itm=>itm?.id==6)
  }, [users])
 
  return (
    <Card>
      <Card.Header as="h5">useMemo hook Example 1</Card.Header>
      <Card.Body>
        <Card.Title>useMemo hook</Card.Title>
        <Card.Text>
            {
                selectedUser?.name
            }
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default UseMemoHookExample1
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function App() {
  let [title, setTitle] = useState('');
  let [type, setType] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    console.log('Tytuł: ' + title + ' Rodzaj: ' + type);
  };

  const titleInputValueChange = e => {
    setTitle(e.target.value);
  };

  const selectInputValueChange = e => {
    setType(e.target.value);
  };

  return (
    <div>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label>Tytuł filmu</Form.Label>
          <Form.Control type='text' value={title} onChange={titleInputValueChange} />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Rodzaj</Form.Label>
          <Form.Select name='formSelect' value={type} onChange={selectInputValueChange}>
            <option value={1}>Komedia</option>
            <option value={2}>Obyczajowy</option>
            <option value={3}>Sensacyjny</option>
            <option value={4}>Horror</option>
          </Form.Select>
        </Form.Group>
        <Button variant='primary' type='submit' onClick={submitHandler}>
          Dodaj
        </Button>
      </Form>
    </div>
  );
}

export default App;

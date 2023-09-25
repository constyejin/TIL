import React from 'react'
import { Button } from 'react-bootstrap';

export const Buttons = () => {
  return (
    <div className='btn-list'>
      <Button variant="primary">Current Location</Button>{' '}
      <Button variant="secondary">Paris</Button>{' '}
      <Button variant="success">Bangkok</Button>{' '}
    </div>
  )
}

export default Buttons;

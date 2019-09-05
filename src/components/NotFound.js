import React from 'react';
import { Redirect } from 'react-router-dom';

const notFound = ({ staticContext = {} }) => {
  staticContext.statusCode = 404;
  return (
    <div>
      <Redirect to="/cards" /> 
      Error to load resourse.
    </div>
  )
}

export default notFound;
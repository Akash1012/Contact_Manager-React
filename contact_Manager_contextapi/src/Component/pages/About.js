import React from 'react';

const About = (props) => {
  return (
    <div>
      <h1>{props.match.params.id}</h1>
      <h1 className="display-4">About Contact Manager</h1>
      <p className="lead">Simple app to manage contacts</p>
      <p className="text-secondary">Version 2.1.4</p>
    </div>
  )
}
export default About
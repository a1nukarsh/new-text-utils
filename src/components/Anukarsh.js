import React from "react";
import propTypes from 'prop-types'

export default function Anukarsh(props) {
  return (
    <>
      <div className="card text-center container" style={{
          backgroundColor: props.mode==='light'?'white':'black',
          color: props.mode==='light'?'black':'white',
          border: props.mode==='light'?'1px solid black':'1px solid white'
        }} >
        <div className="card-body container">
          <h5 className="card-title">About the Developer</h5>
          <p className="card-text">
            This Project was Created by Anukarsh Raj. To learn more, check the following links:
          </p>
          <a href="https://a1nukarsh.github.io/Anukarsh-Raj/" class="btn btn-primary mx-1">
          <i className="bi bi-browser-chrome"></i> Website
          </a>
          <a href="https://github.com/a1nukarsh" class="btn btn-primary mx-1">
          <i className="bi bi-github"></i> Github
          </a>
          <a href="https://www.linkedin.com/in/a1nukarsh/" class="btn btn-primary mx-1">
          <i className="bi bi-linkedin"></i> Linkedin
          </a>
          <a href="https://a1nukarsh.github.io/Resume/" class="btn btn-primary mx-1">
          <i className="bi bi-file-earmark-person"></i> Resume
          </a>
          
        </div>
      </div>
    </>
  );
}

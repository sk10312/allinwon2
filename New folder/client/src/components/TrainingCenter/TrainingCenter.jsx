
import React from 'react';

function TrainingCenter() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Medical Billing Training Center</h2>
      <p>Welcome! Select your training level:</p>
      <ul>
        <li><a href="#beginner">Beginner</a></li>
        <li><a href="#intermediate">Intermediate</a></li>
        <li><a href="#advanced">Advanced</a></li>
      </ul>
      <div id="beginner">
        <h3>Beginner Lessons</h3>
        <ul>
          <li>What is Medical Billing?</li>
          <li>Insurance Types</li>
          <li>Intro to CPT/ICD-10</li>
        </ul>
      </div>
      <div id="intermediate">
        <h3>Intermediate Lessons</h3>
        <ul>
          <li>Claim Denials</li>
          <li>Modifier Codes</li>
          <li>Billing Mistakes</li>
        </ul>
      </div>
      <div id="advanced">
        <h3>Advanced Lessons</h3>
        <ul>
          <li>Revenue Cycle Management</li>
          <li>OIG/CAQH Compliance</li>
          <li>AI Optimization</li>
        </ul>
      </div>
    </div>
  );
}

export default TrainingCenter;

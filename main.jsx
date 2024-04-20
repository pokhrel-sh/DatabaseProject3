import React, { useState } from 'react';

function BugComponent() {
  const [bugId, setBugId] = useState('');
  const [bugData, setBugData] = useState(null);
  const [error, setError] = useState('');

  const cacheBugs = async (priorityID, priorityName) => {
    console.log(`Caching bug with priority ID: ${priorityID} and name: ${priorityName}`);
  };

  const readBug = async () => {
    try {
      console.log(`Fetching bug with ID: ${bugId}`);
      setTimeout(() => {
        const bug = { id: bugId, description: 'Sample bug description' };
        setBugData(bug);
        setError('');
      }, 1000); 
    } catch (error) {
      console.error('Error fetching bug:', error);
      setError('Error fetching bug. Please try again later.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={bugId}
        onChange={(e) => setBugId(e.target.value)}
        placeholder="Enter Bug ID"
      />
      <button onClick={readBug}>Read Bug</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {bugData && (
        <div>
          <h2>Bug Details</h2>
          <p>ID: {bugData.id}</p>
          <p>Description: {bugData.description}</p>
        </div>
      )}
    </div>
  );
}

export default BugComponent;

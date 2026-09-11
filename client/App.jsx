import { useState } from 'react';
import { useReddit } from '@devvit/web/client';

export function App() {
  const reddit = useReddit();
  const [flairs, setFlairs] = useState([]);
  const [action, setAction] = useState('assign');

  return (
    <div>
      <h1>Brett's Mod Flair</h1>
      <p>Flair management tool</p>
      
      <nav>
        <button onClick={() => setAction('assign')}>Assign</button>
        <button onClick={() => setAction('batch')}>Batch Update</button>
        <button onClick={() => setAction('auto')}>Auto-Flair</button>
      </nav>

      <div>
        <h2>Flairs ({flairs.length})</h2>
        <p>Action: {action}</p>
      </div>
    </div>
  );
}

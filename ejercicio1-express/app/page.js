'use client'
import React, { useState, useEffect} from 'react';

const App = () =>{
  const [message, setMessage] = useState('');

  useEffect(()=>{
    fetch('/message',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({message}),
    })
},[message]);

return(
  <div>
    <input
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
  </div>
);
}
export default App;
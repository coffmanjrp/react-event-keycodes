import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [keyPress, setKeyPress] = useState(false);
  const [key, setKey] = useState(null);
  const [keyCode, setKeyCode] = useState(null);
  const [code, setCode] = useState(null);

  useEffect(() => {
    window.addEventListener('keydown', (e) => handleKeyDown(e));

    return () => window.removeEventListener('keydown', (e) => handleKeyDown(e));
  }, []);

  const handleKeyDown = (e) => {
    setKeyPress(true);
    setKey(e.key);
    setKeyCode(e.keyCode);
    setCode(e.code);
  };

  return (
    <div className="App">
      {keyPress ? (
        <>
          <div className="key">
            {key === ' ' ? 'Space' : key}
            <small>event.key</small>
          </div>
          <div className="key">
            {keyCode}
            <small>event.keyCode</small>
          </div>
          <div className="key">
            {code}
            <small>event.code</small>
          </div>
        </>
      ) : (
        <div className="key">Press any key to get the KeyCode</div>
      )}
    </div>
  );
}

export default App;

import React from 'react';
import QRCode from "./components/qr-code";

function App() {
  return (
    <div className="App" style={{display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
      <header className="App-header">
        <p style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "50px",
          textAlign: "center"
        }}>
          One donation makes all the difference
        </p>
        <QRCode/>
      </header>
    </div>
  );
}

export default App;

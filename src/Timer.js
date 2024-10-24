// Timer.js
import React, { useState, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0); // Timer value in seconds
  const [isActive, setIsActive] = useState(false); // Timer state (running or not)
  const intervalRef = useRef(null); // Ref to hold the interval ID

  // Function to start the timer
  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increment time every second
      }, 1000);
    }
  };

  // Function to pause the timer
  const pauseTimer = () => {
    if (isActive) {
      clearInterval(intervalRef.current); // Clear interval to pause
      setIsActive(false);
    }
  };

  // Function to reset the timer
  const resetTimer = () => {
    clearInterval(intervalRef.current); // Clear interval to stop
    setIsActive(false);
    setTime(0); // Reset time to 0
  };

  // Format the time to HH:MM:SS
  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.timer}>{formatTime(time)}</h1>
      <div style={styles.buttons}>
        <button style={styles.button} onClick={startTimer}>Start</button>
        <button style={styles.button} onClick={pauseTimer}>Pause</button>
        <button style={styles.button} onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

// Inline styles for the component
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  timer: {
    fontSize: '48px',
    margin: '20px 0',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Timer;

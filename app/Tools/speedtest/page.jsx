"use client";
import { useState } from 'react';

const SpeedTest = () => {
  const [downloadSpeed, setDownloadSpeed] = useState(null);
  const [testing, setTesting] = useState(false);

  const handleTestSpeed = async () => {
    setTesting(true);
    const startTime = new Date().getTime();

    try {
      const response = await fetch('/test-file.zip');
      if (response.ok) {
        const endTime = new Date().getTime();
        const timeTaken = endTime - startTime; // Time taken in milliseconds
        const fileSize = response.headers.get('content-length'); // Get file size from response headers
        const speedMbps = ((fileSize / 1024 / 1024) * 8) / (timeTaken / 1000); // Calculate speed in Mbps
        setDownloadSpeed(speedMbps.toFixed(2)); // Set download speed (Mbps) rounded to 2 decimal places
      } else {
        setDownloadSpeed('Error');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setDownloadSpeed('Error');
    } finally {
      setTesting(false);
    }
  };

  return (
    <div>
      <h1>Internet Speed Test</h1>
      <button onClick={handleTestSpeed} disabled={testing}>
        {testing ? 'Testing...' : 'Start Speed Test'}
      </button>
      {downloadSpeed !== null && (
        <p>
          Download Speed: {downloadSpeed === 'Error' ? 'Error' : `${downloadSpeed} Mbps`}
        </p>
      )}
    </div>
  );
};

export default SpeedTest;

import { useEffect, useRef, useState } from 'react';

const Webcam = () => {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch (err) {
        console.log('Webcam unavailable:', err);
        setError('Webcam unavailable');
      }
    };

    initWebcam();

    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <aside className="webcam-panel">
      <div className="panel-header">
        <h2>📹 LIVE FEED</h2>
        <div className="status">
          <div className="status-dot"></div>
          REC
        </div>
      </div>
      
      {error ? (
        <div className="webcam-error">
          <span>{error}</span>
        </div>
      ) : (
        <video ref={videoRef} autoPlay playsInline muted className="webcam-video" />
      )}
    </aside>
  );
};

export default Webcam; 
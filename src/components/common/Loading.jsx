import React from 'react';
import Lottie from "lottie-react";
import animationData from "../../assets/Images/loader.json";

const Loading = () => {
  return (
    <div style={styles.loaderWrapper}>
      <div style={styles.loaderBox}>
        <Lottie animationData={animationData} loop autoplay style={styles.lottie} />
      </div>
    </div>
  );
};

const styles = {
  loaderWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#000814',
    padding: '20px',
    boxSizing: 'border-box',
  },
  loaderBox: {
    width: '40vw',                 // Responsive width
    maxWidth: '250px',             // Prevent too big on large screens
    minWidth: '150px',             // Prevent too small on small screens
    aspectRatio: '1',              // Keeps it square
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000814',
    borderRadius: '12px',
  },
  lottie: {
    width: '100%',
    height: '100%',
  }
};

export default Loading;

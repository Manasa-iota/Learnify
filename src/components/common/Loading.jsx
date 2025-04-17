import React from 'react';
import { PropagateLoader } from 'react-spinners';
import loadingGif from '../../assets/Images/preloader.gif';
import bg from "../../assets/Images/loaderbg.jpg"

const Loading = () => {
  return (
    <>
     <div style={{ ...styles.loaderContainer, backgroundColor:"#000814" }}>
  <iframe 
    src="https://assets.pinterest.com/ext/embed.html?id=6896205672556728" 
    height="277" 
    width="236" 
    frameBorder="0" 
    scrolling="no"
  ></iframe>
</div>

    </>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw', 
    height: '100vh',
    backgroundColor: 'white', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
  },
  gif: {
    marginBottom: '20px',
    height: '250px',
    width: 'auto',
    backgroundColor: 'none'
  },
};

export default Loading;

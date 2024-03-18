
import React from 'react';
import HomePhoto from "../assets/HomePhoto.png";
import './Home.css'; // Import CSS file for styling

const Home = () => {
  const [text, setText] = React.useState("Our mission is to make it easy for you to support your favorite causes and connect with volunteering opportunities.");

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const newText = text === "Our mission is to make it easy for you to support your favorite causes and connect with volunteering opportunities."
        ? "I have found that among its other benefits, giving liberates the soul of the giver."
        : "Service to others is the rent you pay for your room here on earth.";
      setText(newText);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [text]);

  return (
    
      <div className="home-content">
      <div className='container'>
       <img src={HomePhoto} alt="Homephoto" className="home-image" />  </div>
       <div className='quote-box'>
        <h1 className="animated-text">Welcome to the Donation & Volunteer System</h1>
       
        <p className="animated-text">
          {text}
        </p>
        </div>
      </div>
   
  );
};

export default Home;



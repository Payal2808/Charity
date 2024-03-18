


import './About.css'; // Import CSS file for additional styling
import about from "../assets/about.png"; // Import image file

const About = () => {
  return (
    <div className="about-section">
      <img src={about} alt="about" className="about-image" />
      <div className="about-content">
        <h2>Work with us</h2>
        <p>
          Always give without remembering and always receive without forgetting.
        </p>
      
      </div>
      <div className='container'>
      <div className='vision'>
        <h1>Our Vision</h1>
        
        <p>Our vision is to establish a vibrant and inclusive community-driven platform that empowers individuals from diverse backgrounds to actively participate in shaping a better world. At the heart of our vision lies the belief that every person possesses the innate capacity to make a positive impact on society. Ultimately, our vision is to be a force for positive change in society. We aspire to inspire and mobilize individuals to be agents of change in their communities. By fostering a culture of compassion, empathy, and solidarity, we believe that together, we can create a more just, equitable, and compassionate world for all.</p>
      </div>
      <div className='mission'>
      <h1> Our Mission</h1>
      <p>We aim to serve as a bridge between donors and recipients, creating a transparent and trustworthy environment where resources are distributed efficiently and equitably. By leveraging technology and innovation, we streamline the donation process, optimize resource allocation, and maximize impact. Through our platform, we seek to address pressing social challenges, foster community resilience, and promote social justice and inclusion.</p>
      </div>
</div>

          
           
          </div>
      
     
   
      
  );
};

export default About;

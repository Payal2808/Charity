
//import './Footer.css';

// Footer.js



const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">More Explore</h3>
            <p className="mb-4">Our charity is dedicated to making a difference in the community. Learn more about our mission and impact.</p>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white hover:underline">Our Mission</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:underline">Our Impact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:underline">Get Involved</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul>
              <li><a href="mailto:info@charity.org" className="text-gray-400 hover:text-white hover:underline">info@charity.org</a></li>
              <li><a href="tel:+91-987-665-6700" className="text-gray-400 hover:text-white hover:underline">+91-987-665-6700</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:underline">Location</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Certificate</h3>
            <a href="#" className="certificate-link text-gray-400 hover:text-white hover:underline">To check the authentication of your certificate, Please Click Here</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Charity Yard. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

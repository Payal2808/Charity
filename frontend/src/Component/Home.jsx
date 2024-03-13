import HomePhoto from "../assets/HomePhoto.png"

const Home = () => {
  return (
    <div className="flex items-center h-[90vh] justify-between flex-row-reverse">
    <img src={HomePhoto} alt="Homephoto" />
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Welcome to the Donation & Volunteer System</h1>
      <p className="text-sm font-normal">
        Our mission is to make it easy for you to support your favorite causes and
        connect with volunteering opportunities.
      </p>

    </div>
      {/* Add homepage content here */}
    </div>
  );
};

export default Home;
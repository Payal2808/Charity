
import './Gallery.css';
const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
      caption: "Delivery of items",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1679429321023-dff2ea455b0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tbXVuaXR5fGVufDB8fDB8fHww",
      caption: "Helping Hand",
    },
    {
      url: "https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbW11bml0eXxlbnwwfHwwfHx8MA%3D%3D",
      caption: "Our Volunteer",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1683134055585-3d84cb07b60e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
      caption: "Donation of Food",
    },
    {
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D",
      caption: "Needy Children  ",
    },
  ];

  return (
    
    <div className='container'>
   <div>
      <h1 className="text-2xl font-bold">Gallery</h1>
      <p className="text-xl font-bold ">The best way to find yourself is to lose yourself in the service of others..</p>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item ">
            <img src={image.url} alt={image.caption} />
            <p>{image.caption}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Gallery;
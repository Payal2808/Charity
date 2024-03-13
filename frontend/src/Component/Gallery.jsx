import React from "react";

const Gallery = () => {
  const images = [
    {
      url: "https://source.unsplash.com/random/800x600/?nature,landscape",
      caption: "A beautiful landscape",
    },
    {
      url: "https://source.unsplash.com/random/800x600/?animals,wildlife",
      caption: "A majestic animal",
    },
    {
      url: "https://source.unsplash.com/random/800x600/?people,smiling",
      caption: "A happy person",
    },
    {
      url: "https://source.unsplash.com/random/800x600/?technology,computer",
      caption: "A modern technology",
    },
    {
      url: "https://source.unsplash.com/random/800x600/?food,cooking",
      caption: "A delicious food",
    },
  ];

  return (
    <div>
      <h1>Gallery</h1>
      <p>Check out our gallery to see the impact of your donations and volunteering.</p>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.url} alt={image.caption} />
            <p>{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
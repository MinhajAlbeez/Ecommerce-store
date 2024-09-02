import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import PictureData from '../../assets/Images.json';
import './HeroSection.css'


const Carousell = () => {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(true);


  // useEffect(() => {
  //   setPictures(PictureData.HeroImg);
  //   console.log('Loaded images', PictureData.HeroImg);
  // }, []);

  useEffect(() => {
    // Simulate data loading
    const loadImages = async () => {
      try {
        // Simulate network request delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setPictures(PictureData.HeroImg);
        console.log('Loaded images', PictureData.HeroImg);
      } catch (error) {
        console.error('Error loading images', error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  if (loading) {
    return <div className="loading-indicator">Loading...</div>;
  }
  
  return (
    <div className="carousel-container">
      <Carousel style={{ height: '100%' }}>
        {pictures.map((picture) => (
          <div key={picture.id} style={{ height: '100%' }}>
            <img
              src={picture.url} // Directly use the URL from JSON
              alt={picture.altText}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' // Ensures the image covers the container
              }} 
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousell;

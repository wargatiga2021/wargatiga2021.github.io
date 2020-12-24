import React from 'react';
import Carousel from 'react-images';

const Marva = () => {
  const marvaImages = [
    { source: "/images/angkatan/marva/marva1.jpg", caption: "Festival Budaya 2020: Marvanata" }, 
    { source: "/images/angkatan/marva/marva2.jpg", caption: "Festival Budaya 2020: Marvanata" },
    { source: "/images/angkatan/marva/marva3.jpg", caption: "Festival Budaya 2020: Marvanata" },
    { source: "/images/angkatan/marva/marva4.jpg", caption: "Festival Budaya 2020: Marvanata" },
  ];

  return (
      <Carousel 
        views={marvaImages}
      />
  );
};

export default Marva;
import React from 'react';
import Carousel from 'react-images';

const Bakdes = () => {
  const BakdesImages = [
    { source: "/images/angkatan/bakdes/bakdes1.jpeg", caption: "Bakti Desa 3'2021" }, 
    { source: "/images/angkatan/bakdes/bakdes2.jpg", caption: "Bakti Desa 3'2021" },
    { source: "/images/angkatan/bakdes/bakdes3.jpg", caption: "Bakti Desa 3'2021" },
    { source: "/images/angkatan/bakdes/bakdes4.jpg", caption: "Bakti Desa 3'2021" },
    { source: "/images/angkatan/bakdes/bakdes5.jpeg", caption: "Bakti Desa 3'2021" },
    { source: "/images/angkatan/bakdes/bakdes6.jpeg", caption: "Bakti Desa 3'2021" }, 
    { source: "/images/angkatan/bakdes/bakdes7.jpg", caption: "Bakti Desa 3'2021" }, 
    { source: "/images/angkatan/bakdes/bakdes8.jpeg", caption: "Bakti Desa 3'2021" }, 
    { source: "/images/angkatan/bakdes/bakdes9.jpg", caption: "Bakti Desa 3'2021" }, 
    { source: "/images/angkatan/bakdes/bakdes10.jpg", caption: "Bakti Desa 3'2021" }, 
    { source: "/images/angkatan/bakdes/bakdes11.jpg", caption: "Bakti Desa 3'2021" }, 
    { source: "/images/angkatan/bakdes/bakdes12.jpg", caption: "Bakti Desa 3'2021" }, 
    { source: "/images/angkatan/bakdes/bakdes13.jpg", caption: "Bakti Desa 3'2021" }, 
  ];

  return (
      <Carousel 
        views={BakdesImages}
      />
  );
};

export default Bakdes;
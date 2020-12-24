import React from 'react';
import Carousel from 'react-images';

const PLiST = () => {
  const images = [
    { source: "/images/angkatan/plist/plist1.jpg", caption: "PLiST - Pengenalan Lingkungan Sekolah Tiga" }, 
    { source: "/images/angkatan/plist/plist2.jpg", caption: "PLiST - Pengenalan Lingkungan Sekolah Tiga" },
    { source: "/images/angkatan/plist/plist3.jpg", caption: "PLiST - Pengenalan Lingkungan Sekolah Tiga" },
    { source: "/images/angkatan/plist/plist4.jpg", caption: "PLiST - Pengenalan Lingkungan Sekolah Tiga" },
    { source: "/images/angkatan/plist/plist5.jpg", caption: "PLiST - Pengenalan Lingkungan Sekolah Tiga" },
  ];

  return (
      <Carousel 
        views={images}
      />
  );
};

export default PLiST;
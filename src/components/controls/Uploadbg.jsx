import React, { useState } from 'react';

function Uploadbg() {
  const [selectedImage, setSelectedImage] = useState(null);


  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      
      <input
        type="file"
        accept="image/*"
        onChange={handleImageSelect}
      />
      {selectedImage && (
        <div>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: '100%' }}
          />
        </div>
      )}
    </div>
  );
}

export default Uploadbg;
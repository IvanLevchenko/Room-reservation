import React, { useEffect, useState } from 'react';
import '../App.css';

export default function Modal({isActive, onCloseModal, data}) {

  let images = [];

  [...data.images].forEach(img => images.push({ original: img, thumbnail: img }))

  return (
    <div className={isActive ? "modal-wrapper active" : "modal-wrapper"} onClick={() => onCloseModal(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-images">
          <ImageGallery items={images} />;
        </div>
      </div>
    </div>
  );
};
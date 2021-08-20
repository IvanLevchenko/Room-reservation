import React from 'react'
import '../App.css'

export default function Modal({isActive, onCloseModal, data}) {
  
  return (
    <div className={isActive ? "modal-wrapper active" : "modal-wrapper"} onClick={() => onCloseModal(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-images">
          {/* {data.images.map((img, indx) => <img src={img} key={indx}/>)} */}
        </div>
      </div>
    </div>
  )
}
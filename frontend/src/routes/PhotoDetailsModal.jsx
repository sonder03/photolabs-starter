import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoListItem from "components/PhotoListItem";
import PhotoList from "components/PhotoList";

import { ACTIONS } from '../hooks/useApplicationData'; 

const PhotoDetailsModal = ({ state, dispatch }) => {  

  

  const handleItemClick = () => {   

    dispatch({ type: ACTIONS.SELECT_PHOTO, selectedPhoto: undefined });
  };

  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleItemClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__image">        
        <PhotoListItem sampleDataForPhotoListItem={state.selectedPhoto} state={state} dispatch={dispatch} showLargeImage={true} />
      </div>

      <div className="photo-details-modal__header">Similar Photos</div>

      <div className="photo-details-modal__images">        
        <PhotoList photos= {Object.values(state.selectedPhoto.similar_photos)} state = {state} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;

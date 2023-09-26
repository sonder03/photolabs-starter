import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "components/PhotoListItem";


const PhotoList = ({state, dispatch, photos}) => {
  return (

    

    <ul className="photo-list">
      {photos.map((photoData, index) => (
        <PhotoListItem key={photoData.id} sampleDataForPhotoListItem={photoData} state={state} dispatch={dispatch} />
      ))} 

    </ul>
  );
};

export default PhotoList;

import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

import { ACTIONS } from "../hooks/useApplicationData";

function PhotoFavButton({ state, dispatch, PhotoId }) { 
 
  let thisPhotoIsSelected = false;

  if (state.selectedPhotos.filter((pId) => pId == PhotoId).length > 0) {
    thisPhotoIsSelected = true;
  }

  const [selected, setSelected] = useState(thisPhotoIsSelected);  

  const handleClick = () => {
    let newStatus = !selected;
    setSelected(newStatus);

    if (newStatus) {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, PhotoId: PhotoId });
    } else {
            dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, PhotoId: PhotoId });
    }
  };

  return (
    <div className="photo-list__fav-icon">
      <div onClick={handleClick} className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
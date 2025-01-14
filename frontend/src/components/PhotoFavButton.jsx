import React, { useState, useEffect } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

import { ACTIONS } from "../hooks/useApplicationData";

function PhotoFavButton({ state, dispatch, PhotoId }) { 
 
  useEffect(() => {
    const thisPhotoIsSelected = state.selectedPhotos.includes(PhotoId);
    setSelected(thisPhotoIsSelected);
  }, [state.selectedPhotos, PhotoId]);

  const [selected, setSelected] = useState(false);

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


import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

import { ACTIONS } from '../hooks/useApplicationData';

const PhotoListItem = ({ sampleDataForPhotoListItem, state, dispatch , showLargeImage}) => {
  const { urls, user, location, category } = sampleDataForPhotoListItem;

  var imageCssClass="photo-list__image";
  if(showLargeImage)
  {imageCssClass+="Large"}

  const handleItemClick = () => {   
      if (!state.isModalVisible) {
        dispatch({
          type: ACTIONS.SELECT_PHOTO,
          selectedPhoto: sampleDataForPhotoListItem,
        });
      }
  };

  return (
    <div className="photo-list__item" >
      <PhotoFavButton state={state} dispatch = {dispatch} PhotoId = {sampleDataForPhotoListItem.id}/>
      <img src={urls.full} alt="Source" className={imageCssClass} onClick={handleItemClick} />
      <div className="photo-list__user-details">
        <div>
          <img
            src={user.profile}
            alt="Profile"
            className="photo-list__user-profile"
          />
        </div>

        <div>
          <div className="photo-list__user-info">{user.name}</div>

          <div className="photo-list__user-location">
            {location.city} {location.country}
          </div>
        </div>
      </div>
      {/* <div className="photo-list__category">
        Category: {sampleDataForPhotoListItem.categories.join(" , ")}
      </div> */}
    </div>
  );
};

export default PhotoListItem;

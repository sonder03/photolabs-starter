import React, { useState } from "react";

import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";

import "../styles/HomeRoute.scss";

const HomeRoute = ({ state, dispatch, photos, topics }) => {

  return (

    <div className="home-route">
      {
        <>
          <TopNavigationBar topics = {topics} state = {state} dispatch={dispatch} photosAreSelected= {state.isPhotoSelected}/>
          <PhotoList photos= {photos} state = {state} dispatch={dispatch} />
        </>

      }
    </div>
  );
};

export default HomeRoute;


import React, { useReducer, useEffect } from "react";
import HomeRoute from "routes/HomeRoute";
// import photosMockData from "mocks/photos";
// import topicsMockData from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

import { reducer, ACTIONS } from "hooks/useApplicationData";

import "./App.scss";

const initialState = {
  photoData: [],
  topicData: [],
  isModalVisible: false,
  selectedPhoto: undefined,
  selectedPhotos: [],
  isPhotoSelected: false,
};

const App = () => {
  // Use useReducer to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);

  // Pass state and dispatch function to components and sub-components
  const appProps = {
    state,
    dispatch,
  };

  return (    

    <div className="App">
      {
        <HomeRoute
          {...appProps}
          photos={appProps.state.photoData}
          topics={appProps.state.topicData}
        />
      }
      {state.isModalVisible && <PhotoDetailsModal {...appProps} />}
    </div>
  );
};

export default App;


import React, { useReducer, useEffect } from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { reducer, ACTIONS } from "hooks/useApplicationData";
import { useApplicationData } from "hooks/useApplicationData";

import "./App.scss";

const App = () => {
  
  const { state, dispatch } = useApplicationData();
  
  return (    

    <div className="App">
      {
        <HomeRoute
          state = {state}
          dispatch = {dispatch}
          photos={state.photoData}
          topics={state.topicData}
        />
      }
      {state.isModalVisible && <PhotoDetailsModal  state = {state}          dispatch = {dispatch} />}
    </div>
  );
};

export default App;

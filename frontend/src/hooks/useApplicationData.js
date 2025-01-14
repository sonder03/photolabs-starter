

import React, { useReducer, useEffect } from "react";


export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // initial data 
  fetchPhotoData(dispatch);
  fetchTopicData(dispatch);

  const fetchPhotoDataForTopic = (topicId) => {
    console.log(topicId);

    fetch("/api/topics/photos/"+topicId)
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  };

  return { state, dispatch, fetchPhotoDataForTopic};
};

export const initialState = {
  photoData: [],
  topicData: [],
  isModalVisible: false,
  selectedPhoto: undefined,
  selectedPhotos: [],
  isPhotoSelected: false,  
};

export const fetchPhotoData = (dispatch) => {
  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []);
};

export const fetchTopicData = (dispatch) => {
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);
};



export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:      

      if (!state.selectedPhotos.includes(action.PhotoId)) {
        const updatedSelectedPhotos = [...state.selectedPhotos, action.PhotoId];

        return { ...state, selectedPhotos: updatedSelectedPhotos , isPhotoSelected : updatedSelectedPhotos.length > 0};
      }

      return state;

    case ACTIONS.FAV_PHOTO_REMOVED:           
      
      if (state.selectedPhotos.includes(action.PhotoId)) {
        
        const updatedSelectedPhotos = state.selectedPhotos.filter(
          (photoId) => photoId !== action.PhotoId
        );

        return { ...state, selectedPhotos: updatedSelectedPhotos , isPhotoSelected : updatedSelectedPhotos.length > 0 };
      }

      return state;

    case ACTIONS.SET_PHOTO_DATA:
      
    console.log("ddddd")

      return { ...state , photoData: action.payload};

    case ACTIONS.SET_TOPIC_DATA:
      
      return { ...state , topicData: action.payload};

    case ACTIONS.SELECT_PHOTO:              

      const showModal = action.selectedPhoto == undefined? false:true;

      return { ...state, selectedPhoto : action.selectedPhoto ,  isModalVisible :  showModal};

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      // Handle DISPLAY_PHOTO_DETAILS action
      return { ...state /* add your changes here */ };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

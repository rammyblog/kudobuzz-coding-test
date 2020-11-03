import {
  START_UPLOAD,
  FAILED_UPLOAD,
  UPLOADED_FILE,
  CLEAR_STATE,
} from "./actionTypes"

const initialState = {
  loading: false,
  error: false,
  reviews: [],
  errorResponse: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_UPLOAD:
      return { loading: true, error: null, reviews: [], errorResponse: null }
    case UPLOADED_FILE:
      return {
        loading: false,
        error: false,
        reviews: action.payload,
        errorResponse: null,
      }
    case FAILED_UPLOAD:
      return { loading: false, error: true, errorResponse: action.payload }
    case CLEAR_STATE:
      return {
        loading: null,
        error: null,
        reviews: [],
        errorResponse: null,
      }

    default:
      return { state }
  }
}

export default reducer

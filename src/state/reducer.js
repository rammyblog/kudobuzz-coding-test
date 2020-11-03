import { START_UPLOAD, FAILED_UPLOAD, UPLOADED_FILE } from "./actionTypes"

const initialState = {
  loading: null,
  error: null,
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

    default:
      return { state }
  }
}

export default reducer

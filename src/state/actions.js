import { FAILED_UPLOAD, UPLOADED_FILE, START_UPLOAD } from "./actionTypes"

export const startUploadAction = () => {
  return {
    type: START_UPLOAD,
  }
}

export const uploadCSV = (data) => {
  return (dispatch) => {
    dispatch({ type: START_UPLOAD })
    dispatch({ type: UPLOADED_FILE, payload: data })
  }
}

export const uploadCSVFailed = (errorResponse) => {
  return (dispatch) => {
    dispatch({ type: START_UPLOAD })
    dispatch({ type: FAILED_UPLOAD, payload: errorResponse })
  }
}

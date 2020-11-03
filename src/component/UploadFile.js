import React from "react"
import { useDispatch } from "react-redux"
import CSVReader from "react-csv-reader"

function UploadFile() {
  const dispatch = useDispatch()

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }
  const errorUploading = (error) => {
    dispatch({ type: "FAILED_UPLOAD", payload: error })
  }

  const handleForce = (data, fileInfo) => {
    if (fileInfo.type !== "text/csv") {
      dispatch({
        type: "FAILED_UPLOAD",
        payload: "WRONG FILE UPLOADED (It only accepts CSV files)",
      })
    }
    dispatch({ type: "START_UPLOAD" })

    console.log(data)
    // title, message(*), rating(*), reviewer_name, reviewer_email(*), published, verified
    data.forEach((item, key) => {
      const {
        message,
        published,
        rating,
        reviewer_email,
        reviewer_name,
        title,
        verified,
      } = item
      if (!message) {
        dispatch({
          type: "FAILED_UPLOAD",
          payload: `Message is missing on row ${key}`,
        })
        return
      } else if (!rating) {
        dispatch({
          type: "FAILED_UPLOAD",
          payload: `Rating is missing on row ${key}`,
        })
        return
      } else if (!reviewer_email) {
        dispatch({
          type: "FAILED_UPLOAD",
          payload: `Reviewer Email is missing on row ${key}`,
        })
        return
      }
      if (!validateEmail(reviewer_email)) {
        dispatch({
          type: "FAILED_UPLOAD",
          payload: `Reviewer Email format is wrong on row ${key}`,
        })
        return
      }

      dispatch({ type: "UPLOADED_FILE", payload: data })
    })
  }

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
  }

  return (
    <div>
      <CSVReader
        cssClass="react-csv-input"
        label="Select CSV to read"
        onFileLoaded={handleForce}
        parserOptions={papaparseOptions}
        accept=".csv, text/csv"
        onError={errorUploading}
      />
    </div>
  )
}

export default UploadFile

import React from "react"
import { useDispatch } from "react-redux"
import CSVReader from "react-csv-reader"

function UploadFile() {
  const handleForce = (data, fileInfo) => {
    console.log(data)
  }

  //   const dispatch = useDispatch()

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
      />
    </div>
  )
}

export default UploadFile

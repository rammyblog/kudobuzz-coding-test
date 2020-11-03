import logo from "./logo.svg"
import "./App.css"
import UploadFile from "./component/UploadFile"
import DisplayReviews from "./component/DisplayReviews"

function App() {
  return (
    <>
      <div className="container">
        <UploadFile />
        <DisplayReviews />
      </div>
    </>
  )
}

export default App

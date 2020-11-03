import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Table from "react-bootstrap/Table"
import Spinner from "react-bootstrap/Spinner"
import Toast from "react-bootstrap/Toast"
function DisplayReviews() {
  const { reviews, loading, error, errorResponse } = useSelector(
    (state) => state
  )
  const dispatch = useDispatch()
  const toggleShow = () => {
    dispatch({ type: "CLEAR_STATE" })
  }
  //   console.log()
  return (
    <div>
      {error && (
        <Toast show={error} onClose={toggleShow} className="ml-auto">
          <Toast.Header>
            <strong className="mr-auto">An Error Occured</strong>
            {/* <small></small> */}
          </Toast.Header>
          <Toast.Body>{errorResponse}</Toast.Body>
        </Toast>
      )}
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Message</th>
            <th>Rating</th>
            <th>Reviewer Name</th>
            <th>Reviewer Email</th>

            <th>Published</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
          {reviews ? (
            reviews.map((data, key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{data.title}</td>
                <td>{data.message}</td>
                <td>{data.rating}</td>
                <td>{data.reviewer_name}</td>
                <td>{data.reviewer_email}</td>
                <td>{data.published ? "True" : "False"}</td>
                <td>{data.verified ? "True" : "False"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No data yet</td>
            </tr>
          )}

          {loading ? (
            <tr>
              <td>
                <Spinner animation="grow" />
              </td>
            </tr>
          ) : null}
        </tbody>
      </Table>
    </div>
  )
}

export default DisplayReviews

import React from "react"
import { useSelector } from "react-redux"
function DisplayReviews() {
  const reviews = useSelector((state) => state.reviews)
  return <div></div>
}

export default DisplayReviews

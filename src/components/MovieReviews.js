import React from 'react'

const MovieReviews = props => {
  const renderReviews = () => {
    return props.reviews.map(review => <div key={review.display_title} className="review">Title: {review.display_title}</div>)
  }

  return (
      <div className="review-list">
        {renderReviews()}
      </div>
    ) 
}

export default MovieReviews

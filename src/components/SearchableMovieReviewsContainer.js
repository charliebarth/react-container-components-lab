import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    state = {
      reviews: [],
      searchTerm: ""
    }
  
    handleChange = e => {
      this.setState({searchTerm: e.target.value})
    }
  
    handleSubmit = () => {
      fetch(URL + `&query=${this.state.searchTerm}`)
      .then(data => data.json())
      .then(reviews => {
        const firstThree = reviews.results.splice(0,3)
        this.setState({ reviews: firstThree })
      })
    }
  
    render() {
      return (
        <div className="searchable-movie-reviews">
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          </form>
  
          <MovieReviews reviews={this.state.reviews} />
        </div>
      )
    }
}
  
export default SearchableMovieReviewsContainer
  
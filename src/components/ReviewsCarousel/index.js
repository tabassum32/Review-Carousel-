// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReview: 0,
  }

  getReview = reviewsList => {
    const {activeReview} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReview
    ]

    return (
      <div className="reviews-container">
        <h1 className="reviews-heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="user-img" />
        <p className="name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  leftClick = () => {
    const {activeReview} = this.state

    if (activeReview > 0) {
      this.setState(previous => ({activeReview: previous.activeReview - 1}))
    }
    console.log('clicked on left')
  }

  rightClick = () => {
    const {activeReview} = this.state
    const {reviewsList} = this.props

    if (activeReview < reviewsList.length - 1) {
      this.setState(previous => ({activeReview: previous.activeReview + 1}))
    }
    console.log('clicked on right')
  }

  render() {
    //
    const {activeReview} = this.state

    const {reviewsList} = this.props
    console.log(activeReview)
    console.log(reviewsList)

    return (
      <div className="container">
        <button
          data-testid="leftArrow"
          type="button"
          onClick={this.leftClick}
          className="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="left-arrow"
          />
        </button>

        <button
          data-testid="rightArrow"
          type="button"
          onClick={this.rightClick}
          className="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="left-arrow"
          />
        </button>
      </div>
    )
  }
}
export default ReviewsCarousel

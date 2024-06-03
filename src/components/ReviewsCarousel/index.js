// Write your code here
import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {length: 0}

  onRightClick = () => {
    const {length} = this.state
    return this.setState(prevState => ({length: prevState.length + 1}))
  }

  onLeftClick = () => {
    const {length} = this.state
    return this.setState(prevState => ({length: prevState.length - 1}))
  }

  render() {
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList
    const {length} = this.state
    if (length > 3) {
      return (
        <div className="bg-container">
          <h1 className="reviews-heading">Reviews</h1>
          <div className="review-container">
            <button
              type="button"
              className="arrow-btn"
              onClick={this.onLeftClick}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-img"
              />
            </button>
            <div className="review-profile-container">
              <img src={reviewsList[3].imgUrl} alt={reviewsList[3].username} />
              <p className="profile-name">{reviewsList[3].username}</p>
              <p className="company-name">{reviewsList[3].companyName}</p>
              <p className="description">{reviewsList[3].description}</p>
            </div>
            <button
              type="button"
              className="arrow-btn"
              onClick={this.onRightClick}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow-img"
              />
            </button>
          </div>
        </div>
      )
    }
    if (length < 0) {
      return (
        <div className="bg-container">
          <h1 className="reviews-heading">Reviews</h1>
          <div className="review-container">
            <button
              type="button"
              className="arrow-btn"
              onClick={this.onLeftClick}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-img"
              />
            </button>
            <div className="review-profile-container">
              <img src={reviewsList[0].imgUrl} alt={reviewsList[0].username} />
              <p className="profile-name">{reviewsList[0].username}</p>
              <p className="company-name">{reviewsList[0].companyName}</p>
              <p className="description">{reviewsList[0].description}</p>
            </div>
            <button
              type="button"
              className="arrow-btn"
              onClick={this.onRightClick}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow-img"
              />
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <h1 className="reviews-heading">Reviews</h1>
        <div className="review-container">
          <button
            type="button"
            className="arrow-btn"
            onClick={this.onLeftClick}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-img"
            />
          </button>
          <div className="review-profile-container">
            <img
              src={reviewsList[length].imgUrl}
              alt={reviewsList[length].username}
            />
            <p className="profile-name">{reviewsList[length].username}</p>
            <p className="company-name">{reviewsList[length].companyName}</p>
            <p className="description">{reviewsList[length].description}</p>
          </div>
          <button
            type="button"
            className="arrow-btn"
            onClick={this.onRightClick}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-img"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

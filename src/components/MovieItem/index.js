import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  const renderPopupContent = close => (
    <>
      <button
        type="button"
        data-testid="closeButton"
        className="close-button"
        onClick={close}
      >
        <IoMdClose className="close-icon" />
      </button>
      <div className="player-container">
        <ReactPlayer url={videoUrl} controls width="100%" />
      </div>
    </>
  )

  return (
    <div className="movie-item-container">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
        }
      >
        {close => renderPopupContent(close)}
      </Popup>
    </div>
  )
}

export default MovieItem

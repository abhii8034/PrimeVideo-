import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import 'reactjs-popup/dist/index.css'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="movie-item-container">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        }
        className="popup-content"
        position="top center"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              testid="closeButton"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose size="15" />
            </button>
            <ReactPlayer
              className="react-player"
              width={450}
              height={230}
              url={videoUrl}
              controls
            />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem

import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video-container">
      <img
        alt="prime video"
        className="prime-video-image"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
      />
      <div className="movies-list-container">
        <h1 className="movie-heading">Action Movies</h1>
        <MoviesSlider itemsList={actionMoviesList} />
        <h1 className="movie-heading">Comedy Movies</h1>
        <MoviesSlider itemsList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo

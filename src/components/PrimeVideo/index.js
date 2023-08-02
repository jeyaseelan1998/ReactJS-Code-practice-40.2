import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const getActionMoviesList = () =>
    moviesList.filter(eachmovie => eachmovie.categoryId === 'ACTION')

  const getComedyMoviesList = () =>
    moviesList.filter(eachmovie => eachmovie.categoryId === 'COMEDY')

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="prime-video-movies-container">
        <h1 className="movie-category-title">Action Movies</h1>
        <MoviesSlider moviesList={getActionMoviesList()} />
        <h1 className="movie-category-title">Comedy Movies</h1>
        <MoviesSlider moviesList={getComedyMoviesList()} />
      </div>
    </div>
  )
}

export default PrimeVideo

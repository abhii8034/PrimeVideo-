import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {itemsList} = props

  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }

  return (
    <>
      <Slider {...settings}>
        {itemsList.map(each => (
          <MovieItem key={each.id} movieDetails={each} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider

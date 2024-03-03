import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import imageBannerDesktop1 from '../../assets/banner/desktop/bannerCarousel1.png'
import imageBannerDesktop2 from '../../assets/banner/desktop/bannerCarousel2.png'
import imageBannerDesktop3 from '../../assets/banner/desktop/bannerCarousel3.png'

import imageBannerTablet1 from '../../assets/banner/tablet/bannerCarousel1.png'
import imageBannerTablet2 from '../../assets/banner/tablet/bannerCarousel2.png'
import imageBannerTablet3 from '../../assets/banner/tablet/bannerCarousel3.png'

import imageBannerMobile1 from '../../assets/banner/mobile/bannerCarousel1.png'
import imageBannerMobile2 from '../../assets/banner/mobile/bannerCarousel2.png'
import imageBannerMobile3 from '../../assets/banner/mobile/bannerCarousel3.png'

import { Img } from './styles'

const ButtonNone = () => {
  return <div style={{ display: 'none' }} />
}

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    nextArrow: <ButtonNone />,
    prevArrow: <ButtonNone />,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <Slider {...settings}>
      <Img>
        <img src={imageBannerDesktop1} alt="Banner" className="is--desktop" />
        <img src={imageBannerTablet1} alt="Banner" className="is--tablet" />
        <img src={imageBannerMobile1} alt="Banner" className="is--mobile" />
      </Img>
      <Img>
        <img src={imageBannerDesktop2} alt="Banner" className="is--desktop" />
        <img src={imageBannerTablet2} alt="Banner" className="is--tablet" />
        <img src={imageBannerMobile2} alt="Banner" className="is--mobile" />
      </Img>
      <Img>
        <img src={imageBannerDesktop3} alt="Banner" className="is--desktop" />
        <img src={imageBannerTablet3} alt="Banner" className="is--tablet" />
        <img src={imageBannerMobile3} alt="Banner" className="is--mobile" />
      </Img>
    </Slider>
  )
}

export default Banner

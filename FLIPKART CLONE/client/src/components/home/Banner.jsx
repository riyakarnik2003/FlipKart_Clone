import Carousel from 'react-multi-carousel'

import { bannerData } from '../../constants/data';
import { styled } from '@mui/material';
import "react-multi-carousel/lib/styles.css";



const Image = styled('img')({
    width:'120%',
    height:180

})

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = ()=>{
    return(
      <Carousel responsive={responsive}
      swipeable={false}
      draggable={false}
      keyBoardControl={true}
      autoPlaySpeed={1000}
      slidesToSlide={1}
      containerClass="carousel-container"
      dotListClass='custom-dot-list-style'
      itemClass='carousel-item-padding-40-px'
      infinite={true}>
        {
            bannerData.map(data=>(
                <Image src={data.url} alt="" />
            ))
        }
      </Carousel>
    )
}

export default Banner;
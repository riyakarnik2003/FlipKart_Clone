import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { Box, Button, Divider, Typography, styled } from '@mui/material';
import Countdown from 'react-countdown'
import { Link } from 'react-router-dom';
const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
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


  const Component = styled(Box)`
    margin-top:10px;
    background:#FFFFFF;
  
  `;


  const Deal = styled(Box)`
    padding: 15px 20px;
    display:flex;
  
  `

  const Timer = styled(Box)`
    display:flex;
    margin-left:10px;
    align-items:center;
    color:#7f7f7f;
  
  `

  const DealText = styled(Typography)`
  font-size:22px;
  font-weight:600;
  margin-right:25px;
  line-height:32px
  
  `

  const ViewAllButton = styled(Button)`
  margin-left:auto;
  background-color:#2874F0;
  border-radius:2px;
  font-size:13px;
  font-weight:600;
  `


  const Image = styled('img')({
    width:'auto',
    height:150
  })


  const Text = styled(Typography)`
  font-size:14px;
  margin-top:5px;
  
  `
const Slide = ({products,title,timer})=>{
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({hours,minutes,seconds})=>{
        return <Box variant="span">{hours}:{minutes}:{seconds}</Box>
    }
    return(
        <Component>
            <Deal>
            <DealText>{title}</DealText>
            {
                timer && 

                <Timer>
                <img src={timerURL} alt="" style={{width:24}}/>
                <Countdown date={Date.now()+5.04e+7} renderer={renderer}/>
            </Timer>

            }
           
            <ViewAllButton variant='contained' color='primary'>View All</ViewAllButton>
            </Deal>
            <Divider/>
        <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        keyBoardControl={true}
        autoPlaySpeed={1000}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
        infinite={true}
        centerMode={true}>

            {
                products.map(product=>(
                  <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                    <Box textAlign={'center'} style={{padding:'25px 15px'}}>
                        <Image src={product.url} alt="" />
                        <Text style={{fontWeight:600,color:'#212121'}}>{product.title.shortTitle}</Text>
                        <Text style={{color:'green'}}>{product.discount}</Text>
                        <Text style={{color:'#212121',opacity:'0.6'}}>{product.tagline}</Text>
                    </Box>
                    </Link>

                ))
            }

        </Carousel>
        </Component>
        
    )
}

export default Slide;
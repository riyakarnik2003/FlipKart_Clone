
import  { AppBar, Toolbar,styled,Box, Typography } from '@mui/material'
import Search from './Search'
import CustomButtons from './CustomButtons'
import { Link } from 'react-router-dom'

const StyleHeader = styled(AppBar)`
    background:#2874f0;
    height:55px;


`

const Component = styled(Link)`
    margin-left:12%;
    line-height:0;
    text-decoration:none;
    color:inherit;

`

const SubHeading = styled(Typography)`
   font-size:12px;
    font-style:italic;

`

const ImagePlus = styled('img')({
    width:10,
    height:10,
    marginLeft:4
   
})


const CustomButtonWrapper = styled(Box)`
    margin: 0 5% 0 auto;

`

const Header = ()=>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
   return(
    <StyleHeader>
        <Toolbar style={{minHeight:55}}>
            <Component to='/'>
                <img src={logoURL} alt="" style={{width:75}}/>
                <Box style={{display:'flex'}}>
                    <SubHeading>
                        Explore &nbsp;
                        <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                    </SubHeading>
                    <ImagePlus src={subURL} alt="" />
                </Box>
            </Component>
            <Search/>
            <CustomButtonWrapper>
                <CustomButtons/>
            </CustomButtonWrapper>
        </Toolbar>
    </StyleHeader>
   )
}

export default Header;
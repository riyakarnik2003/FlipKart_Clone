
import { Box, Button, Typography,styled } from "@mui/material";
import { addEllipsis } from "../../utils/common-utils";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import ButtonGroup from './ButtonGroup'

const Component = styled(Box)`
    border-top:1px solid #f0f0f0;
    display:flex;
    background:#fff;

`

const LeftComponent = styled(Box)`

margin:20px;
display:flex;
flex-direction:column;

`

const SmallText = styled(Typography)`
color:#878787;
font-size:14px;
margin-top:10;
`

const RemoveButton = styled(Button)`
margin-top:20px;
font-size:16px;
color:#000;
font-weight:600;

`
const CartItems = ({item})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const dispatch = useDispatch();
    
    const removeItemfromCart=(id)=>{
        dispatch(removeFromCart(id))
    }
    return(
      <Component>
        <LeftComponent>
            <img src={item.url} alt=""  style={{height:110,width:110}}/>
            <ButtonGroup/>
        </LeftComponent>
        <Box style={{margin:20}}>
            <Typography>{addEllipsis(item.title.longTitle)}</Typography>
            <SmallText>Seller:RetailNet
            <Box component="span"><img src={fassured} alt=""  style={{width:50,marginTop:8,marginLeft:5}}/></Box>
            </SmallText>
            <Typography style={{margin:'20px 0'}}>
                    <Box component='span' style={{fontWeight:600, fontSize:18}}>₹&nbsp;&nbsp;&nbsp;
                        {item.price.cost}
                    </Box>
                    <Box component='span' style={{color:'#878787'}}>&nbsp;&nbsp;&nbsp;
                        <strike>₹{item.price.mrp}</strike>
                    </Box>

                    <Box component='span' style={{color:'#388e3c'}}>&nbsp;&nbsp;&nbsp;
                        {item.price.discount}
                    </Box>
             </Typography>
             <RemoveButton onClick={()=>removeItemfromCart(item.id)}>Remove</RemoveButton>
        </Box>
      </Component>
    )
}

export default CartItems;
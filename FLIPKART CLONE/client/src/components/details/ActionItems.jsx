
import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";

const LeftContainer = styled(Box)`
    min-width:40%;
    padding:40px 0 0 80px;
`

const Image = styled('img')({
    
   
    padding:15
})


const ActionItems = ({product})=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity,setQuantity] = useState(1);

    const {id}=product
const addItemCart = ()=>{
    dispatch(addToCart(id,quantity))
    navigate('/cart')
}




    return(
        <LeftContainer>
            <Box style={{padding:'15px 20px',
    border:'1px solid #f0f0f0', width:'85%'}}>
            <Image src={product.detailUrl} alt="" />
            </Box>
            
            <Button variant="contained" style={{width:'46%',height:50,borderRadius:2, marginRight:10, backgroundColor:'#ff9f00', marginTop:10}} onClick={()=>addItemCart()}><ShoppingCartIcon/>Add to Cart</Button>
            <Button variant="contained" style={{width:'46%',height:50,borderRadius:2,backgroundColor:'#fb541b',marginTop:10}}><FlashOnIcon/>Buy Now</Button>
        </LeftContainer>
    )
}

export default ActionItems;
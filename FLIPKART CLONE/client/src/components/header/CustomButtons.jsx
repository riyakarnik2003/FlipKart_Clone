import { Box, Button, Typography, styled,Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState,useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
const LoginButton = styled(Button)`

background:#fff;
color:#2874f0;
text-transform:none;
padding:5px 40px;
box-shadow:none;
font-weight:600;
height:32px;
border-radius:2px;

`

const Wrapper = styled(Box)`

display:flex;
margin:0 3% 0 auto;
& > button , & > p, & > div{
    margin-right:40px ! important ;
    font-size:14px;
    align-items:center;
}

`;


const Container = styled(Link)`
    display:flex;
    color:#fff;
    text-decoration:none;
`
const CustomButtons = ()=>{

    const [open,setOpen]=useState(false)
    const {account,setAccount} = useContext(DataContext)
    const {cartItems} = useSelector(state=>state.cart)
    const openDialog = ()=>{
        setOpen(true)
    }
    return(
<Wrapper>
    {
        account? <Profile account={account} setAccount={setAccount}/> : 
                <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
    }
   
   <Typography style={{marginTop:3,width:135}}>Become a seller</Typography>
   <Typography style={{marginTop:3,width:135}} >More</Typography>
        <Container to='/cart' style={{marginRight:12}}>
            <Badge badgeContent={cartItems?.length} color="secondary">
            <ShoppingCartIcon/>
            </Badge>
        <Typography style={{marginLeft:4}}>Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen}/>
</Wrapper>
    )
}

export default CustomButtons
import React from 'react'
import { Link } from 'react-router-dom';
import { useState ,useRef,useEffect} from 'react';
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import PersonOutline from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { useCart } from "../CartContext";

const Container=styled.div`
height:60px;
box-shadow:0 2px 8px rgba(0,0,0,0.9);
background-color:#20263E;
color:white;
position:sticky;
top:0;
z-index:1000;
`
const Wrapper=styled.div`
padding:10px 20px;
display:flex;
align-items:center;
justify-content:space-between;

`
const Left=styled.div`
flex:1;
display:flex;
align-items:center;
gap:50px;
`

const SearchContainer=styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
padding:5px;
border-radius: 20px;
background: #f9f9f9;
transition:box-shadow 180ms ease,width 240ms ease;
&:focus-within {
    box-shadow: 0 0 8px rgba(0,0,0,0.15);
}
@media(max-width:830px){
    width:${props=>(props.$focused?"200px":"140px")};
} 
`
const Input=styled.input`
border:none;
outline:none;
background:transparent;
padding:5px;
width:100%;
font-size:15px;
`

const Logo=styled.h1`
font-weight:bold;
font-size:28px;
`
const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`
const DesktopMenu=styled.nav`
display:flex;
align-items:center;
@media(max-width:830px){
    display:none;
}
`
const MenuItem=styled.div`
background:transparent;
font-size:14px;
cursor:pointer;
margin-left:25px;
position:relative;
padding-left: 15px;
&::before {
    content: ${props=>(props.$isMobile? " ":"'|'")};
    position: absolute;
    left: 0;
    color: white; 
}
&:first-child::before {
    content: "";
}
transition:transform 160ms ease,color 160ms ease,background 160ms ease;&:hover{
    color:#0077ff;
    transform:translateY(-2px);
}
`
const MenuIcons=styled.div`
background:transparent;
font-size:14px;
cursor:pointer;
margin-left:25px;
`
const MobileIcon=styled.button`
display: none;
background: transparent;
border: none;
color:white;
cursor: pointer;
@media (max-width: 830px) {
display: inline-flex;
align-items: center;
justify-content: center;
}
`
const MobileMenu=styled.aside`
position: fixed;
top: 0;
right: 0;
height: 100vh;
width: 280px;
background: #fff;
box-shadow: -12px 0 30px rgba(10, 10, 10, 0.08);
transform: translateX(${props => (props.open ? '0' : '100%')});
transition: transform 500ms cubic-bezier(.2,.9,.2,1);
padding: 20px;
z-index: 1200;
display: flex;
flex-direction: column;
gap: 16px;
`
const MobileOverlay = styled.div`
display: ${props => (props.open ? 'block' : 'none')};
position: fixed;
inset: 0;
background: rgba(0,0,0,0.36);
z-index: 1100;
`;

const MobileMenuTop = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color:black;
`;

const MobileMenuList = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
margin-top: 6px;
color:black;

`;

const Divider = styled.hr`
border: none;
height: 1px;
background: #c8c1c1aa;
margin: 8px 0;
`;
const Navbar = ({onSearchChange}) => {  
    const { cart } = useCart(); 
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    useEffect(() => {
    const icon = document.getElementById("icon");

    if (icon) {
    icon.onclick = function () {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            icon.src = "sun.png"; 
        } else {
            icon.src = "moon.png"; 
        }
        };
    }
}, []);

    const [open, setOpen] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const [searchTerm,setSearchTerm]=useState(""); //controls only the text box (what the user sees as they type).
    const desktopinputRef=useRef(null);
    const asideinputRef=useRef(null);

    const handleIconClick=(target)=>{
        if(target==="desktop" && desktopinputRef.current){
            desktopinputRef.current.focus();
        }
        if(target==="aside" && asideinputRef.current){
            asideinputRef.current.focus();
        }
    }

    const handleSearchInput=(e)=>{  
        const value = e.target.value;
        setSearchTerm(value);
        if (onSearchChange) onSearchChange(value);  //notifies the parent (Home) that something changed
};

    return (
    <Container>
    <Wrapper>
        <Left>
        <Logo>Spark</Logo>
            <SearchContainer 
        $focused={searchFocused}>
        <Input
            ref={desktopinputRef}
            placeholder='Search for products...'
            value={searchTerm}
            onChange={handleSearchInput}
            onFocus={()=>setSearchFocused(true)}
            onBlur={()=>setSearchFocused(false)}/>
        <SearchIcon  style={{ color:"black" , cursor: "pointer" }} 
            onClick={()=>handleIconClick("desktop")}/>
        </SearchContainer>
        </Left>
        <Right>
        <DesktopMenu>
        <MenuItem>
            <Link to="/" style={{color:"inherit", textDecoration:"none"}}>Home</Link>
        </MenuItem>
        <MenuItem>
            <Link to="/shop" style={{color:"inherit", textDecoration:"none"}}>Shop</Link>
        </MenuItem>
        <MenuItem>
            <Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>About</Link>
        </MenuItem>
        <MenuItem>
            <Link to="/cont" style={{ color: "inherit", textDecoration: "none" }}>Contact</Link>
        </MenuItem>
            <MenuItem>
                <Link to="/register" style={{color:"inherit", textDecoration:"none"}}>REGISTER</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/signin" style={{ color: "inherit", textDecoration: "none" }}>SIGNIN</Link>
            </MenuItem>
            <MenuIcons>
            <Badge color="error" badgeContent={0} showZero>
            <FavoriteBorder sx={{transition:"color 0.3s ease, transform 0.2s ease",
            "&:hover":{color:"red",transform: "scale(1.1)"}}}/>
            </Badge>
            </MenuIcons>
            <MenuIcons>
                <Badge color="primary" badgeContent={totalItems} showZero>
                <Link to="/cart" style={{ color: "inherit" }}> 
                    <ShoppingCartOutlined sx={{transition:"color 0.3s ease, transform 0.2s ease",
                    "&:hover":{color:"blue",transform: "scale(1.1)"}}}/>
                </Link>
                </Badge>
            </MenuIcons>
            <img src="moon.png" id="icon" style={{cursor:"pointer",width:"25px" ,marginLeft:"25px"}}></img>
            </DesktopMenu>
            <MobileIcon onClick={() => setOpen(true)}>
            <MenuIcon />
            </MobileIcon>
        </Right>
    </Wrapper>
    <MobileOverlay open={open} onClick={() => setOpen(false)} />


<MobileMenu open={open} >
<MobileMenuTop>
<Logo>Spark</Logo>
</MobileMenuTop>

<SearchContainer $focused={searchFocused}>
<Input
ref={asideinputRef}
placeholder="Search for products"
value={searchTerm}
onChange={handleSearchInput}
onFocus={() => setSearchFocused(true)}
onBlur={() => setSearchFocused(false)}
/>
<SearchIcon style={{ color:"black" ,cursor: "pointer" }} 
            onClick={()=>handleIconClick("aside")} />
</SearchContainer>

<Divider />

<MobileMenuList>
<MenuItem $isMobile onClick={() => setOpen(false)}>
    <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
</MenuItem>
<MenuItem $isMobile onClick={() => setOpen(false)}>
    <Link to="/shop" style={{ color: "inherit", textDecoration: "none" }}>Shop</Link>
</MenuItem>
<MenuItem $isMobile onClick={() => setOpen(false)}>
    <Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>About</Link>
</MenuItem>
<MenuItem $isMobile onClick={() => setOpen(false)}>
    <Link to="/cont" style={{ color: "inherit", textDecoration: "none" }}>Contact</Link>
</MenuItem>
<Divider />
<MenuItem $isMobile onClick={() => setOpen(false)}>
    <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>Register</Link>
</MenuItem>
<MenuItem $isMobile onClick={() => setOpen(false)}>
    <Link to="/signin" style={{ color: "inherit", textDecoration: "none" }}>SignIn</Link>
</MenuItem>
<MenuItem $isMobile onClick={() => setOpen(false)}>
<Link to="/cart" style={{ color: "inherit", textDecoration: "none"}}>
<Badge>
<ShoppingCartOutlined />
</Badge>
<span style={{ marginLeft: 10 }}>Cart</span>
</Link>
</MenuItem>
</MobileMenuList>

</MobileMenu>
</Container>
)
}

export default Navbar

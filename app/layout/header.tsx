import { styled } from "@mui/system";

import {nav} from "../../data/data";

import Link from 'next/link';

import {FaSignInAlt} from  'react-icons/fa';
import {GoSignIn} from  'react-icons/go';
import {GiHamburgerMenu} from  'react-icons/gi';
import {CgMathPlus} from  'react-icons/cg';
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';

const HeaderEl = styled("header")(()=>`

background:#ffffff;
height:10hv;
box-shadow : 0 5px 30px rgb(0 22 84 / 10%);
position:sticky;
top:0px;
z-index:999;
`)
const HeaderContainerEl = styled("div")(()=>`

display:flex;
align-items :center;
justify-content:space-between;
width:100%;
margin :0px auto;
`)


const LogoEl = styled("div")(()=>`
display:flex;
align-items:center;
margin-left:5px;

`);

const ImageEl = styled("img")(()=>`
 height:50px;


`);

const NavEl = styled("div")(()=>`
display:flex;
align-items:center;

`);

const NavUlEl = styled("ul")<{isMobile:boolean,isTablet:boolean}>(({isMobile,isTablet})=>`
display:flex;
align-items:center;
flex-direction:${(isMobile||isTablet)?"column":"row"};
position:${(isMobile||isTablet)?"absolute":"relative"};
top:${(isMobile||isTablet)?"45px":"0px"};
left:0px;
background:${(isMobile||isTablet)?"#17a335":"unset"};
width:${(isMobile||isTablet)?"100%":"auto"};
padding:10px;


`);
const NavItemEl = styled("li")<{isMobile:boolean,isTablet:boolean}>(({isMobile,isTablet})=>`
padding:5px 10px;
width:${(isMobile||isTablet)?"100%":"auto"};

display:flex;

`);

const ButtonSectionEl = styled("div")(()=>`
  padding:0px 10px;
  display:flex;
`)
const ButtonEl = styled("button")<{bg?:string,isMobile?:boolean}>(({bg,isMobile})=>`
   border-radius:0.3rem;
   border:none;
   background:${bg};
  display:flex;
  align-items:center;
  justify-content:center;
  margin:${isMobile?"0px":"0px 10px"};
 width: 90px;
    height: 40px;
`)

const ButtonTextEl = styled("span")(()=>`
color:#ffffff;
font-weight:bold;
font-size:0.9rem;
margin-left:0.5rem; 
`)

const IconSignUpEl = styled(FaSignInAlt)(()=>`
  
    color:#ffffff;
    font-weight:bold;
    font-size:0.9rem;
`)
const IconSignInEl = styled(GoSignIn)(()=>`
  
    color:#ffffff;
    font-weight:bold;
    font-size:0.9rem;
`)

const LinkEl = styled("a")<{isMobile:boolean,isTablet:boolean}>(({isMobile,isTablet})=>`
  font-size:1.35rem;
  width:100%;
  &:hover{
    color:${isMobile ||  isTablet?'#ffffff':'#17a335'};
  }
`)

const ButtomToggleSectionEl = styled("div")(()=>`

`);

const ButtomToggleEl = styled("button")(()=>`
  
border-radius:0.3rem;
border:none;
background:#17a335;
display:flex;
align-items:center;
justify-content:center;

padding:0.5rem;
cursor:pointer;
`);

const GiHamburgerMenuEl = styled(GiHamburgerMenu)(()=>`
  
color:#ffffff;
font-size:1.4rem;
`);

const CgMathPlusEl = styled(CgMathPlus)(()=>`
color:#ffffff;
font-size:1.4rem;
transform:rotate(45deg)
`);


const Header = ()=>{
    
    const [navList ,setNavList] = useState(false);
    const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));

    useEffect(()=>{

       
        if(isMobile || isTablet)
        setNavList(false);
    },[isTablet,isMobile])
    return (

        <HeaderEl>
          <HeaderContainerEl>
            <LogoEl>
              <ImageEl src="../../images/logo.png" alt="rent-up" />
            </LogoEl>
           
           {
            !navList && (isMobile || isTablet) ?<></> :
            <NavEl>
            <NavUlEl isMobile={isMobile} isTablet={isTablet}>
               {
                  nav.map((item:any,index:number)=>
                  
                  <NavItemEl isMobile={isMobile} isTablet={isTablet}>
                  <Link href={item.link}>
                    <LinkEl isMobile={isMobile} isTablet={isTablet} href={item.link} >{item.title}</LinkEl>
                  </Link>
                </NavItemEl>
                  )
               }
            </NavUlEl>
          </NavEl>
           }
          
           
           <ButtonSectionEl>
              <ButtonEl bg="#0070f3" isMobile={isMobile}>
              
                <Link href="/sign-in">
                     <a href="/sign-in" >
                     <IconSignInEl/>
                <ButtonTextEl>SignIn</ButtonTextEl>
                </a>
                   </Link>
              </ButtonEl>

              <ButtonEl  bg="#17a335">
              <Link href="/sign-up">
                     <a href="/sign-up" >
                     <IconSignUpEl/>
                <ButtonTextEl>SignUp</ButtonTextEl>
                </a>
                   </Link>
              </ButtonEl>

                 
         {
            (isMobile || isTablet) ?

            <ButtomToggleSectionEl>
            <ButtomToggleEl onClick={()=>setNavList(!navList)}>
                  {
                
                   navList?
                   <CgMathPlusEl />
               :<GiHamburgerMenuEl/>

                  }
           </ButtomToggleEl>
          </ButtomToggleSectionEl>
          :
          <></>
         }
           
              
           </ButtonSectionEl>
 

           
          </HeaderContainerEl>

        </HeaderEl>
      
    );
}
export default Header;
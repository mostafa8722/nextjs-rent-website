import { styled } from "@mui/system";
import Heading from "../heading";
import SearchInput from "./searchInput";
import {FiSearch} from "react-icons/fi"
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';

const HeroEl = styled("section")(()=>`
min-height:90vh;
width:100%;
background-image : url('../../images/banner.png');
background-position:50%;
background-repeat:no-repeat;
background-size:cover;
padding-bottom:20px;

`);
const ContainerEl = styled("div")<{isMobile?:boolean,isTablet?:boolean}>(({isMobile,isTablet})=>`
padding-top:${(isMobile || isTablet)?"20px":"20%"};
display: flex;
flex-direction: column;
align-items: center;
`);
const FormEl = styled("form")<{isMobile?:boolean,isTablet?:boolean}>(({isMobile,isTablet})=>`
background:#fefefe;
border-radius:10px;
width:80%;
height:${(isMobile || isTablet)?"auto":"100px" };
margin-top:${(isMobile || isTablet)?"10px":"30px" };;
display:grid;
grid-template-columns:  ${(isMobile || isTablet)?"1fr":'repeat(3,1fr) 100px' } ;
`);

const ButtonSectionEl = styled("div")(()=>`
 display:flex;
 justify-content:center;
 align-items:center;
`);

const ButtonEl = styled("button")(()=>`
 display:flex;
 justify-content:center;
 align-items:center;
 background: #17a335;
 height:50px;
 width:50px;
 border:none;
 border-radius:0.5rem;
 cursor:pointer;
`);

const SearchIconEl = styled(FiSearch)(()=>`
color:#ffffff;
font-size:1.3rem;
`);
const Hero =()=>{

    const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));
    return (<>
    <HeroEl>
      <ContainerEl  isMobile={isMobile}  isTablet={isTablet}>
        <Heading 
        title={{name:"Search Your Next Home",color:"#ffffff",size:'60px'}}
         subTitle={{name:"Find new & featured property located in your local city.",color:"#f3f3f3",size:'1.2rem'}} />
         <FormEl action="/search" method="get" isMobile={isMobile}  isTablet={isTablet}>
           <SearchInput  label="City/Street" holder="Location" name="city" />
           <SearchInput label="Property Type" holder="Property Type" name="property" />
           <SearchInput label="Price Range" holder="Price Range" name="price" />
           <ButtonSectionEl >
             <ButtonEl>
               <SearchIconEl/>
             </ButtonEl>
           </ButtonSectionEl>
         </FormEl>
      </ContainerEl>

    </HeroEl>

       
    </>)
}

export default Hero;
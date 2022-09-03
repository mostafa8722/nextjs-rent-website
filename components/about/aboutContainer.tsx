import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import Link  from "next/link"

const AboutEl = styled("section")<{isMobile:boolean,isTablet:boolean}>(({isMobile,isTablet})=>`
 display:grid;
 grid-template-columns:${(isMobile || isTablet)?"1fr":"repeat(2,1fr)"}


`)

const ContainerTextEl = styled("div")<{}>(()=>`
 display:flex;
     flex-direction:column;
    justify-content:center;
 align-items:center;
 padding-top:50px;
 padding-bottom:50px;
 
`)

const ContainerImageEl = styled("div")<{}>(()=>`
 display:flex;
     flex-direction:column;
    justify-content:center;
 align-items:center;
 padding-top:50px;
 padding-bottom:50px;
`)

const ImageDivEl = styled("div")<{}>(()=>`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
`)
const ImageEl = styled("img")<{}>(()=>`
height:300px;
margin:5px;
`)
const TitleEl2 = styled("h2")<{}>(({})=>`
font-size:24px;
color:#3A3A3A;
font-weight:700;
line-height:30px;

`)
const TitleEl = styled("h2")(()=>`
margin-top:100px;
font-size:2rem;
color:#ffffff;
margin-left:50px;
`)


const SubTitleEl2 = styled("span")<{}>(({})=>`
font-size:18px;
color:#3A3A3A;
font-weight:200;
line-height:30px;
text-align: left;
width:80%;
`)


const ButtonEl = styled("a")<{}>(({})=>`
border-radius:20px;

color:#ffffff;
font-weight:400;
background:#1698DA;
display:flex;
justify-content:center;
align-items:center;
margin-top:20px;
width:120px;
height:40px;
cursor:pointer;
`)
const ContactContainerEl =styled("div")(()=>`
display:flex;
flex-direction:column;
`)
const HeaderEl = styled("div")<{img:string}>(({img})=>`
height:250px;
background-image : url(${img});
background-repeat :no-repeat;
background-size:cover;
position:relative;
display:flex;
flex-direction:column;
background-position:50%;
&:after{
    position:absolute;
    background-color:rgba(0,0,0,0.3);
    content :"";
    top:0px;
    left:0px;
    height:100%;
    width:100%;
}
`)
const SubTitleEl = styled("span")(()=>`
margin-top:10px;
margin-left:50px;
font-size:2.5rem;
color:#ffffff;

`)


const About = ()=>{

    const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));

    return (
      <ContactContainerEl>
      <HeaderEl img="../../images/blog.jpg">
         <TitleEl>Contacts</TitleEl>
         <SubTitleEl>Contacts -All Contacts</SubTitleEl>
      </HeaderEl>
  

     
        
       
    
        <AboutEl isMobile={isMobile} isTablet={isTablet} >
              <ContainerTextEl>
                <TitleEl2>Our Agency Story</TitleEl2>
             
                <SubTitleEl2>
               
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip

                </SubTitleEl2>
                <Link href={"#"}>
                <ButtonEl href={"#"}>Read More</ButtonEl>
                </Link>
              </ContainerTextEl>
              <ContainerImageEl>
                <ImageDivEl>
                    <ImageEl src="./images/immio.jpg" />
                </ImageDivEl>
              </ContainerImageEl>
        </AboutEl>
        </ContactContainerEl>
    )
}
export default  About;
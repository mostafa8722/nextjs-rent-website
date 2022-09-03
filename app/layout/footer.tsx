import { styled } from "@mui/system";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import Link from "next/link";



const FootersEl =styled("footer")<{isMobile?:boolean,isTablet?:boolean}>(({isMobile,isTablet})=>`
display:flex;
flex-direction:column;

background:#122947;

`)
const FootersSectionEl =styled("div")<{isMobile?:boolean,isTablet?:boolean}>(({isMobile,isTablet})=>`
display:grid;
grid-template-columns:  ${ 'repeat(5,1fr);' } ;
grid-gap: 20px;

padding:50px 0px 40px 0px;

background:#122947;

`)


const FooterLogoSectionEl =styled("div")<{isMobile?:boolean,isTablet?:boolean}>(({isMobile,isTablet})=>`
  display:flex;
  flex-direction:column; 
  align-items:center;
  grid-column:  ${ isMobile?"1/ 6": isTablet?'1/6  ':'1/3' } ;


`)

const LogoEl = styled("img")(()=>`
eight: 60px;
    width: 170px;
    object-fit: contain;
`)
const TitleEl = styled("h2")(()=>`
 color:#ffffff;
 font-size:1.5rem;
 margin-top:1rem;
`)

const SubTitleEl = styled("span")(()=>`
color: #f1f1f1;
margin-top: 1rem;
max-width: 80%;
text-align: center;
`)
const SectionEmailEl = styled("div")(()=>`
display:flex;
margin-top:1rem;
margin-bottom:1rem;
align-items:center;
`)
const EmailEl = styled("input")(()=>`
border:0.05rem solid #eee;
background:#fff;
border-radius:0.5rem;
height:45px;
min-width:300px;
padding:0px 10px;
`)
const ButtonEl = styled("button")<{isStandard:boolean}>(({isStandard})=>`
border-radius:2rem;


background:${isStandard?"rgba(39, 174, 96)":"#ffffff"};
display:flex;
align-items:center;
justify-content:center;
  margin-left:0.2rem;
padding:1rem  1.5rem;
cursor:pointer;


border:${!isStandard?"0.5rem solid rgba(39, 174, 96, 0.12)":"none"};

`)

const ButtonTextEl = styled("span")<{isStandard:boolean}>(({isStandard})=>`
color:${isStandard?"#ffffff":"rgba(39, 174, 96)"};

font-size:1.3rem;

`)


const SectionLinkEl = styled("div")
<{isMobile?:boolean,isTablet?:boolean,grid1:string,grid2:String}>
(({isMobile,isTablet,grid1,grid2})=>`
display:flex;
flex-direction:column;
align-items:${(isMobile||isTablet) ? "center":"start"};
text-align:${(isMobile||isTablet) ? "center":"left"};
grid-column:  ${ isMobile?grid1: isTablet?grid1:grid2 } ;


`)
const LinkEl = styled("a")<{isMobile:boolean,isTablet:boolean}>(({isMobile,isTablet})=>`
  font-size:1rem;
  color:#ffffff;
  margin-top:0.65rem;
  width:100%;
  &:hover{
    color:${isMobile ||  isTablet?'#ffffff':'#17a335'};
  }
`)

const DesignEl = styled("div")(()=>`
 display:flex;
 align-items:center;
 justify-content:center;

`)
const LinkDesignEl = styled("a")(()=>`
  font-size:1rem;
  color:#ffffff;
  &:hover{
    color:red;
  }
`)
const TitleLinkEl = styled("h3")(()=>`
 color:#ffffff;
 font-size:1.25rem;
 margin-top:1rem;
 margin-bottom:0.5rem;
`)
const CopyRightEl = styled("span")(()=>`
color: #f1f1f1;
margin-top: 0.2rem;
padding-bottom: 1.5rem;
width: 100%;
text-align: center;
`)
const DesignTextEl = styled("span")(()=>`
color: #f1f1f1; 
margin-right:0.4rem;
text-align: center;
`)

const Footers = ()=>{
    const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));
    return (<>
    <FootersEl isMobile={isMobile} isTablet={isTablet}>
       <FootersSectionEl isMobile={isMobile} isTablet={isTablet}>
       <FooterLogoSectionEl isMobile={isMobile} isTablet={isTablet}>
           <LogoEl src="../../images/logo-light.png" />
           <TitleEl>Do You Need Help With Anything?</TitleEl>
           <SubTitleEl>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</SubTitleEl>
           <SectionEmailEl>
            <EmailEl type={"text"} placeholder="Email Address ..." />
            <ButtonEl isStandard={true}>
                <ButtonTextEl isStandard={true}>Subscribe</ButtonTextEl>
            </ButtonEl>
           </SectionEmailEl>
         </FooterLogoSectionEl>
         <SectionLinkEl isMobile={isMobile} isTablet={isTablet} grid1="2/3" grid2="3/4">
            <TitleLinkEl>Pages</TitleLinkEl>
              <Link href={"#"}>
                <LinkEl isMobile={isMobile} isTablet={isTablet} href={"#"} >Home</LinkEl>
               </Link>
               <Link href={"#"}>
                <LinkEl isMobile={isMobile} isTablet={isTablet} href={"#"} >Services</LinkEl>
               </Link>
               <Link href={"#"}>
                <LinkEl isMobile={isMobile} isTablet={isTablet} href={"#"} >About</LinkEl>
               </Link>
               <Link href={"#"}>
                <LinkEl isMobile={isMobile} isTablet={isTablet} href={"#"} >Projects</LinkEl>
               </Link>
         </SectionLinkEl>

         <SectionLinkEl isMobile={isMobile} isTablet={isTablet}  grid1="3/4" grid2="4/5" >
            <TitleLinkEl>Pages</TitleLinkEl>
              <Link href={"#"}>
                <LinkEl isMobile={isMobile} isTablet={isTablet} href={"#"} >Home</LinkEl>
               </Link>
               <Link href={"#"}>
                <LinkEl isMobile={isMobile} isTablet={isTablet} href={"#"} >Services</LinkEl>
               </Link>
               <Link href={"#"}>
                <LinkEl isMobile={isMobile} isTablet={isTablet} href={"#"} >About</LinkEl>
               </Link>
               <Link href={"#"}>
                <LinkEl isMobile={isMobile} isTablet={isTablet} href={"#"} >Projects</LinkEl>
               </Link>
         </SectionLinkEl>

         <SectionLinkEl isMobile={isMobile} isTablet={isTablet}  grid1="4/5" grid2="5/6" >
            <TitleLinkEl>Pages</TitleLinkEl>
              <Link href={"#"}>
                <LinkEl isMobile={isMobile} isTablet={isTablet} href={"#"} >Home</LinkEl>
               </Link>
               <Link href={"#"}>
                <LinkEl isMobile={isMobile} isTablet={isTablet} href={"#"} >Services</LinkEl>
               </Link>
               <Link href={"#"}>
                <LinkEl isMobile={isMobile} isTablet={isTablet} href={"#"} >About</LinkEl>
               </Link>
               <Link href={"#"}>
                <LinkEl isMobile={isMobile} isTablet={isTablet} href={"#"} >Projects</LinkEl>
               </Link>
         </SectionLinkEl>
       </FootersSectionEl >
       <DesignEl>
       <DesignTextEl>
            Design and Develop by
         </DesignTextEl>
         <LinkDesignEl href="https://mostafanazarband.vercel.app">Mostafa Nazarband</LinkDesignEl>
       </DesignEl>
         <CopyRightEl>
            All right reserved @{new Date().getFullYear()}
         </CopyRightEl>
        
    </FootersEl> 
    </>)
}
export default Footers;
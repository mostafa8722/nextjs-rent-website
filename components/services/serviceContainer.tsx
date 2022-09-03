import { styled } from "@mui/system";

import Features from "../home/features";

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

const TitleEl = styled("h2")(()=>`
margin-top:100px;
font-size:2rem;
color:#ffffff;
margin-left:50px;
`)

const SubTitleEl = styled("span")(()=>`
margin-top:10px;
margin-left:50px;
font-size:2.5rem;
color:#ffffff;

`)




const ServiceContainerEl =styled("div")(()=>`
display:flex;
flex-direction:column;
`)

const ServiceContainer = ()=>{

    return(<>
    <ServiceContainerEl>
      <HeaderEl img="../../images/service.jpg">
         <TitleEl>Services</TitleEl>
         <SubTitleEl>Services -All Services</SubTitleEl>
      </HeaderEl>
    <Features />
 
   
    </ServiceContainerEl>

    </>);
}
export default ServiceContainer;
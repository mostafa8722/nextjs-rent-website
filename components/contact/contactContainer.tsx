import { InputLabel } from "@mui/material";
import { styled } from "@mui/system";



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

const TitleEl2 = styled("h4")(()=>`
margin-top:1rem;
font-size:1.3rem;
color:#676767;
margin-left:20px;
`)


const FormGridEl =styled("div")<{grid:number}>(({grid})=>`
display:grid;
grid-template-columns:repeat(${grid},1fr);
grid-gap:30px;
margin-top:20px;
margin:20px 20px 0px 20px;
`)
const InputEl =styled("input")(()=>`
height:45px;
background:#ffffff;
border-radius:0.1rem;
padding:0px 10px;
border:0.1rem solid #eeeeee;

`)

const TextAreaEl =styled("textarea")(()=>`
min-height:110px;
background:#ffffff;
border-radius:0.1rem;
padding:0px 10px;
border:0.1rem solid #eeeeee;

`)

const ContactContainerEl =styled("div")(()=>`
display:flex;
flex-direction:column;
`)
const ContactEl =styled("div")<{padding?:string,top?:string}>(({padding,top})=>`
  display:flex;
  flex-direction:column;
  padding:${padding?"30px 0px 30px 0px":"30px 0px 30px 0px"} ;
  

  border-radius: 6px;
  box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
  overflow:hidden;
  margin-top:${top?top:"0px"};
  margin-bottom:${top?top:"0px"};
 
    
   
`)
const ButtonEl = styled("button")<{bg?:string,isMobile?:boolean}>(({bg,isMobile})=>`
   border-radius:0.3rem;
   border:none;
   background:${bg};
  display:flex;
  align-items:center;
  justify-content:center;
  margin:${isMobile?"0px":"20px 20px"};
 width: 90px;
    height: 40px;

`)

const ButtonTextEl = styled("span")(()=>`
color:#ffffff;
font-weight:bold;
font-size:0.9rem;
margin-left:0.5rem; 
`)

const ContactContainer = ()=>{

    return(<>
    <ContactContainerEl>
      <HeaderEl img="../../images/blog.jpg">
         <TitleEl>Contacts</TitleEl>
         <SubTitleEl>Contacts -All Contacts</SubTitleEl>
      </HeaderEl>
    <ContactEl>

      <TitleEl2>Fillup The Form</TitleEl2>
      <FormGridEl grid={2}>
        <InputEl placeholder="Name"/>
        <InputEl placeholder="Email"/>
      </FormGridEl>
      <FormGridEl grid={1}>
        <InputEl placeholder="Subject"/>
     
      </FormGridEl>
      <FormGridEl grid={1}>
        <TextAreaEl placeholder="Message ..."/>
     
      </FormGridEl>
      <ButtonEl bg="#0070f3"><ButtonTextEl>Submit</ButtonTextEl></ButtonEl>
    </ContactEl>
        
       
    </ContactContainerEl>

    </>);
}
export default ContactContainer;
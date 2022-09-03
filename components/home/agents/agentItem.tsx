import { styled } from "@mui/material";
import {FaHeart} from "react-icons/fa"
import {ImLocation2} from "react-icons/im"
import {BsCheckCircleFill} from "react-icons/bs"
import {FaFacebookF,FaLinkedin,FaInstagram,FaTwitter,FaPhone,FaEnvelope} from "react-icons/fa"


const AgentEl =styled("div")(()=>`
  display:flex;
  flex-direction:column;
  padding:0px 0px 10px 0px ;
  justify-content:center;
  align-items:center;

  border-radius: 6px;
  box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
  overflow:hidden;
  background:#ffffff;
    
   
`)

const TitleEl =styled("h2")(()=>`
  font-size:1rem;
  display:flex;
  justify-content:start;

  margin-top:0.5rem;
  margin-left:0.5rem;
 color:#676767;`)


 const AddressSectionEl =styled("div")(()=>`
 display:flex;
 align-items:center;
 margin-top:0.5rem;
 padding-left:0.5rem;

 `)
const AddressEl =styled("span")(()=>`
  font-size:0.96rem;

 color:#9e9e9e;`)

 
const AddressIconEl =styled(ImLocation2)(()=>`
font-size:1.2rem;

color:#9e9e9e;`)
 
const ImageEl =styled("img")(()=>`
height:100px;

width:100;
object-fit:cover;
border-radius:50%;

`)

const ImageSectionEl =styled("div")(()=>`
height:130px;
width:130px;
border-radius:50%;
border:0.5rem solid #eeeeee;
position:relative;
margin-top:1rem;
display:flex;
justify-content:center;
align-items:center;

`)

const ImageIconEl =styled(BsCheckCircleFill)(()=>`
color:#009df3;
position:absolute;
right:3px;


`)


const ListSectionEl =styled("div")(()=>`
display:flex;
justify-content: start;
width: 100%;
align-items:center;
margin-left:1rem;
margin-top:1rem;

  `)



  const ListEl =styled("span")<{color?:string}>(({color})=>`
display:flex;
justify-content:center;
align-items:center;
padding:10px 20px;
color:#ffffff;
background-color:#ff9800;
border-radius:10px;
  `)

  const SocialMediaSectionEl =styled("div")(()=>`
  display:grid;
  grid-gap:30px;
  grid-template-columns : repeat(4,1fr);
  margin-top:1rem;
  padding-left:0.5rem;
 
  `)


  const IconEl =styled("span")(()=>`
  background:#f7f9fc;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  height:40px;
  width:40px


    `)


  const FacebookEl =styled(FaFacebookF)(()=>`
  font-size:1.2rem;
  color:#9c9c9c;
cursor:pointer;
postion:relative;



    `)

    const LinkedEl =styled(FaLinkedin)(()=>`
    font-size:1.2rem;
    color:#9c9c9c;
  cursor:pointer;
      `)

      const InstagramEl =styled(FaInstagram)(()=>`
      font-size:1.2rem;
      color:#9c9c9c;
    cursor:pointer;
        `)

        const TwitterEl =styled(FaTwitter)(()=>`
        font-size:1.2rem;
        color:#9c9c9c;
      cursor:pointer;
          `)

          const ContactSectionEl =styled("div")(()=>`
          display:grid;
          grid-gap:20px;
          grid-template-columns : repeat(2,1fr);
          margin-top:1.5rem;
          margin-bottom:1.5rem;
          padding-left:0.5rem;
         
          `)

          const ButtonEl = styled("button")<{bg?:string,isMobile?:boolean}>(({bg,isMobile})=>`
   border-radius:0.3rem;
   border:none;
   background:${bg};
  display:flex;
  align-items:center;
  justify-content:center;
  margin:${isMobile?"0px":"0px 10px"};
  padding:1rem  1.5rem;
  cursor:pointer;
`)

const ButtonTextEl = styled("span")(()=>`
color:#ffffff;

font-size:0.9rem;
margin-left:0.5rem; 
`)

const IconEnvelopeEl = styled(FaEnvelope)(()=>`
  
    color:#ffffff;
   
    font-size:0.9rem;
`)

const IconPhoneEl = styled(FaPhone)(()=>`
  
    color:#ffffff;
    font-weight:bold;
    font-size:0.9rem;
`)
const AgentItem = (props:{icon:string,name:string,list:number,address:string,phone:string})=>{
  
    const {name,icon,address,phone,list} = props;
    return (
    <AgentEl>
             
      
        <ListSectionEl>
          <ListEl >{list} listing</ListEl>
          
        </ListSectionEl>
        <ImageSectionEl>
        <ImageEl src={icon} />
        <ImageIconEl />
        </ImageSectionEl>
        <AddressSectionEl>
          <AddressIconEl />
          <AddressEl>{address}</AddressEl>
        </AddressSectionEl>
        <TitleEl>{name}</TitleEl>
        <SocialMediaSectionEl>
          <IconEl><FacebookEl/></IconEl>
          <IconEl><LinkedEl /></IconEl>
          <IconEl> <TwitterEl /></IconEl>
          <IconEl><InstagramEl /></IconEl>
           
        </SocialMediaSectionEl>

        <ContactSectionEl>
          <ButtonEl bg="#17a335">
            <IconEnvelopeEl />
            <ButtonTextEl>Message</ButtonTextEl>
          </ButtonEl>

          <ButtonEl bg="#0070f3">
            <IconPhoneEl />
           
          </ButtonEl>
        </ContactSectionEl>
       
    </AgentEl>
    )
}
export default AgentItem;
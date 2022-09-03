import { styled } from "@mui/material";
import {FaBriefcase,FaTrophy,FaLightbulb,FaHeart} from "react-icons/fa"

const AwardEl =styled("div")(()=>`
  display:flex;
  flex-direction:column;
  padding:0px 0px 10px 0px ;
  justify-content:center;
  align-items:center;
 
  overflow:hidden;
    
   
`)

const TitleEl =styled("h2")(()=>`
  font-size:1rem;
  display:flex;
  justify-content:start;

  margin-top:0.5rem;
  margin-left:0.5rem;
 color:#808080;`)


      const CountEl =styled("span")(()=>`
      color:#ffffff;
      font-size:2rem;
      font-weight:bold;
      margin-top:0.5rem;
    

          
        `)


        const IconEl =styled("div")(()=>`
        display:flex;
        height:100px;
        width:100px;
        background: hsla(0,0%,100%,.1);
   
     
        justify-content:center;
        align-items:center;
        border-bottom-right-radius : 30px;
        border-bottom-left-radius : 5px;
        border-top-right-radius : 5px;
        border-top-left-radius : 30px;

       `);

       const BriefcaseEl =styled(FaBriefcase)(()=>`
       color:#ffffff;
       font-size:2rem;
        `)
        const HeartEl =styled(FaHeart)(()=>`
        color:#ffffff;
        font-size:2rem;
         `)

         const LightbulbEl =styled(FaLightbulb)(()=>`
         color:#ffffff;
         font-size:2rem;
          `)

          const TrophyEl =styled(FaLightbulb)(()=>`
         color:#ffffff;
         font-size:2rem;
          `)
         
  
const AwardItem = (props:{icon:any,title:string,count:number})=>{
  
    const {title,icon,count} = props;
    return (
    <AwardEl>
         <IconEl >
          {
            icon==1? <TrophyEl/> : icon==2?<BriefcaseEl /> :   icon==3?<LightbulbEl /> :<HeartEl />
          }
         </IconEl>
         <CountEl>{count} M</CountEl>
         <TitleEl>{title}</TitleEl>      
      
    </AwardEl>
    )
}
export default AwardItem;
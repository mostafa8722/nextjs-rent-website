import { styled } from "@mui/material";

const FeatureEl =styled("div")(()=>`
  display:flex;
  flex-direction:column;
  padding:10px ;
  justify-content:center;
  align-items:center;
  border-radius: 6px;
  box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
    
   
`)

const TitleEl =styled("h2")(()=>`
  font-size:1rem;
  margin-top:1rem;
 color:#676767;`)


const PropertyEl =styled("span")(()=>`
  font-size:0.96rem;
  margin-top:1rem;
  margin-bottom:2rem;
 color:#9e9e9e;`)

 
const ImageEl =styled("img")(()=>`
height:100px;
width:100px;
margin-top:1rem;


`)

const Feature = (props:{icon:string,title:string,property:number})=>{
  
    const {title,icon,property} = props;
    return (
    <FeatureEl>
               <ImageEl src={icon} />

        <TitleEl>{title}</TitleEl>
        <PropertyEl>{property} property</PropertyEl>
    </FeatureEl>
    )
}
export default Feature;
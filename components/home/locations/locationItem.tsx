import { styled } from "@mui/material";
import {FaHeart} from "react-icons/fa"
import {ImLocation2} from "react-icons/im"
import { formatPrice } from "../../../utils/helpers";
const LocationEl =styled("div")<{bg:string}>(({bg})=>`
  display:flex;
  flex-direction:column;
  padding:0px 0px 10px 0px ;
  justify-content:center;
  align-items:center;
  position:relative;
  border-radius: 6px;
  box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
 
  background-image:url(${bg});
  background-repeat:no-repeat;
  background-size:cover;
  height:250px;
  &:after{
    position: absolute;
    content: "";
    background: rgba(0,0,0,0.4);
    top: 20px;
    left: 20px;
    border-radius: 6px;
    height: 100%;
    width: 100%;
  }
  
    
   
`)

const TitleEl =styled("h2")(()=>`
  font-size:1.3rem;
  display:flex;
  justify-content:start;
  font-weight:600;
  margin-top:0.5rem;
  margin-left:0.5rem;
 color:#ffffff;`)

 const FacilityEl =styled("div")(()=>`

  display:flex;
  margin-top:0.5rem;
  justify-content:space-between;
 
 `)


const FacilityItemEl =styled("span")(()=>`
  font-size:0.9rem;



  margin-left:0.5rem;
 color:#ffffff;`)



const LocationItem = (props:{icon:string,title:string,villas:number,apartments:number,offices:string})=>{
  
    const {title,icon,apartments,villas,offices} = props;
    return (
    <LocationEl bg={icon} >
          <TitleEl >{title}</TitleEl>
          <FacilityEl>
            <FacilityItemEl>{villas} Villas</FacilityItemEl>
            <FacilityItemEl>{offices} Offices</FacilityItemEl>
            <FacilityItemEl>{apartments} Apartments</FacilityItemEl>
          </FacilityEl>
    </LocationEl>
    )
}
export default LocationItem;
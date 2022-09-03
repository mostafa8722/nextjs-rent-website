import { styled } from "@mui/material";
import {FaHeart} from "react-icons/fa"
import {ImLocation2} from "react-icons/im"
import { formatPrice } from "../../../utils/helpers";
const FeatureEl =styled("div")(()=>`
  display:flex;
  flex-direction:column;
  padding:0px 0px 10px 0px ;
  justify-content:center;

  border-radius: 6px;
  box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
  overflow:hidden;
    
   
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
 padding-bottom:30px;
 border-bottom:0.05rem solid #eeeeee;
 `)
const AddressEl =styled("span")(()=>`
  font-size:0.96rem;

 color:#9e9e9e;`)

 
const AddressIconEl =styled(ImLocation2)(()=>`
font-size:1.2rem;

color:#9e9e9e;`)
 
const ImageEl =styled("img")(()=>`
height:300px;

width:100%;
object-fit:cover;


`)

const RentLikeEl =styled("div")(()=>`
display:flex;
justify-content:space-between;
padding:0px 15px;
align-items:center;
margin-top:0.5rem;
  `)

  const RentEl =styled("span")<{color?:string}>(({color})=>`
display:flex;
justify-content:center;
align-items:center;
padding:5px 10px;
color:#ffffff;
background-color:${color?color:"#ff9800"};
border-radius:5px;
  `)

  const LikeEl =styled(FaHeart)(()=>`
  font-size:1.5rem;
  color:#9c9c9c;
cursor:pointer;
    `)

    const PriceTypeEl =styled("div")(()=>`
display:flex;
justify-content:space-between;
padding:0px 15px;
align-items:center;
margin-top:0.5rem;
  `)

  const TypeEl =styled("div")(()=>`
  color:#898989;
  font-size:1.1rem;

    `)

    const PriceSectionEl =styled("div")(()=>`
      display:flex;
      align-items:center;
      `)
      const PriceEl =styled("span")(()=>`
      color:#ffffff;
      font-size:1.1rem;
      background:#25b579;
      margin-right:0.3rem;
      border-radius:25px;
      display:flex;
justify-content:center;
align-items:center;
padding:5px 10px;
        `)

const PropertyItem = (props:{icon:string,title:string,rent:boolean,type:string,address:string,price:string})=>{
  
    const {title,icon,rent,address,type,price} = props;
    return (
    <FeatureEl>
               <ImageEl src={icon} />
      
        <RentLikeEl>
          <RentEl color={rent?"#ff9800":"#25b579"}>{rent?"For Rent":"For Sale"}</RentEl>
          <LikeEl />
        </RentLikeEl>
        <TitleEl>{title}</TitleEl>
        <AddressSectionEl>
          <AddressIconEl />
          <AddressEl>{address}</AddressEl>
        </AddressSectionEl>
        <PriceTypeEl>
          <PriceSectionEl>
            <PriceEl>{formatPrice(parseInt(price))}</PriceEl>
            /sqft
          </PriceSectionEl>
          <TypeEl>{type}</TypeEl>
        </PriceTypeEl>
    </FeatureEl>
    )
}
export default PropertyItem;
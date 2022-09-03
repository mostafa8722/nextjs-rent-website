import { styled } from "@mui/material";
import {FaHeart} from "react-icons/fa"
import {ImLocation2} from "react-icons/im"
import { formatPrice } from "../../../utils/helpers";
import {FaCheck,FaPlus} from "react-icons/fa"
const PackageEl =styled("div")<{padding?:string,top?:string}>(({padding,top})=>`
  display:flex;
  flex-direction:column;
  padding:${padding?"30px 0px 30px 0px":"30px 0px 30px 0px"} ;
  justify-content:center;
  align-items:center;
  border-radius: 6px;
  box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
  overflow:hidden;
  margin-top:${top?top:"0px"};
  margin-bottom:${top?top:"0px"};
 
    
   
`)

const TitleEl =styled("h2")<{size?:string}>(({size})=>`
  font-size:1rem;
  display:flex;
   font-size:${size?size:"2rem"};

  margin-top:0.5rem;
  margin-left:0.5rem;
 color:#454545;`)
 const PriceTagEl =styled("span")<{size?:string}>(({size})=>`
  
   font-size:1.3rem;
   margin-bottom:5px;
   font-weight:bold;

 color:#454545;`)

 const PriceEl =styled("div")<{size?:string}>(({size})=>`
 align-items: end;
 display:flex`)

  const ListEl =styled("span")<{color?:string}>(({color})=>`
display:flex;
justify-content:center;
align-items:center;
padding:10px 20px;
color:#ffffff;
background-color:#ff9800;
border-radius:10px;
margin:15px;
  `)




const IconPlusEl =styled("span")(()=>`
display:flex;
align-items:center;
justify-content:center;
background:rgba(220, 53, 69, 0.12);
height:45px;
width:45px;
border-radius:50%;

`)

  const PlusEl =styled(FaPlus)(()=>`
  font-size:1.2rem;
  color: rgb(220, 56, 72);
   transform :rotate(45deg);

    `)

    const IconCheckEl =styled("span")(()=>`
display:flex;
align-items:center;
justify-content:center;
background: rgba(39, 174, 96, 0.12);
height:45px;
width:45px;
border-radius:50%;


`)

  const CheckEl =styled(FaCheck)(()=>`
  font-size:1.2rem;
  color: rgb(39, 174, 96);


    `)
    const PropsConEl =styled("div")(()=>`
    display:grid;
    margin-top:0.5rem;
    grid-gap:0px;
    width:80%;
    align-items:center;
    grid-template-columns:50px repeat(1,1fr);
 `)

 const PropsConTextEl =styled("span")(()=>`
 color:#787878;
 font-size:1.1rem;
 margin-left:25px;
`)
    

const ButtonEl = styled("button")<{isStandard:boolean}>(({isStandard})=>`
border-radius:2rem;


background:${isStandard?"rgba(39, 174, 96)":"#ffffff"};
display:flex;
align-items:center;
justify-content:center;
  margin-top:2rem;
padding:1rem  1.5rem;
cursor:pointer;
width:200px;

border:${!isStandard?"0.5rem solid rgba(39, 174, 96, 0.12)":"none"};

`)

const ButtonTextEl = styled("span")<{isStandard:boolean}>(({isStandard})=>`
color:${isStandard?"#ffffff":"rgba(39, 174, 96)"};

font-size:1.3rem;

`)




const PackageItem = (props:{price:number,title:string,per:string,cons:Array<string>,prop:Array<string>})=>{
  
    const {title,per,price,cons,prop} = props;
    return (
    <PackageEl
     padding={title=="Standard"?"40px 0px 40px 0px":"30px 0px 30px 0px"}
     top={title=="Standard"?"0px":"30px"}
    
    
    >
              
              {
                title=="Standard"?
                <ListEl  >Best Value</ListEl>
                :<></>
              }
     
    
      <TitleEl>{title}</TitleEl>
      <PriceEl>
      <PriceTagEl size="1rem">$</PriceTagEl>
      <TitleEl>{price}</TitleEl>
      </PriceEl>
      
      <PropsConTextEl >{per}</PropsConTextEl>
        {
         prop.map((item:string,index:number)=><PropsConEl key={item} ><IconCheckEl><CheckEl/></IconCheckEl><PropsConTextEl>{item}</PropsConTextEl></PropsConEl>)
        }
        {
         cons.map((item:string,index:number)=><PropsConEl key={item} ><IconPlusEl><PlusEl/></IconPlusEl><PropsConTextEl>{item}</PropsConTextEl></PropsConEl>)
        }
        <ButtonEl isStandard={title=="Standard"?true:false}>
          <ButtonTextEl  isStandard={title=="Standard"?true:false} >Start {title}</ButtonTextEl>
        </ButtonEl>
    </PackageEl>
    )
}
export default PackageItem;
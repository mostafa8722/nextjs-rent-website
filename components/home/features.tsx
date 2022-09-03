import { ListItemIcon, styled } from "@mui/material";
import Heading from "../heading";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import { featuresItems } from "../../data/data";
import Feature from "./feature";
const FeaturesEl =styled("section")(()=>`
  display:flex;
  flex-direction:column;
  padding:50px 0px 40px 0px;
  justify-content:center;
  align-items:center;
  background:#f7f9fc;

`)
const FeaturesItemsEl =styled("div")<{isMobile?:boolean,isTablet?:boolean}>(({isMobile,isTablet})=>`
  display:grid;
  grid-template-columns:  ${ isMobile?"repeat(2,1fr)": isTablet?'repeat(3,1fr) ':'repeat(5,1fr) ' } ;
  grid-gap: 20px;
  width:80%;
  margin-top:30px;

`)
const Features = ()=>{
    const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));


    return (
    <FeaturesEl>
         <Heading
            title={{name:"Featured Property Types",color:"#2d3954",size:'40px'}}
            subTitle={{name:"Find All Type of Property.",color:"#72809d",size:'1.1rem'}}
         />

    <FeaturesItemsEl isMobile={isMobile} isTablet={isTablet}>
        {
            featuresItems.map(((item:any,index:number)=><Feature key={item.title} {...item} />))
        }
    </FeaturesItemsEl>
    </FeaturesEl>
    )
}
export default Features;
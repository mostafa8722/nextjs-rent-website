import { styled } from "@mui/system";
import Heading from "../../heading";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import { packagesItems } from "../../../data/data";
import PackageItem from "./packageItem";


const PackagesEl =styled("section")(()=>`
display:flex;
flex-direction:column;
padding:50px 0px 40px 0px;
justify-content:center;
align-items:center;
background:#ffffff;

`)

const PackagesItemsEl =styled("div")<{isMobile?:boolean,isTablet?:boolean}>(({isMobile,isTablet})=>`
  display:grid;
  grid-template-columns:  ${ isMobile?"repeat(1,1fr)": isTablet?'repeat(2,1fr) ':'repeat(3,1fr) ' } ;
  grid-gap: 20px;
  width:80%;
  margin-top:30px;

`)
const Packages = ()=>{
    const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));
    return (<>
    <PackagesEl>
        <Heading
                title={{name:"Select Your Package ",color:"#2d3954",size:'40px'}}
                subTitle={{name:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",color:"#72809d",size:'1.1rem'}}
            />
   
    <PackagesItemsEl isMobile={isMobile} isTablet={isTablet}>
        {
          packagesItems.map((item:any,index:number)=><PackageItem  key={item.title} {...item} />)
        }
    </PackagesItemsEl>
   
    </PackagesEl>
    </>)
}
export default Packages;
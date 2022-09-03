import { styled } from "@mui/system";
import Heading from "../../heading";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import { awardsItems } from "../../../data/data";
import AwardItem from "./awardItem";


const AwardsEl =styled("section")(()=>`
display:flex;
flex-direction:column;
padding:50px 0px 40px 0px;
justify-content:center;
align-items:center;
background:#122947;

`)

const AwardsItemsEl =styled("div")<{isMobile?:boolean,isTablet?:boolean}>(({isMobile,isTablet})=>`
  display:grid;
  grid-template-columns:  ${ isMobile?"repeat(2,1fr)": isTablet?'repeat(2,1fr) ':'repeat(4,1fr) ' } ;
  grid-gap: 20px;
  width:80%;
  margin-top:30px;

`)
const Awards = ()=>{
    const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));
    return (<>
    <AwardsEl>
        <Heading
                title={{name:"Our Awards",color:"#27ae60",size:'1rem'}}
                subTitle={{name:"Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services",color:"#ffffff",size:'1.6rem'}}
            />
   
    <AwardsItemsEl isMobile={isMobile} isTablet={isTablet}>
        {
          awardsItems.map((item:any,index:number)=><AwardItem  key={item.title} {...item} />)
        }
    </AwardsItemsEl>
   
    </AwardsEl>
    </>)
}
export default Awards;
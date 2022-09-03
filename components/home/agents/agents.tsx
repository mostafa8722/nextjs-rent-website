import { styled } from "@mui/system";
import Heading from "../../heading";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import { agentsItems } from "../../../data/data";
import AgentItem from "./agentItem";


const AgentsEl =styled("section")(()=>`
display:flex;
flex-direction:column;
padding:50px 0px 40px 0px;
justify-content:center;
align-items:center;
background:#f7f9fc;

`)

const AgentsItemsEl =styled("div")<{isMobile?:boolean,isTablet?:boolean}>(({isMobile,isTablet})=>`
  display:grid;
  grid-template-columns:  ${ isMobile?"repeat(1,1fr)": isTablet?'repeat(2,1fr) ':'repeat(3,1fr) ' } ;
  grid-gap: 20px;
  width:80%;
  margin-top:30px;

`)
const Agents = ()=>{
    const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));
    return (<>
    <AgentsEl>
        <Heading
                title={{name:"Our Featured Agents",color:"#2d3954",size:'40px'}}
                subTitle={{name:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",color:"#72809d",size:'1.1rem'}}
            />
   
    <AgentsItemsEl isMobile={isMobile} isTablet={isTablet}>
        {
          agentsItems.map((item:any,index:number)=><AgentItem  key={item.name} {...item} />)
        }
    </AgentsItemsEl>
   
    </AgentsEl>
    </>)
}
export default Agents;
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';

const SearchInputEl = styled("div")<{isMobile?:boolean,isTablet?:boolean}>(({isMobile,isTablet})=>`
display:flex;
flex-direction:column;
padding:10px;
justify-content:center;

border-right: ${(isMobile || isTablet)?"0rem":'0.05rem solid #cecece' } ;;

`)
const LabelEl = styled("label")(()=>`
color:#898989;
font-size:0.85rem;
`)

const InputEl = styled("input")(()=>`
color:#565656;
margin-top:0.5rem;
border:0.05rem solid #cecece;
border-radius:0.15rem;
padding:0.1rem 0.5rem;
height:40px;


`)
const SearchInput = (props:{label:string,holder:string,name:string})=>{
    const {label, holder,name} = props;
    const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));

    return(<SearchInputEl  isMobile={isMobile}  isTablet={isTablet}>
     <LabelEl>{label}</LabelEl>
       <InputEl  type="text" name={name} placeholder={holder} />
    </SearchInputEl>);
}
export default SearchInput ;
import { styled } from "@mui/system";

const HeadingEl =styled("div")(()=>`
display:flex;
flex-direction:column;
align-items:center;

`)
const TitleEl =styled("h1")<{size?:string,color?:string}>(({size,color})=>`
font-size:${size?size:"1.2rem"};
color:${color?color:"#565656"};
text-align: center;
`)
const SubTitleEl =styled("p")<{size?:string,color?:string}>(({size,color})=>`
font-size:${size?size:".9rem"};
color:${color?color:"#9a9a9a"};
text-align: center;
max-width:600px;
margin-top:15px;
`)
interface Props {
 title :{
    name:string,
    size:string,
    color:string,},

    subTitle :{
        name:string,
        size:string,
        color:string,}
}

const Heading = (props:Props)=>{
const {title,subTitle} = props;
    return(<>
      <HeadingEl>
        <TitleEl color={title.color}  size={title.size}>{title.name}</TitleEl>
        <SubTitleEl color={subTitle.color}  size={subTitle.size}>{subTitle.name}</SubTitleEl>
      </HeadingEl>
    </>)
}
export default Heading;
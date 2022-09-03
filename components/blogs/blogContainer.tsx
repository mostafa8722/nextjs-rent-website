import { styled } from "@mui/system";


import Properties from "../home/recent-property/properties";
const HeaderEl = styled("div")<{img:string}>(({img})=>`
height:250px;
background-image : url(${img});
background-position:50%;
background-repeat :no-repeat;
background-size:cover;
position:relative;
display:flex;
flex-direction:column;
&:after{
    position:absolute;
    background-color:rgba(0,0,0,0.3);
    content :"";
    top:0px;
    left:0px;
    height:100%;
    width:100%;
}
`)

const TitleEl = styled("h2")(()=>`
margin-top:100px;
font-size:2rem;
color:#ffffff;
margin-left:50px;
`)

const SubTitleEl = styled("span")(()=>`
margin-top:10px;
margin-left:50px;
font-size:2.5rem;
color:#ffffff;

`)




const BlogContainerEl =styled("div")(()=>`
display:flex;
flex-direction:column;
`)

const BlogContainer = ()=>{

    return(<>
    <BlogContainerEl>
      <HeaderEl img="../../images/blog.jpg">
         <TitleEl>Blogs</TitleEl>
         <SubTitleEl>Blogs -All Blogs</SubTitleEl>
      </HeaderEl>
    <Properties />
 
   
    </BlogContainerEl>

    </>);
}
export default BlogContainer;
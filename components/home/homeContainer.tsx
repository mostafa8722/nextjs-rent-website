import { styled } from "@mui/system";
import Agents from "./agents/agents";
import Awards from "./awards/awards";
import Features from "./features";
import Hero from "./hero";
import Locations from "./locations/locations";
import Packages from "./packages/packages";
import Properties from "./recent-property/properties";


const HomeContainereEl =styled("div")(()=>`
display:flex;
flex-direction:column;
`)

const HomeContainer = ()=>{

    return(<>
    <HomeContainereEl>
    <Hero/>
    <Features />
    <Properties />
    <Awards />
    <Locations/>
    <Agents />
    <Packages />
    </HomeContainereEl>

    </>);
}
export default HomeContainer;
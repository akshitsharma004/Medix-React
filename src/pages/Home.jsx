import Homee from "../Components/Homee";
import Carousel from "../Components/Carousel";
import Medicine from "../Components/Medicine";
import Education from "../Components/Education";
import Cards from "../Components/Cards";
import Meet from "../Components/Meet";
import Doctors from "../Components/Doctors";
import Packages from "../Components/Packages";
import Image from "../Components/Image";
import Navbar from "../Components/Navbar";

export default function Home() {
    return (
        <>
            {/* <Navbar /> */}
            <Homee />
            <Carousel />
            <Medicine />
            <Education />
            <Cards />
            <Meet />
            <Doctors />
            <Packages />
            <Image />
        </>
    );
}

import DoctorSlider from "../Components/DcotorSlider";
import DoctorsTextWrapper from "../Components/DoctorsTextWrapper";
import Image from "../Components/Image";
import Medicine from "../Components/Medicine";
import PracticesHero from "../Components/PracticesHero";
import PracticesTextWrapper1 from "../Components/PracticesTextWrapper1";
import PracticesTextWrapper2 from "../Components/PracticesTextWrapper2";

export default function Practices() {
    return (
        <div className="">
            <PracticesHero />
            <PracticesTextWrapper1 />
            <Medicine />
            <PracticesTextWrapper2 />
            <DoctorSlider />
            <DoctorsTextWrapper />
            <Image />
        </div>
    );
}

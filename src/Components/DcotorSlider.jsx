import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DoctorSlider() {
    const data = [
        {
            name: "Caleb Dowglas",
            designation: "CEO & Manager at Medix Clinic",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sediacum sued do.",
        },
        {
            name: "Caleb Dowglas",
            designation: "CEO & Manager at Medix Clinic",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sediacum sued do.",
        },
        {
            name: "Caleb Dowglas",
            designation: "CEO & Manager at Medix Clinic",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sediacum sued do.",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    right: "25%",
                    cursor: "pointer",
                }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    left: "25%",
                    cursor: "pointer",
                }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: (index) => setCurrentSlide(index), // Updates currentSlide when slide changes
    };

    return (
        <div className="">
            <Slider {...settings}>
                {data.map((elem, index) => (
                    <div key={index}>
                        <div className="py-4 flex items-center justify-center">
                            <div className="px-20 py-12 rounded-full flex flex-col gap-5 items-center justify-center bg-white">
                                <div className="">
                                    <img
                                        className="w-[100px] h-[100px] object-cover rounded-full"
                                        src="https://cdn.prod.website-files.com/6319b6d4b1d63276594daf25/6336d944a9242e226e1b9bbf_medix-doctorimg.png"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <p className="w-96 leading-relaxed text-center">
                                        {elem.description}
                                    </p>
                                </div>
                                <div className="">
                                    <h1 className="font-semibold px-10">
                                        {elem.name}
                                    </h1>
                                    <h2 className=" font-semibold text-[#CDC3D5]">
                                        {elem.designation}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

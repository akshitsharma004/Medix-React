import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Carousel() {
    const data = [
        { name: "Pathology" },
        { name: "Ophtalmology" },
        { name: "Urology" },
        { name: "Preventive Medicine" },
        { name: "Family Medicine" },
        { name: "Neurology" },
        { name: "Cardiology" },
        { name: "Pathology" },
        { name: "Anesthesiology" },
        { name: "Family Medicine" },
        { name: "Pathology" },
        { name: "Ophtalmology" },
        { name: "Urology" },
        { name: "Pathology" },
        { name: "Ophtalmology" },
        { name: "Urology" },
        { name: "Preventive Medicine" },
        { name: "Family Medicine" },
        { name: "Neurology" },
        { name: "Cardiology" },
        { name: "Pathology" },
        { name: "Anesthesiology" },
        { name: "Family Medicine" },
        { name: "Anesthesiology" },
        { name: "Family Medicine" },
    ];

    useGSAP(() => {
        gsap.to("#slide1", {
            x: "-50%",
            duration: 120,
            repeat: 1,
            ease: "none",
        });
    });
    useGSAP(() => {
        gsap.from("#slide2", {
            x: "-50%",
            duration: 120,
            repeat: 1,
            ease: "none",
        });
    });

    return (
        <div className="my-24 mx-10 py-6 flex flex-col gap-2 font-medium overflow-hidden">
            <div className="-rotate-2 inline-flex">
                <div id="slide1" className="flex gap-2">
                    {data.map((value, index) => (
                        <div key={index} className="px-8 py-3 bg-[#CFF0F9] rounded-full whitespace-nowrap">
                            {value.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="-rotate-2 inline-flex">
                <div id="slide2" className="flex gap-2">
                    {data.map((value, index) => (
                        <div key={index} className="px-8 py-3 bg-[#CFF0F9] rounded-full whitespace-nowrap">
                            {value.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

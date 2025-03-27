import Carousel from "../Components/Carousel";
import Image from "../Components/Image";

export default function Doctors() {
    const data = [{ name: "John" }, { name: "Max" }, { name: "David" }];
    const Data = [{ name: "Joe" }, { name: "William" }, { name: "Aaron" }];
    return (
        <div className="py-20">
            <div className="flex">
                <div className="px-36 flex flex-col gap-5 mt-24">
                    <h1 className=" text-9xl ">Doctors</h1>
                    <div className="gap-5 flex">
                        <button className="rounded-full py-2 px-2 text-[#F6A290] border-2 border-[#F6A290]">
                            Our Doctors
                        </button>
                        <button className="rounded-full py-2 px-2 text-[#F6A290] border-2 border-[#F6A290]">
                            #atwwwtemplates
                        </button>
                    </div>
                </div>
                <div>
                    <img
                        src="https://cdn.prod.website-files.com/6319b6d4b1d63276594daf25/633411c6e9a817500205845f_medix-big-swish.svg"
                        alt=""
                    />
                </div>
            </div>

            <div>
                <p className="text-5xl w-[70rem] leading-relaxed px-36">
                    In the history of medicine, it is not always the great
                    scientist or the learned doctor who goes forward to discover
                    new fields, new avenues, new ideas.
                </p>
            </div>
            <Carousel />
            <div className="flex gap-10">
                {data.map((value, index) => (
                    <div key={value} className="px-24 ">
                        <img
                            className="rounded-full border-[#CFF0F9] border-8"
                            src="https://cdn.prod.website-files.com/631b32778e8cbd88d5923bfc/631b350a4f0ecc304fdca8d2_medix-doctorimg.png"
                            alt=""
                        />
                        <h1 className="text-4xl py-4 px-24">{value.name}</h1>
                        <p className="text-xl px-24">Master</p>
                    </div>
                ))}
            </div>
            <div className="flex py-24 gap-10">
                {Data.map((value, index) => (
                    <div key={value} className="px-24 ">
                        <img
                            className="rounded-full border-[#CFF0F9] border-8"
                            src="https://cdn.prod.website-files.com/631b32778e8cbd88d5923bfc/631b350a4f0ecc304fdca8d2_medix-doctorimg.png"
                            alt=""
                        />
                        <h1 className="text-4xl py-4 px-24">{value.name}</h1>
                        <p className="text-xl px-24">Master</p>
                    </div>
                ))}
            </div>
            <div className="flex py-24 gap-44 items-center justify-center">
                <div className="w-[30rem]">
                    <h1 className="text-6xl">Meet our doctors</h1>
                    <p className="text-xl py-6 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam,
                    </p>
                </div>
                <div className="w-[30rem]">
                    <h1 className="text-6xl">Fast booking</h1>
                    <p className="text-xl py-6 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam,
                    </p>
                </div>
            </div>
            <Image />
        </div>
    );
}

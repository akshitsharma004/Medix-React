import React from "react";

function Homee() {
    return (
        <div className="px-44 py-24 flex justify-center gap-10 items-center text-[#0b1d5b]">
            <div className=" w-[29rem] ">
                <h1 className="text-6xl ">Meet the best doctors today</h1>
                <p className="py-6 leading-relaxed text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                </p>
                <div className="py-5 flex gap-6">
                    <button className="px-6 py-3 text-[#f3f6ef] bg-[#efc8c1] hover:bg-[#F1B5AC] rounded-full border-2 font-semibold ">
                        Our Doctors
                    </button>
                    <button className="px-6 py-3 hover:bg-[#D7F1F7] rounded-full border-2 border-[#efa99a] font-semibold ">
                        Read More
                    </button>
                </div>
            </div>
            <div className="flex gap-6">
                <img
                    src="https://cdn.prod.website-files.com/6319b6d4b1d63276594daf25/6319cb8a27956437c90ea4d5_medix-pill1.png"
                    alt=""
                />
                <img
                    src="https://cdn.prod.website-files.com/6319b6d4b1d63276594daf25/6319cb94f5888c75cc0658d1_medix-pill2.png"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Homee;

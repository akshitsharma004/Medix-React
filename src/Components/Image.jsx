export default function Image() {
    return (
        <div className="flex flex-col gap-24">
            <div className="mx-16 px-36 py-32">
                <img
                    src="https://cdn.prod.website-files.com/6319b6d4b1d63276594daf25/632094ed6ad718b9cb4185c1_medix-dove.png"
                    alt=""
                />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
                <div className=" w-[30rem] items-center justify-center text-center">
                    <h1 className="text-6xl font-semibold ">
                        Book now a free consultation
                    </h1>
                    <p className="text-xl py-9">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam,
                    </p>
                </div>
                <div className="flex gap-10 items-center justify-center">
                    <button className="px-6 py-3 text-white border-2 rounded-full bg-[#0B1E5B] border-[#0B1E5B] hover:bg-[#1E388A]">
                        Book an Appointment
                    </button>
                    <button className="px-6 py-3 border-2 rounded-full border-[#F0B8AB] hover:bg-[#D7F1F7]">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
}

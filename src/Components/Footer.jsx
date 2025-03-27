export default function Footer() {
    return (
        <div className="flex flex-col mt-40 mx-32 py-8">
            <div className="flex items-center justify-between px-10 py-16">
                <div className="flex flex-col  gap-8">
                    <div className="flex gap-5">
                        <h1 className="text-6xl font-medium">032 9844</h1>
                        <div className="w-[15rem]">
                            <p className="text-xl text-[#DECCD3]">
                                (callable from any national network, fixed or
                                mobile)
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 ">
                        <button className="px-6 py-3 border-2 rounded-full border-[#F0B8AB] hover:bg-[#D7F1F7]">
                            Facebbok
                        </button>
                        <button className="px-6 py-3 border-2 rounded-full border-[#F0B8AB] hover:bg-[#D7F1F7]">
                            Twitter
                        </button>
                        <button className="px-6 py-3 border-2 rounded-full border-[#F0B8AB] hover:bg-[#D7F1F7]">
                            Instagram
                        </button>
                        <button className="px-6 py-3 border-2 rounded-full border-[#F0B8AB] hover:bg-[#D7F1F7]">
                            LinkedIn
                        </button>
                    </div>
                </div>
                <div className="flex gap-10 font-semibold  ">
                    <ul className="flex flex-col gap-5 text-[#3376F9]">
                        <li className="text-[#0B1E5B]">Clinic</li>
                        <li>Doctors</li>
                        <li>Education</li>
                        <li>Practices</li>
                    </ul>
                    <ul className="flex flex-col gap-5 text-[#3376F9]">
                        <li className="text-[#0B1E5B]">Resources</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        <li>Legal Notice</li>
                    </ul>
                    <ul className="flex flex-col gap-5 text-[#3376F9]">
                        <li className="text-[#0B1E5B]">About</li>
                        <li>Import</li>
                    </ul>
                </div>
            </div>
            <hr className=" border-[#F0B8AB]"></hr>
            <div className="flex justify-between font-semibold">
                <div className="text-[#DECCD3] mx-24">
                    Template by atwww.studio
                </div>
                <div className="mx-24">Powered by Webflow</div>
            </div>
        </div>
    );
}

export default function BookForm() {
    return (
        <div>
            <div className="flex items-center justify-center py-24">
                <form className="">
                    <div className="flex gap-5">
                        <input
                            className="w-[388px] text-sm border bg-[#F2E9E4] border-[#FD2524] rounded-full py-4 px-4"
                            maxLength="256"
                            name="First-Name"
                            placeholder="First Name"
                        />
                        <input
                            className="w-[388px] text-sm border bg-[#F2E9E4] border-[#FD2524] rounded-full py-4 px-4"
                            maxLength="256"
                            name="Last-Name"
                            placeholder="Last Name"
                        />
                        <input
                            className="w-[388px] text-sm border bg-[#F2E9E4] border-[#FD2524] rounded-full py-4 px-4"
                            maxLength="256"
                            name="Email"
                            placeholder="Enter Your Email"
                        />
                    </div>
                    <div className="flex mt-10 gap-5 ">
                        <input
                            className="w-[388px] text-sm border bg-[#F2E9E4] border-[#FD2524] rounded-full py-4 px-4"
                            maxLength="256"
                            name="Birth-Date"
                            placeholder="Birth Date"
                        />
                        <input
                            className="w-[388px] text-sm border bg-[#F2E9E4] border-[#FD2524] rounded-full py-4 px-4"
                            maxLength="256"
                            name="Appointment-Date"
                            placeholder="Appointment Date"
                        />
                        <input
                            className="w-[388px] text-sm border bg-[#F2E9E4] border-[#FD2524] rounded-full py-4 px-4"
                            maxLength="256"
                            name="Phone-Number"
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className="flex mt-10 gap-5">
                        <input
                            className="w-[590px] text-sm border bg-[#F2E9E4] border-[#FD2524] rounded-full py-4 px-4"
                            maxLength="286"
                            name="Doctor-Name"
                            placeholder="Doctor Name"
                        />
                        <input
                            className="w-[590px] text-sm border bg-[#F2E9E4] border-[#FD2524] rounded-full py-4 px-4"
                            maxLength="286"
                            name="Socila-Security-Number"
                            placeholder="Social Security Number"
                        />
                    </div>
                    <div className="mt-10">
                        <input
                            className="w-[1200px] text-sm border bg-[#F2E9E4] border-[#FD2524] rounded-full py-4 px-4"
                            maxLength="572"
                            name="Previous-Visit"
                            placeholder="Previous Visit"
                        />
                    </div>
                    <div className="mt-10">
                        <input
                            className="w-[1200px] text-sm border bg-[#F2E9E4] border-[#FD2524] rounded-full py-4 px-4"
                            maxLength="572"
                            name="Message-Received"
                            placeholder="Message"
                        />
                    </div>
                    <div className="flex items-center justify-center mt-28 ">
                        <button className="w-[550px] cursor-pointer text-m font-semibold text-white hover:bg-[#F6D1CC] bg-[#F6A290] rounded-full py-5 px-4">
                            Submit Appointment
                        </button>
                    </div>
                    <div className="flex items-center justify-center mt-10 ">
                    <p className="text-xl w-[50rem] leading-relaxed">
                        By clicking on the link, you are accepting these terms
                        and conditions ("Agreement"). If you do not agree to be
                        bound by this Agreement in its entirety, please do not
                        click on the link.
                    </p>
                </div>
                </form>
                
            </div>
        </div>
    );
}

import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="px-24 py-10 flex justify-between items-center text-[#0b1d5b]">
            <div className="  gap-10 flex items-center">
                <ul className="flex gap-10 items-center">
                    <li>
                        <img
                            className="object-cover bg-[#f3f6ef]"
                            src="https://cdn.prod.website-files.com/6319b6d4b1d63276594daf25/6319c0f68861af101098bcce_medix-logo.svg"
                            alt=""
                        />
                    </li>
                    <li className="hover:text-[#5671C7] cursor-pointer">
                        <Link to="/doctors">Doctors</Link>
                    </li>
                    <li className="hover:text-[#5671C7] cursor-pointer">
                        <Link to="/Practices">Practices</Link>
                    </li>
                    <li className="hover:text-[#5671C7] cursor-pointer">
                        <Link to="/Blog"> Blog</Link>
                    </li>
                    <li className="flex gap-2 justify-center items-center hover:text-[#5671C7] cursor-pointer">
                        <img src="https://cdn.prod.website-files.com/6319b6d4b1d63276594daf25/6319c23ef947832ce373eabb_medix-calendar.svg"></img>
                        <Link to="/Book">Book Now</Link>
                    </li>
                </ul>
            </div>

            <div className=" ">
                <button className="px-6 py-3 hover:bg-[#D7F1F7] rounded-full border-2 border-[#efa99a] font-semibold ">
                    Help Center
                </button>
            </div>
        </div>
    );
}

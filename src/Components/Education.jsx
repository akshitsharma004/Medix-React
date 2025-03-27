export default function Education() {
    return (
        <div className="py-32 flex flex-col items-center gap-10">
            <div className="flex items-center gap-10">
                <div>
                    <h1 className="text-9xl"> Health</h1>
                </div>
                <div>
                    <img
                        src="https://cdn.prod.website-files.com/6319b6d4b1d63276594daf25/631b087a9035146a1cdc6da2_medix-blueline.svg"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex items-center gap-10">
                <div>
                    <img
                        src="https://cdn.prod.website-files.com/6319b6d4b1d63276594daf25/631b08dea3d5de0312ad3001_medix-book.svg"
                        alt=""
                    />
                </div>
                <div>
                    <h2 className="text-9xl">education</h2>
                </div>
            </div>
            <div>
                <h3 className="text-9xl">for everyone</h3>
            </div>

            <div className="py-24 flex flex-col gap-8 w-[25rem]">
                <p className="leading-relaxed text-xl ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                </p>
                <div>
                    <button className="px-2 py-2 font-semibold rounded-full border-2 hover:border-[#efa99a] border-[#0B1E5B] hover:bg-[#D7F1F7]">
                        All Education Materials
                    </button>
                </div>
            </div>
        </div>
    );
}

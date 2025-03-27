export default function Doctors() {
    const data = [
        {
            name: "John Williams",
            name2: "Dennis Bodman",
            bgclr: "#DEF8FF",
            speciality: "Cardiology",
        },
        {
            name: "William Frank",
            name2: "Joe Root",
            bgclr: "#F2E9E4",
            speciality: "Neurology",
        },
        {
            name: "Aaron Finch",
            name2: "David Warner",
            bgclr: "#F6D1CC",
            speciality: "Radiology",
        },
    ];
    return (
        <div className="px-24 py-20 relative">
            {data.map((value, item) => (
                <div key={item}
                    className="rounded-3xl sticky top-20 px-20 py-16 flex flex-col gap-10 "
                    style={{ backgroundColor: value.bgclr }}
                >~
                    <div className="flex gap-16 items-center justify-center">
                        <div className="rounded-full bg-white px-4 py-3 font-semibold">
                            {value.speciality}
                        </div>
                        <div className="rounded-full bg-white px-4 py-3 font-semibold">
                            #atwwwtemplates
                        </div>
                    </div>
                    <div className="flex gap-16 items-center justify-center ">
                        <div className="px-10 py-10 ">
                            <img
                                className="rounded-full"
                                src="https://cdn.prod.website-files.com/631b32778e8cbd88d5923bfc/631b350a4f0ecc304fdca8d2_medix-doctorimg.png"
                                alt=""
                            />
                        </div>

                        <div>
                            <img
                                className="rounded-full"
                                src="https://cdn.prod.website-files.com/631b32778e8cbd88d5923bfc/631b350a4f0ecc304fdca8d2_medix-doctorimg.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex gap-20 items-center justify-center">
                        <div>
                            <h1 className="text-4xl">{value.name}</h1>
                        </div>
                        <div>
                            <h2 className="text-4xl">{value.name2}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

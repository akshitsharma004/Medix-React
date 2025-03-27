export default function PracticesTextWrapper1() {
    const data = [
        {
            title: "Neurology",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
        {
            title: "Radiology",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
        {
            title: "Cardiology",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
    ];

    return (
        <div className="mx-24 mb-48 grid grid-cols-3 gap-20 justify-evenly">
            {data.map((elem, index) => (
                <div
                    key={index}
                    className="p-6 hover:bg-[#dbdfd55f] rounded-2xl"
                >
                    <div className="flex items-center gap-2">
                        <h5 className="text-3xl">{elem.title}</h5>
                        <img src="https://cdn.prod.website-files.com/6319b6d4b1d63276594daf25/631b0fbd5ea531485c0c8986_medix-arrowright.svg" />
                    </div>
                    <p className="pt-16">{elem.description}</p>
                </div>
            ))}
        </div>
    );
}

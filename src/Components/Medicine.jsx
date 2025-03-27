export default function Medicine() {
    const data = [
        {
            heading: "Medicine for all the people all around the globe",
            paragraph:
                "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
            img: "https://cdn.prod.website-files.com/6319b6d4b1d63276594daf25/631b05f5454cce991e491b05_medix-card1.png",
            color:" #CFF0F9",
            imgclr:"#FFE8D3"
        },
        {
            heading: "Friendly staff and state of the art facilities",
            paragraph:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
            img: "https://cdn.prod.website-files.com/6319b6d4b1d63276594daf25/631b05f5454cce991e491b05_medix-card1.png",
            color:"#FFE8D3",
            imgclr:" #CFF0F9"
        },
        {
            heading: "Regular check-up package",
            paragraph:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
            img: "https://cdn.prod.website-files.com/6319b6d4b1d63276594daf25/631b05f5454cce991e491b05_medix-card1.png",
            color:"#F6D1CC",
            imgclr:" #CFF0F9"
        },
    ];
    return (
        <div className="mt-10 flex flex-col items-center relative bg-[#F3F6EF] text-[#0b1d5b]">
            {data.map((value, index) => (
                <div key={index} className="p-20 sticky top-20 flex items-center justify-center gap-52 rounded-3xl"
                    style={{backgroundColor:value.color}}>
                    <div className="w-[25rem] py-8">
                        <h1 className="text-5xl font-medium">{value.heading}</h1>
                        <p className="text-xl pt-8 leading-relaxed">
                            {value.paragraph}
                        </p>
                    </div>
                    <div className="py-24 flex items-center justify-center rounded-full"
                    style={{backgroundColor:value.imgclr}}>
                        <img className="" src={value.img} alt="" />
                    </div>
                </div>
            ))}
        </div>
    );
}

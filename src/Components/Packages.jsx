export default function Packages() {
    const data =[
        {name:"Comfort Smart",price:"230$/y"},
        {name:"Comfort Plus",price:"300$/y"},
        {name:"Comfort Enterprise",price:"450$/y"}
    ]
    return (
        <div className="flex gap-24 py-20 items-center justify-center">
            <div className="w-[25rem]">
                <h1 className="text-5xl font-semibold">Check-up packages</h1>
                <p className="font-semibold py-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                </p>
            </div>
            <div className="flex flex-col gap-10">
                {data.map((value,item)=>(
                    <div key={item} className="rounded-full flex border-2 border-[#E1F3F4] gap-36 justify-between">
                    <div className="flex items-center">
                    <div className="mx-10 bg-[#CBC0D3] rounded-full">
                        <img className="px-2 py-2"
                            src="https://cdn.prod.website-files.com/6319b6d4b1d63276594daf25/6320904ab1e2f14757775c89_medix-star.svg"
                            alt=""
                        />
                    </div>
                    <div>
                        <h1 className="py-5 text-xl">{value.name}</h1>
                    </div>
                    </div>
                    <div className="py-5">
                        <h1 className="py-5 px-5 text-xl">{value.price}</h1>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

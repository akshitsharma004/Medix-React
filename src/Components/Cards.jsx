export default function Cards() {
    const data = [
        {heading:"The Effects of Sun Exposure."},
        {heading:"Allergy Season."},
        {heading:"Revolutionary MS Teatment"},
    ];
    return (
        <div className="px-40 py-32 flex gap-20 items-center">
         {data.map((value,index)=>(
               <div key={index} className="border-[#F2E9E4]  rounded-3xl flex flex-col gap-5 border-2 w-[22rem] hover:bg-[#F2E9E4]">
               <div>
                   <h1 className="px-10 py-10 font-semibold text-xl">{value.heading}</h1>
               </div>
               <div className="w-[15rem] mx-12 rounded-full bg-[#F2E9E4]">
                   <img src="https://cdn.prod.website-files.com/631b32778e8cbd88d5923bfc/633ac30f2c4e88ddaa4edc93_medix-practices.png" alt="" />
               </div>
               <div className="px-10 py-10 font-semibold text-xl">
                Explore
               </div>
           </div>
         ))}
        </div>
    );
}

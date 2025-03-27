
export default function BlogImg() {
  return (
    <div className="flex py-24 items-center justify-center">
    <div className="px-24 py-16 flex gap-56 rounded-full bg-[#CFF0F9] w-[80rem]">
        <div>
            <h1 className="text-4xl">Up to date with the news?</h1>

            <form className="w-[25rem] mt-8 bg-white flex border rounded-full border-[#CCCCCC]">
                <input
                    className="w-full text-sm bg-transparent rounded-full px-4"
                    maxLength="256"
                    name="Footer-Email"
                    placeholder="Enter your email address"
                    type="email"
                    id="Footer-Email"
                    required
                />
                <input
                    type="submit"
                    data-wait="Please wait"
                    className="px-8 py-3 rounded-full bg-[#0b1e5b] text-white font-medium"
                    value="Sign Up"
                />
            </form>

            <p className=" mt-10 w-[25rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut incididunt
            </p>
        </div>
        <div>
            <img className="mx-28 -mt-[168px] absolute"
                src="https://cdn.prod.website-files.com/6319b6d4b1d63276594daf25/633acdd3a1f06f182670b6af_medix-newsletter.png"
                alt=""
            />
        </div>
    </div>
</div>
  )
}

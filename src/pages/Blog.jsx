import Image from "../Components/Image";
import Cards from "../Components/Cards";
import BlogText from "../Components/BlogText";
import BlogImg from "../Components/BlogImg";

export default function Blog() {
    return (
        <div>
            <BlogText />
            <Cards />
            <BlogImg />
            <Image />
        </div>
    );
}

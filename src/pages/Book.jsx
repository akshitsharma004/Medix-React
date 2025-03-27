import Image from "../Components/Image";
import BookText from "../Components/BookText";
import BookText2 from "../Components/BookText2";
import BookText3 from "../Components/BookText3";
import BookLast from "../Components/BookLast";
import BookForm from "../Components/BookForm";

export default function Book() {
    return (
        <div className="py-28 px-36">
           <BookText/>
            <BookText2/>
            <BookForm/>
            <BookText3/>
            <BookLast/>
            <Image />
        </div>
    );
}

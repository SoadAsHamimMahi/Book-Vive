import { useEffect, useState } from "react";
import List from "../List/List";

const Read = () => {
   
    const [selectedReadBook, setSelectedReadBook] = useState([]);
 
    useEffect(() => {

        const getReadBook = JSON.parse(localStorage.getItem("books")) || [];
        setSelectedReadBook (getReadBook);


    },[])

    return (
        <div>
            <div>
            {
                selectedReadBook.map (data => <List key={data.bookId} data={data}></List>)
            }
            </div>

        </div>
    );
};

export default Read;
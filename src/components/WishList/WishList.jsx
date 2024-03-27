import { useEffect, useState } from "react";
import List from "../List/List";

const WishList = () => {

    const [selectedWishlistBooks, setSelectedWishlistBooks] = useState([]);

    useEffect(() => {
        const getWishlistBooks = JSON.parse(localStorage.getItem("wishlistBooks")) || [];
        setSelectedWishlistBooks(getWishlistBooks);
    }, []);

    return (
        <div>
            <div>
            {
                selectedWishlistBooks.map(data => <List key={data.bookId} data={data}></List>)
            }
            </div>
        </div>
    );
};

export default WishList;
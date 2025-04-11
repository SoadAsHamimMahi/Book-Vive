import React, { useEffect, useState } from "react";
import List from "../List/List";

const WishList = () => {
  const [selectedWishlistBooks, setSelectedWishlistBooks] = useState([]);

  useEffect(() => {
    const getWishlistBooks = JSON.parse(localStorage.getItem("wishlistBooks")) || [];
    setSelectedWishlistBooks(getWishlistBooks);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {selectedWishlistBooks.length > 0 ? (
        selectedWishlistBooks.map((data) => <List key={data.bookId} data={data} />)
      ) : (
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 col-span-full">
          Your wishlist is empty. Start adding books you want to read!
        </p>
      )}
    </div>
  );
};

export default WishList;

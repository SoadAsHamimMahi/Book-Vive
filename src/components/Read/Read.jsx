import React, { useEffect, useState } from "react";
import List from "../List/List";

const Read = () => {
  const [selectedReadBooks, setSelectedReadBooks] = useState([]);

  useEffect(() => {
    const getReadBooks = JSON.parse(localStorage.getItem("readBooks")) || [];
    setSelectedReadBooks(getReadBooks);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {selectedReadBooks.length > 0 ? (
        selectedReadBooks.map((data) => <List key={data.bookId} data={data} />)
      ) : (
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 col-span-full">
          You haven’t marked any books as read yet.
        </p>
      )}
    </div>
  );
};

export default Read;
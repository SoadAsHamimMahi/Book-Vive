import React, { useEffect, useState } from "react";
import List from "../List/List";

const Read = () => {
    const [selectedReadBooks, setSelectedReadBooks] = useState([]);

    useEffect(() => {
        const getReadBooks = JSON.parse(localStorage.getItem("readBooks")) || [];
        setSelectedReadBooks(getReadBooks);
    }, []);

    return (
        <div>
            <div>
                {selectedReadBooks.map((data) => (
                    <List key={data.bookId} data={data} />
                ))}
            </div>
        </div>
    );
};

export default Read;

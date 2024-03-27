
const Faq = () => {
    return (
        <div className='mx-auto w-11/12 my-5 lg:my-10'>
            <div className="bg-base-200 rounded-xl h-[100px] w-full flex justify-center items-center mb-10">
                <h2 className="text-3xl font-bold text-black">Books</h2>
            </div>


            <div className="flex flex-col lg:flex-row gap-6">

                <div className="lg:w-2/3">
                    <img src="https://static.vecteezy.com/system/resources/previews/015/875/889/non_2x/q-a-banner-icon-in-flat-style-question-and-answer-illustration-on-white-isolated-background-communication-sign-business-concept-vector.jpg" alt="" />
                </div>

                <div className="flex flex-col gap-3">
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                        What genres of books are available on your platform?
                        </div>
                        <div className="collapse-content">
                       <p> We offer a wide range of genres, including fiction, non-fiction, mystery, romance, science fiction, fantasy, self-help, and more.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        How do I search for a specific book?
                        </div>
                        <div className="collapse-content">
                            <p>You can use our search bar located at the top of the page to search by book title, author, genre, or any relevant keywords.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        Can I create a wishlist of books I want to read later?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, you can! Simply click on the "Add to Wishlist" button on the book's page, and it will be saved to your wishlist for future reference.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        Are there any discounts or promotions available for purchasing books?
                        </div>
                        <div className="collapse-content">
                            <p>We frequently offer promotions and discounts on selected books. Be sure to check our website regularly or subscribe to our newsletter to stay updated on the latest offers.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        How can I access my purchased books?
                        </div>
                        <div className="collapse-content">
                            <p>Once you've purchased a book, you can access it in your account library. Simply log in to your account and navigate to the "My Library" section to find your purchased books.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        What payment methods do you accept?
                        </div>
                        <div className="collapse-content">
                            <p>We accept various payment methods, including credit/debit cards, PayPal, and other secure online payment options.</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Faq;
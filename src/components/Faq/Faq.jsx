const Faq = () => {
    const faqs = [
      {
        question: "What genres of books are available on your platform?",
        answer: "We offer a wide range of genres, including fiction, non-fiction, mystery, romance, science fiction, fantasy, self-help, and more."
      },
      {
        question: "How do I search for a specific book?",
        answer: "You can use our search bar located at the top of the page to search by book title, author, genre, or any relevant keywords."
      },
      {
        question: "Can I create a wishlist of books I want to read later?",
        answer: "Yes, you can! Simply click on the 'Add to Wishlist' button on the book's page, and it will be saved to your wishlist for future reference."
      },
      {
        question: "Are there any discounts or promotions available for purchasing books?",
        answer: "We frequently offer promotions and discounts on selected books. Be sure to check our website regularly or subscribe to our newsletter to stay updated on the latest offers."
      },
      {
        question: "How can I access my purchased books?",
        answer: "Once you've purchased a book, you can access it in your account library. Simply log in to your account and navigate to the 'My Library' section to find your purchased books."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods, including credit/debit cards, PayPal, and other secure online payment options."
      }
    ];
  
    return (
      <section className='w-11/12 mx-auto my-10'>
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          <p className='text-gray-600 dark:text-gray-300 mt-2'>Find answers to the most common questions below.</p>
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Image */}
          <div className="hidden lg:block">
            <img
              src="https://static.vecteezy.com/system/resources/previews/015/875/889/non_2x/q-a-banner-icon-in-flat-style-question-and-answer-illustration-on-white-isolated-background-communication-sign-business-concept-vector.jpg"
              alt="FAQ Illustration"
              className="rounded-xl shadow-md"
            />
          </div>
  
          {/* Right FAQ Content */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="collapse collapse-arrow bg-white dark:bg-gray-800 shadow-md rounded-xl">
                <input type="checkbox" name="faq" defaultChecked={index === 0} />
                <div className="collapse-title text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </div>
                <div className="collapse-content text-gray-700 dark:text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Faq;
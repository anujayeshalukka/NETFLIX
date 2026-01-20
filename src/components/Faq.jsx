import React, { useState } from "react";

const faqData = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more.",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device for one fixed monthly fee.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime, on an unlimited number of devices.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can cancel anytime.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full padding mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-8 text-white">
        Frequently Asked Questions
      </h2>

      <div className="space-y-2">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className=" bg-[#2d2d2d] 
                         transition-colors duration-300 
                         hover:bg-[#3a3a3a]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center align-middle p-5 text-left text-white text-xl font-base"
              >
                {item.question}
                <span
                  className={`text-5xl transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

             <div
  className={`border-t-[.5px] border-t-black grid transition-all duration-500 ease-in-out ${
    isOpen
      ? "grid-rows-[1fr] opacity-100"
      : "grid-rows-[0fr] opacity-0"
  }`}
>
  <div className="overflow-hidden">
    <div className="px-5 text-xl pb-5 pt-3 bg-[#2d2d2d] text-gray-300">
      {item.answer}
    </div>
  </div>
</div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;

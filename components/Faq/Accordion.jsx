import React, { useState } from "react";

// import icons
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const Accordion = ({ accordion, idx }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // destructure accordion
  const { question, answer } = accordion;
  return (
    <div onClick={() => setIsOpen(!isOpen)} className=" cursor-pointer">
      <div onClick={() => setIndex(idx)} className="bg-white border rounded-sm capitalize">
        <div
          className={`${
            idx === index ? "bg-white  py-2" : "bg-white py-2"
          } min-h-[68px] flex items-center justify-between px-[30px]`}
        >
          <h6 className="font-semibold">{question}</h6>
          <div>
            {isOpen ? (
              <FaChevronCircleUp className="text-[20px] text-neutral-500" />
            ) : (
              <FaChevronCircleDown className="text-[20px] text-neutral-500" />
            )}
          </div>
        </div>
        <div
          className={`${
            isOpen ? "min-h-[200px] lg:min-h-[160px]" : "min-h-0"
          } max-h-0 overflow-hidden flex justify-center transition-all px-[30px]`}
        >
          <div className="mt-6">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

import { Checkbox } from "antd";
import React, { useState } from "react";
import { APP_ICONS } from "../../../common/icons";

const AccordionItems = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // const items = [
  //   {
  //     title: "What is Flowbite?",
  //     content: (
  //       <>
  //         <p className="mb-2 text-gray-500 dark:text-gray-400">
  //           Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
  //         </p>
  //         <p className="text-gray-500 dark:text-gray-400">
  //           Check out this guide to learn how to{" "}
  //           <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">
  //             get started
  //           </a>{" "}
  //           and start developing websites even faster with components on top of Tailwind CSS.
  //         </p>
  //       </>
  //     ),
  //   },
  //   {
  //     title: "Is there a Figma file available?",
  //     content: (
  //       <>
  //         <p className="mb-2 text-gray-500 dark:text-gray-400">
  //           Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
  //         </p>
  //         <p className="text-gray-500 dark:text-gray-400">
  //           Check out the{" "}
  //           <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">
  //             Figma design system
  //           </a>{" "}
  //           based on the utility classes from Tailwind CSS and components from Flowbite.
  //         </p>
  //       </>
  //     ),
  //   },
  //   {
  //     title: "What are the differences between Flowbite and Tailwind UI?",
  //     content: (
  //       <>
  //         <p className="mb-2 text-gray-500 dark:text-gray-400">
  //           The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
  //         </p>
  //         <p className="mb-2 text-gray-500 dark:text-gray-400">
  //           However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
  //         </p>
  //         <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
  //         <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
  //           <li>
  //             <a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">
  //               Flowbite Pro
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">
  //               Tailwind UI
  //             </a>
  //           </li>
  //         </ul>
  //       </>
  //     ),
  //   },
  // ];

  return (
    <div id="accordion-collapse">
      {items.length > 0 ?
        items.map((item, index) => (
          <div key={index}>
            <h2 className="shadow-sm flex flex-row items-center justify-between">
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className={`flex items-center justify-between w-full p-6 font-medium rtl:text-right text-gray-500 border ${index !== items.length - 1 ? "border-b-0" : ""
                  } border-gray-200 ${index === 0 ? "rounded-t-xl" : ""} focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 !font-bold text-lg `}
                aria-expanded={openIndex === index}
                aria-controls={`accordion-collapse-body-${index}`}
              >
                <span>{item.label}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transform ${openIndex === index ? "rotate-180" : ""} shrink-0`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${index}`}
              className={`${openIndex === index ? "block" : "hidden"}`}
              aria-labelledby={`accordion-collapse-heading-${index}`}
            >
              {item.childrens.length > 0 ?
                item.childrens.map((child, idx) => (
                  <div className="grid grid-cols-12 px-6 py-6 shadow-sm items-center" key={idx}>
                    <div className="col-span-1">
                      <Checkbox />
                    </div>
                    <div className="col-span-8">
                      <h3 className="font-semibold !text-gray-700">
                      {child.title}
                      </h3>
                    </div>
                    <div className="col-span-3 flex flex-row items-center gap-2 justify-end">
                      {child.is_video ? <APP_ICONS.VideoIcon /> :
                        child.is_audio ? <APP_ICONS.AudioIcon /> :
                          child.is_pdf ? <APP_ICONS.PDFIcon /> : null
                      } {child.duration} mins
                    </div>
                  </div>
                ))
                : null}
            </div>
          </div>
        ))
        : null}
    </div>
  );
};

export default AccordionItems;

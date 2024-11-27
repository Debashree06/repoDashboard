import React from "react";
import one from "../../../../assets/quicklinks/1.jpg";
import two from "../../../../assets/quicklinks/2.jpg";
import three from "../../../../assets/quicklinks/3.jpg";
import four from "../../../../assets/quicklinks/4.jpg";
import five from "../../../../assets/quicklinks/5.jpg";
import six from "../../../../assets/quicklinks/6.jpg";

const QuickLinks = () => {
  const links = [
    { name: "Home", imgsrc: one, url: "/home" },
    { name: "Employees", imgsrc: two, url: "/allEmployees" },
    { name: "Tickets", imgsrc: three, url: "/tickets" },
    { name: "Leaves", imgsrc: four, url: "/leaves" },
    { name: "Reimbursement", imgsrc: five, url: "/reimbursement" },
    { name: "Policies", imgsrc: six, url: "/policies" },
  ];

  return (
    <div className="w-full p-4 overflow-x-auto">
      <div className="flex space-x-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            style={{
              backgroundImage: `url(${link.imgsrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="flex-shrink-0 w-[150px] h-[150px] text-white rounded-lg flex justify-center items-center text-sm font-medium shadow-lg hover:opacity-80 transition duration-300"
          >
            <span className="bg-black bg-opacity-50 px-2 py-1 rounded">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;

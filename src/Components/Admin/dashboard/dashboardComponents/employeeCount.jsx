const EmployeeCount = () => {
    const empstatus = [
      {
        title: "Employee Count",
        count: 45,
      },
      {
        title: "Employees On site",
        count: 43,
      },
      {
        title: "Employees On leave",
        count: 3,
      },
      {
        title: "Employees On visit",
        count: 5,
      },
    ];
  
    return (
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {empstatus.map((emp, index) => {
          // Dynamic styles based on the title
          let color = "#1c82c1"; // Default: Blue
          let iconPath = "M5 13l4 4L19 7"; // Default: Check mark
          if (emp.title.toLowerCase().includes("site")){
            color="green";
          }else if (emp.title.toLowerCase().includes("leave")) {
            color = "red"; // Red for leave
            iconPath = "M6 18L18 6M6 6l12 12"; // X mark
          } else if (emp.title.toLowerCase().includes("visit")) {
            color = "purple"; // Green for visit
          }
  
          return (
            <div
              key={index}
              className="flex w-full h-24 bg-white rounded-xl overflow-hidden shadow-lg items-center"
            >
              <svg width="16" height="96" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 8 0 
                     Q 4 4.8, 8 9.6 
                     T 8 19.2 
                     Q 4 24, 8 28.8 
                     T 8 38.4 
                     Q 4 43.2, 8 48 
                     T 8 57.6 
                     Q 4 62.4, 8 67.2 
                     T 8 76.8 
                     Q 4 81.6, 8 86.4 
                     T 8 96 
                     L 0 96 
                     L 0 0 
                     Z"
                  fill={color}
                  stroke={color}
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
              <div className="mx-2.5 overflow-hidden w-full">
                <p
                  className={`mt-1.5 text-md font-bold leading-8 mr-3 overflow-hidden whitespace-nowrap`}
                  style={{ color }}
                >
                  {emp.title}
                </p>
                <p className="overflow-hidden leading-5 text-zinc-400 max-h-10">
                  {emp.count}
                </p>
              </div>
              <button
                className="w-16 cursor-pointer focus:outline-none"
                aria-label={`Action for ${emp.title}`}
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke={color}
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={iconPath}
                  ></path>
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default EmployeeCount;
  
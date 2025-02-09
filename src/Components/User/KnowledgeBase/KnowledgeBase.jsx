import React from "react";


function Policies() {



  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold">KnowledgeBase</h2>
        <div className="text-gray-500 text-sm md:text-base">
          Dashboard /
          <span className="text-gray-700 font-medium">KnowledgeBase</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-md shadow-md">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-2 px-2 md:px-4 border-b">No.</th>
              <th className="text-left py-2 px-2 md:px-4 border-b">
               Knowledge Base
              </th>
              <th className="text-left py-2 px-2 md:px-4 border-b">
                Department
              </th>
              <th className="text-left py-2 px-2 md:px-4 border-b">
                Description
              </th>
              <th className="text-left py-2 px-2 md:px-4 border-b">Created</th>
              <th className="text-left py-2 px-2 md:px-4 border-b">File</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-2 md:px-4 border-b">1</td>
              <td className="py-2 px-2 md:px-4 border-b">Rules & Regulation</td>
              <td className="py-2 px-2 md:px-4 border-b">All Departments</td>
              <td className="py-2 px-2 md:px-4 border-b">Lorem ipsum dollar</td>
              <td className="py-2 px-2 md:px-4 border-b">19 Feb 2019</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-2 md:px-4 border-b">2</td>
              <td className="py-2 px-2 md:px-4 border-b">Marketing</td>
              <td className="py-2 px-2 md:px-4 border-b">Marketing</td>
              <td className="py-2 px-2 md:px-4 border-b">Lorem ipsum dollar</td>
              <td className="py-2 px-2 md:px-4 border-b">20 Feb 2019</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {/* <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm text-gray-500">
        <span>Showing 1 to 2 of 2 entries</span>
        <div className="flex gap-2 mt-2 md:mt-0">
          <button className="px-3 py-1 border rounded text-gray-700 hover:bg-gray-200">
            Previous
          </button>
          <button className="px-3 py-1 border rounded text-white bg-red-500 hover:bg-red-600">
            1
          </button>
          <button className="px-3 py-1 border rounded text-gray-700 hover:bg-gray-200">
            Next
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Policies;

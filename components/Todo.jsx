import React from "react";

const Todo = ({ id, title, description, mongoId, complete }) => {
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
        {id + 1}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {title}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {description}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
        {complete ? "Completed" : "Pending"}
      </td>
      <td className=" gap-1 px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
        <button
          type="button"
          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent py-2 px-4 bg-red-500 text-white hover:text-indigo-800 focus:outline-none focus:text-indigo-800 disabled:opacity-50 disabled:pointer-events-none"
        >
          Delete
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent py-2 px-4 bg-green-500 text-white hover:text-indigo-800 focus:outline-none focus:text-indigo-800 disabled:opacity-50 disabled:pointer-events-none"
        >
          Done
        </button>
      </td>
    </tr>
  );
};

export default Todo;

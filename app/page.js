import Image from "next/image";

export default function Home() {
  return (
    <>
      <form className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full"
        />
        <textarea
          name="description"
          placeholder="Enter Description"
          className="px-3 py-2 border-2 w-full"
        ></textarea>
        <button type="submit" className="bg-indigo-500 py-3 px-11 text-white">
          Add task
        </button>
      </form>

      {/* //*Task table */}

      <div className="flex flex-col mt-24 w-[60%] mx-auto">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-indigo-100">
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Age
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      John Brown
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      45
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      New York No. 1 Lake Park
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-indigo-500 hover:text-indigo-800 focus:outline-none focus:text-indigo-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Jim Green
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      27
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      London No. 1 Lake Park
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Joe Black
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      31
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      Sidney No. 1 Lake Park
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Edward King
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      16
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      LA No. 1 Lake Park
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Jim Red
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      45
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      Melbourne No. 1 Lake Park
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

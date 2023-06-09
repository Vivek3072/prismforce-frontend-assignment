const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function BalanceTable({ revenue, expense }) {
  return (
    <>
      <div className="my-3 bg-white shadow rounded overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-gray-700 uppercase">
            <tr>
              <th scope="col" className="text-[1rem] text-center px-3 py-3">
                Month
              </th>
              <th scope="col" className="text-[1rem] text-center px-3 py-3">
                Revenue(Rs)
              </th>
              <th scope="col" className="text-[1rem] text-center px-3 py-3">
                Expense(Rs)
              </th>
              <th scope="col" className="text-[1rem] text-center px-3 py-3">
                Balance
              </th>
            </tr>
          </thead>
          <tbody>
            {Months &&
              Months.map((data, index) => {
                return (
                  <>
                    <tr className="bg-white border-b">
                      <th
                        scope="row"
                        className="flex md:ml-[35%] ml-[10%] py-2 text-gray-900 whitespace-nowrap"
                      >
                        <span className="w-full">{data}</span>
                      </th>
                      <td className="px-4 py-2 text-center text-green-500">
                        {revenue[index]}
                      </td>
                      <td className="px-4 py-2 text-center text-green-500">
                        {expense[index]}
                      </td>
                      <td className="px-4 py-2 text-center text-[1.2rem] text-sky-700">
                        {revenue[index] - expense[index]}
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

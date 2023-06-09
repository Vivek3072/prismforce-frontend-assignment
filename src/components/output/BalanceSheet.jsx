import { useState, useEffect } from "react";
import BalanceTable from "./BalanceTable";

function YourComponent({ revenueData, expenseData }) {
  const [monthRevenueData, setMonthRevenueData] = useState([]);
  const [monthExpenseData, setMonthExpenseData] = useState([]);

  useEffect(() => {
    const monthRevenueDataFetched = Array.from({ length: 12 }, (_, month) => {
      const filteredData = revenueData?.filter((data) => {
        const startDate = new Date(data.startDate);
        return startDate.getMonth() === month;
      });
      console.log(filteredData, "filter");
      const totalAmount = filteredData?.reduce(
        (total, data) => total + data.amount,
        0
      );

      setMonthRevenueData((prevMonthAmounts) => {
        const updatedAmounts = [...prevMonthAmounts];
        updatedAmounts[month] = totalAmount;
        return updatedAmounts;
      });

      return {
        month: month,
        amount: totalAmount,
      };
    });

    const monthExpenseDataFetched = Array.from({ length: 12 }, (_, month) => {
      const filteredData = expenseData?.filter((data) => {
        const startDate = new Date(data.startDate);
        return startDate.getMonth() === month;
      });

      const totalAmount = filteredData?.reduce(
        (total, data) => total + data.amount,
        0
      );
      setMonthExpenseData((prevMonthAmounts) => {
        const updatedAmounts = [...prevMonthAmounts];
        updatedAmounts[month] = totalAmount;
        return updatedAmounts;
      });

      return {
        month: month,
        amount: totalAmount,
      };
    });
  }, [revenueData, expenseData]);

  return (
    <>
      <div className="w-full flex flex-col justify-center">
        <div className="px-2 mt-2 text-[2rem] text-primary">
          Your Balance sheet
        </div>
        <BalanceTable revenue={monthRevenueData} expense={monthExpenseData} />
      </div>
    </>
  );
}

export default YourComponent;

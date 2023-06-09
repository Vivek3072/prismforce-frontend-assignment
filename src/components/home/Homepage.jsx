import { useState } from "react";
import JsonEditor from "../editor/JsonEditor";
import BalanceSheet from "../output/BalanceSheet";

export default function Homepage() {
  const [userInput, setUserInput] = useState({});
  const getJsonData = (input) => {
    setUserInput(JSON.parse(input));
  };
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <JsonEditor getData={getJsonData} />
        <BalanceSheet
          revenueData={userInput?.revenueData}
          expenseData={userInput?.expenseData}
        />
      </div>
    </>
  );
}

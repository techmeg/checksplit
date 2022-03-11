import React from "react";
import { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [checkData, setCheckData] = useState({
    tipPercent: 0,
    totalCheck: 0,
    diners: 0,
    kids: 0,
    adults: 0,
    barBill: 0,
  });

  const [resultData, setResultData] = useState({
    tipPercent: 0,
    totalWithTip: 0,
    dinerAmt: 0,
    kidshare: 0,
    adultshare: 0,
    driverAmount: 0,
    drinkerAmount: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setCheckData((prevCheckData) => {
      return {
        ...prevCheckData,
        [name]: value,
      };
    });
  }

  function resetData() {
    setCheckData({
      tipPercent: 0,
      totalCheck: 0,
      diners: 0,
      kids: 0,
      adults: 0,
      barBill: 0,
    });
    setResultData({
      tipPercent: 0,
      totalWithTip: 0,
      dinerAmt: 0,
      kidshare: 0,
      adultshare: 0,
      driverAmount: 0,
      drinkerAmount: 0,
    });
  }

  return (
    <Context.Provider
      value={{
        checkData,
        resultData,
        setResultData,
        handleChange,
        resetData,
        // resultMessage,
        // evenSplit,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };

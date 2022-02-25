import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import { useContext, useState } from "react";
import { Context } from "../Context";

function Driver() {
  const { checkData, handleChange, resetCheckData } = useContext(Context);

  const [splitAmounts, setSplitAmounts] = useState({
    driverAmount: 0,
    drinkerAmount: 0,
    tip: 0,
    totalPlusTip: 0,
  });
  const result = `Total with ${
    splitAmounts.tip
  }% tip is $${splitAmounts.totalPlusTip.toFixed(
    0
  )}. The designated driver owes: $${splitAmounts.driverAmount.toFixed(
    0
  )}. The remaining diners owe $${splitAmounts.drinkerAmount.toFixed(0)}.`;

  function calculateSplit(event) {
    event.preventDefault();
    const { total, bar, diners, tip } = checkData;
    const totalFood = total - bar;
    const driverAmount = (totalFood / diners) * (tip / 100 + 1);
    const totalPlusTip = total * (tip / 100 + 1);
    const drinkerAmount = (totalPlusTip - driverAmount) / (diners - 1);

    setSplitAmounts((prevSplit) => {
      return {
        driverAmount: prevSplit.driverAmount + driverAmount,
        drinkerAmount: prevSplit.drinkerAmount + drinkerAmount,
        tip: tip,
        totalPlusTip: totalPlusTip,
      };
    });
    return splitAmounts;
  }

  function resultMessage() {
    if (!splitAmounts.drinkerAmount) {
      return `Enter numbers in all fields. If tip is already included, enter 0 as tip percent.`;
    } else {
      return result;
    }
  }

  function resetData() {
    resetCheckData();
    setSplitAmounts({
      driverAmount: 0,
      drinkerAmount: 0,
      tip: 0,
      totalPlusTip: 0,
    });

    // console.log(checkData)
    return checkData;
  }

  return (
    <div>
      <Header />
      <main className='container flow'>
        <h1>Designated Driver</h1>
        <p>
          Excuse the DD from participating in paying for drinks. If the bar
          portion is not indicated on the check, estimate.
        </p>

        <form onSubmit={calculateSplit}>
          <div className='checkGrid'>
            <div className='form_group'>
              <label>
                Total Check
                <input
                  type='number'
                  name='total'
                  onChange={handleChange}
                  value={checkData.total}
                />
              </label>
            </div>
            <div className='form_group'>
              <label>
                Bar Amount
                <input
                  type='number'
                  name='bar'
                  onChange={handleChange}
                  value={checkData.bar}
                />
              </label>
            </div>
            <div className='form_group'>
              <label>
                # Diners
                <input
                  type='number'
                  name='diners'
                  onChange={handleChange}
                  value={checkData.diners}
                />
              </label>
            </div>
            <div className='form_group'>
              <label>
                Tip %
                <input
                  type='number'
                  name='tip'
                  onChange={handleChange}
                  value={checkData.tip}
                />
              </label>
            </div>
          </div>
          <div id='calculate'>
            <Button
              theme='btn'
              onClick={calculateSplit}
              value='Calculate Split'
            />
          </div>
        </form>
        <div className='message'>{resultMessage()}</div>
        <div>
          <Button theme='reset' onClick={resetData} value='Reset' />
        </div>
      </main>
    </div>
  );
}
export default Driver;

import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import { useContext, useState } from "react";
import { Context } from "../Context";
import Result from "../components/Result/Result";

function Driver() {
  const { checkData, handleChange, resetData, resultData, setResultData } =
    useContext(Context);

  const [resultText, setResultText] = useState("");
  const [errorText, setErrorText] = useState("");

  function driverSplit(event) {
    let { totalCheck, diners, barbill, tipPercent } = checkData;
    if (totalCheck === 0 || diners === 0 || barbill === 0) {
      setErrorText(
        "Enter numbers in all fields. If tip is already included, enter 0 as tip percent."
      );
    } else {
      //populate result data
      const totalFood = totalCheck - barbill;
      const driverAmount = (totalFood / diners) * (tipPercent / 100 + 1);
      const totalWithTip = totalCheck * (tipPercent / 100 + 1);
      const drinkerAmount = (totalWithTip - driverAmount) / (diners - 1);

      setResultData((prevData) => {
        return {
          driverAmount: driverAmount,
          drinkerAmount: drinkerAmount,
          tipPercent: tipPercent,
          totalWithTip: totalWithTip,
        };
      });

      setResultText(
        `The total for ${diners} with ${tipPercent}% tip is $${totalWithTip.toFixed(
          0
        )}. The designated driver owes: $${driverAmount.toFixed(
          0
        )}. The remaining diners owe $${drinkerAmount.toFixed(0)}.`
      );
    }
    return resultText;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    driverSplit();
  };
  // display form or results
  return (
    <div>
      <Header />
      <main className='container flow'>
        <h1>Designated Driver</h1>
        <p>
          Excuse the DD from paying for drinks. If the bar portion is not
          indicated, estimate.
        </p>
        {resultData.driverAmount === 0 ? (
          <div>
            <form>
              <div className='checkGrid'>
                <div className='form_group'>
                  <label>
                    Total Check
                    <input
                      type='number'
                      name='totalCheck'
                      onChange={handleChange}
                      value={checkData.totalCheck}
                    />
                  </label>
                </div>
                <div className='form_group'>
                  <label>
                    Bar Amount
                    <input
                      type='number'
                      name='barbill'
                      onChange={handleChange}
                      value={checkData.barbill}
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
                      name='tipPercent'
                      onChange={handleChange}
                      value={checkData.tipPercent}
                    />
                  </label>
                </div>
              </div>
              <div id='calculate'>
                <Button
                  theme='btn'
                  onClick={handleSubmit}
                  value='Calculate Split'
                />
              </div>
            </form>
            <div className='message'>{errorText}</div>
            <div>
              <Button theme='reset' onClick={resetData} value='Reset' />
            </div>
          </div>
        ) : (
          <Result result={resultText}></Result>
        )}
      </main>
    </div>
  );
}
export default Driver;

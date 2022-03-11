import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import { useState, useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import Result from "../components/Result/Result";

function Even() {
  const { checkData, handleChange, resetData, resultData, setResultData } =
    useContext(Context);

  const [resultText, setResultText] = useState("");
  const [errorText, setErrorText] = useState("");

  // calculate split amount
  function evenSplit() {
    let { totalCheck, diners, tipPercent } = checkData;
    if (totalCheck === 0 || diners === 0) {
      setErrorText(
        "Enter numbers in all fields. If tip is already included, enter 0 as tip percent."
      );
    } else {
      //populate result data
      const totalWithTip = totalCheck * (tipPercent / 100 + 1);
      const evenSplit = totalWithTip / diners;

      setResultData((resultData) => {
        return {
          tipPercent: tipPercent,
          totalWithTip: totalWithTip,
          dinerAmt: evenSplit,
        };
      });

      setResultText(
        `The total for ${diners} diners with ${
          resultData.tipPercent
        }% tip is $${totalWithTip.toFixed(
          0
        )}. The amount each diner owes is: $${evenSplit.toFixed(0)} .`
      );
    }
    return resultText;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    evenSplit();
  };
  // display form or results
  return (
    <div>
      <Header />
      <main className='container'>
        <h1>Split Even Steven</h1>
        <p>Split the check evenly among all diners.</p>
        {resultData.dinerAmt === 0 ? (
          <div>
            <form>
              <div className='checkGrid'>
                <div className='flex'>
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
                <div className='flex'>
                  <label>
                    Diners
                    <input
                      type='number'
                      name='diners'
                      onChange={handleChange}
                      value={checkData.diners}
                    />
                  </label>
                </div>
                <div className='flex'>
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
                  type='submit'
                  onClick={handleSubmit}
                  value='Calculate Split'
                ></Button>
              </div>
            </form>
            <div className='message'>{errorText}</div>
            <div>
              <Button theme='reset' onClick={resetData} value='Reset' />
            </div>
          </div>
        ) : (
          <Result splitName='Even Steven' />
        )}
      </main>
    </div>
  );
}
export default Even;

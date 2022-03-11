import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Result from "../components/Result/Result";
import { useContext, useState } from "react";
import { Context } from "../Context";

function Kids() {
  const { checkData, handleChange, resetData, resultData, setResultData } =
    useContext(Context);

  const [resultText, setResultText] = useState("");
  const [errorText, setErrorText] = useState("");

  // calculate split amount
  function kidSplit(event) {
    let { totalCheck, kids, adults, tipPercent } = checkData;
    if (totalCheck === 0 || adults === 0 || kids === 0) {
      setErrorText(
        "Enter numbers in all fields. If tip is already included, enter 0 as tip percent."
      );
    } else {
      //populate result data
      const totalWithTip = totalCheck * (tipPercent / 100 + 1);
      const numberShares = parseInt(adults * 2) + parseInt(kids);
      const kidshare = totalWithTip / numberShares;
      const adultshare = kidshare * 2;

      setResultData(() => {
        return {
          kidshare: kidshare,
          adultshare: adultshare,
          tipPercent: tipPercent,
          totalWithTip: totalWithTip,
        };
      });

      setResultText(
        `The total for ${adults} adults and ${kids} kids with ${tipPercent}% tip is $${totalWithTip.toFixed(
          0
        )}. The share for each kid is $${kidshare.toFixed(
          0
        )} and each adult share is $${adultshare.toFixed(0)}.`
      );
    }
    return resultText;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    kidSplit();
  };
  // display form or results
  return (
    <div>
      <Header />
      <main className='container flow'>
        <h1>Kids Pay Half</h1>
        <p>
          Maybe half is not a perfect reflection of the bill, but go with it.
        </p>
        {resultData.totalWithTip === 0 ? (
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
                      required
                    />
                  </label>
                </div>
                <div className='form_group'>
                  <label>
                    # Kids
                    <input
                      type='number'
                      name='kids'
                      onChange={handleChange}
                      value={checkData.kids}
                      min='1'
                      required
                    />
                  </label>
                </div>
                <div className='form_group'>
                  <label>
                    # Adults
                    <input
                      type='number'
                      name='adults'
                      onChange={handleChange}
                      value={checkData.adults}
                      min='1'
                      required
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
            <p className='message'>{errorText}</p>
            <div>
              <Button theme='reset' onClick={resetData} value='Reset' />
            </div>
          </div>
        ) : (
          <Result result={resultText} />
        )}
      </main>
    </div>
  );
}
export default Kids;

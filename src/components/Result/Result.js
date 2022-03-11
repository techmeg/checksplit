import Button from "../Button/Button";
import { useState, useContext } from "react";
import { Context } from "../../Context";
import { Link } from "react-router-dom";
import "./Result.css";

function Result(...props) {
  const { resultData, resetData } = useContext(Context);

  const result = `The total with ${
    resultData.tipPercent
  }% tip is $${resultData.totalWithTip.toFixed(
    0
  )}. The amount each diner owes is: $${resultData.dinerAmt.toFixed(0)}.`;

  return (
    <div>
      <div className='result'>{result}</div>
      <div>
        <Link to='/'>
          <Button theme='reset' onClick={resetData} value='Reset'></Button>
        </Link>
      </div>
    </div>
  );
}
export default Result;

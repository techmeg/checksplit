import Button from "../Button/Button";
import { useContext } from "react";
import { Context } from "../../Context";
import { Link } from "react-router-dom";
import "./Result.css";

function Result({ result }) {
  const { resetData } = useContext(Context);

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

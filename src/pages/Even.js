import Button from '../components/Button/Button'
import {useState} from 'react';

function Even() {

    const [checkData, setCheckData] = useState({total: '', diners: '', tip: ''})
    const [splitAmount, setSplitAmount] = useState(0);

    
    function handleChange(event){
        const {name, value} = event.target
        setCheckData(prevCheckData => {
            return {
                ...prevCheckData,
                [name]: value
            }
        })
        console.log(event.target)
    }
    function calculateSplit(event) {
        event.preventDefault()
        const {total, diners, tip} = checkData;
        setSplitAmount(prevSplit => prevSplit + (total * (tip/100 + 1) / diners))
    }
    console.log(splitAmount)
    return (
        <div>
            <h1>Split Even Steven</h1>
            <p>Enter the Total Check amount, the number of diners and the percentage to tip below.</p>
            
            <form onSubmit={calculateSplit} className="check">
                <div className="form_group">
                <label >Total Check
                    <input type="number" name="total" onChange={handleChange} value={checkData.total}/>
                </label>
                </div>
                <div className="form_group">
                <label >Diners
                    <input type="number" name="diners" onChange={handleChange} value={checkData.diners} />
                </label>
                </div>
                <div className="form_group">
                <label >Tip %
                    <input type="number" name="tip" onChange={handleChange} value={checkData.tip} />
                </label>
                </div>
                <div id="calculate">
                    <Button onClick={calculateSplit}value="Calculate Split"/>
                </div>
            </form>
            
    
        </div>
        )

}
export default Even
import Button from '../components/Button/Button'
import {useState} from 'react';

function Even() {

    const [checkData, setCheckData] = useState({total: '', diners: '', tip: ''})
    const [splitAmounts, setSplitAmounts] = useState({evenSplit: 0, tip: 0, totalPlusTip: 0});
    const result = `The total with ${splitAmounts.tip}% tip is $${splitAmounts.totalPlusTip.toFixed(0)}. The amount each diner owes is: $${splitAmounts.evenSplit.toFixed(0)} .`

    function handleChange(event){
        const {name, value} = event.target
        setCheckData(prevCheckData => {
            return {
                ...prevCheckData,
                [name]: value
            }
        })
    }
    function calculateSplit(event) {
        event.preventDefault()
        let {total, diners, tip} = checkData;
        if(tip === ''){
            tip = 0;
        }
        const totalPlusTip = (total * (tip/100 + 1))
        setSplitAmounts(prevSplit => {
            return {
                evenSplit: prevSplit.evenSplit + totalPlusTip/diners,
                tip: tip,
                totalPlusTip: totalPlusTip
            }
        })
        resetData()
        return splitAmounts;
    }

    function resultMessage(){
        if(!splitAmounts.evenSplit) {
            return `Enter numbers in all fields. If tip is already included, enter 0 as tip percent.`
        } else  {
            return result
        }
    }

    function resetData(){
        setCheckData({total: '', diners: '', tip: ''})
        
        // console.log(checkData)
        return checkData
        }
    
    return (
        <main className="mobile-width">
            <h1>Split Even Steven</h1>
            <p>Split the check evenly among all diners.</p>
            
            <form onSubmit={calculateSplit} >
                <div className="checkGrid">
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
                </div>
                <div id="calculate">
                    <Button onClick={calculateSplit}value="Calculate Split"/>
                </div>
            </form>
            <div className="message">{resultMessage()}</div>

        </main>
        )

}
export default Even
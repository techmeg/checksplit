import Button from '../components/Button/Button'
import {useState} from 'react';

function Kids() {

    const [checkData, setCheckData] = useState({total: '', kids: '',  adults: '', tip: ''})
    const [splitAmounts, setSplitAmounts] = useState({kidshare: 0, adultshare: 0, tip: 0, totalPlusTip: 0});
    let totalPlusTip = 0;
    const result = `Total with ${splitAmounts.tip}% tip is $${splitAmounts.totalPlusTip.toFixed(0)}. A kid share is: $${splitAmounts.kidshare.toFixed(0)}. The adults each owe $${splitAmounts.adultshare.toFixed(0)}`

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
        let {total, kids, adults, tip} = checkData;
        if(tip === ''){
            tip = 0;
        }
        console.log(total, kids, adults, tip)
        totalPlusTip = total * (tip/100 + 1);
        const numberShares = parseInt(adults*2) + parseInt(kids);
        const kidshare = totalPlusTip/numberShares
        const adultshare = kidshare*2;

        setSplitAmounts(prevSplit => {
            return {
                kidshare: prevSplit.kidshare + kidshare,
                adultshare: prevSplit.adultshare + adultshare,
                tip: tip,
                totalPlusTip: totalPlusTip
            }
        })
            
        resetData()
        return splitAmounts;
    }

    function resultMessage(){
        if(!splitAmounts.adultshare) {
            return `Enter numbers in all fields. If tip is already included, enter 0 as tip percent.`
        } else {
            return result
        }
    }

    function resetData(){
        setCheckData({total: '', kids: '', adults: '', tip: ''})
        
        // console.log(checkData)
        return checkData
        }
    
    return (
        <main className="mobile-width">
            <h1>Kids Pay Half</h1>
            <p>Maybe half is not a perfect reflection of the bill, but go with it.</p>
            
            <form onSubmit={calculateSplit}>
                <div className="checkGrid">
                    <div className="form_group">
                        <label >Total Check
                            <input type="number" name="total" onChange={handleChange} value={checkData.total} required/>
                        </label>
                    </div>
                    <div className="form_group">
                        <label >#  Kids
                            <input type="number" name="kids" onChange={handleChange} value={checkData.kids} min="1" required/>
                        </label>
                    </div>
                    <div className="form_group">
                        <label ># Adults
                            <input type="number" name="adults" onChange={handleChange} value={checkData.adults} min="1" required />
                        </label>
                    </div>
                    <div className="form_group">
                        <label >Tip %
                            <input type="number" name="tip" onChange={handleChange} value={checkData.tip} />
                        </label>
                    </div>
                </div>
                <div id="calculate">
                    <Button theme="btn" onClick={calculateSplit}value="Calculate Split"/>
                </div>
            </form>
            <p className="message">{resultMessage()}</p>
            <div >
            <Button  theme="reset" onClick={resetData} value="Reset"/>
            </div>
               
        </main>
        )

}
export default Kids
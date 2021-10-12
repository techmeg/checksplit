import './Form.css'

function Form () {
    return(
        <form action="" className="check">
            <div className="form_group">
            <label className="label" for="total">Total Check
                <input className="input" type="text" id="total" name="total" defaultValue="$  " />
            </label>
            </div>
            <div className="form_group">
            <label className="label" for="food">Food
                <input className="input" type="text" id="food" name="food" defaultValue="$  " />
            </label>
            </div>
            <div className="form_group">
            <label className="label" for="bar">Bar
                <input className="input" type="text" id="bar" name="bar" defaultValue="$  " />
            </label>
            </div>
            <div className="form_group">
            <label className="label" for="tip">Tip
                <input className="input" type="text" id="tip" name="tip" defaultValue="15%" />
            </label>
            </div>

        </form>

    )

}

export default Form
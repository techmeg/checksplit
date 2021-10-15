import './Button.css'

function Button(props) {
  return (
    <button onClick={props.onClick} className={props.theme}>{props.value}</button>

  )
}

export default Button

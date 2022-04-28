import './SmartButton.css'

function SmartButton(props) {
    return (
        <div>
            <button className="btn" style={{backgroundColor:props.color}}>{props.name}</button>
        </div>
    )
}

export default SmartButton;
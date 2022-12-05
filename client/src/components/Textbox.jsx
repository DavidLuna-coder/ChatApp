import { useState } from "react";
import './Textbox.css'
function TextBox({ws})
{
    let [text,setText] = useState('');

    const handleClick = () => 
    {
        if(text !== '')
        {
            ws.send(text);
            setText('')
        }
    }
    return (
        <div className="contenedor">
            <textarea value={text} onChange ={((event)=>setText(event.target.value))} />
            <button onClick = {handleClick}> Enviar</button>
        </div>
    )
}

export default TextBox
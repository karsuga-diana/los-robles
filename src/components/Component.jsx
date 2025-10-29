import React, {useEffectEvent, useState} from 'react'

export default function Component() {

    const [text, setText] = useState()
    const textOnChange = (event)  {
        setText(event.target.value)
    }
    return(
        <div> 
            <input type="text" />
            <button>Actulizar</button>
            <p>Texto input: {text}</p>
            <p>Texto actualizado</p>
        </div>
    )
}
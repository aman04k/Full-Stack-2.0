import React from 'react'
import { useState } from 'react'

function ConditionalRendering() {
    const [dark, setDark] = useState(false)
    const [show, setShow] = useState(true)

    function ChangeTheme() {
        setDark(!dark)
        console.log(dark)

    }

    function showOrHide() {
        setShow(!show)
    }

    if(dark){
        document.body.style.backgroundColor = 'black'
    }
    else{
        document.body.style.backgroundColor = 'white'
    }
  return (
    <div>
      <button onClick={ChangeTheme}>{dark?'dark':'light'}</button>
    <button onClick={showOrHide}>{show ? 'box show':'hide'}</button>
    <div className={show? 'box show': 'hide'}></div>
    </div>

 
  )
}

export default ConditionalRendering

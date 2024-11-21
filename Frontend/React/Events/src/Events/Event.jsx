import React from 'react'

function Event() {
   
    function submit(e){
    alert("Submitted")
    console.log(e)
    }

//   function increment(){
//       const count = 0
//       count++
//       console.log(count)
//   }


   function message(msg){
    alert(msg)
   }

   function squre(){
    const num = document.querySelector('input').value
    // console.log(num*num)
    // alert(num*num)

    document.querySelector('h1').innerHTML = num*num

    // document.write(num*num)
   }

  return (
    <div>
      <button onClick={submit}>Click</button> <br /><br />
      {/* <button onClick={increment}  >increase</button> */}

    <button onClick={()=>message("Hello")}>Message</button>  <br /><br />

     <h2>Calculate square</h2>
     <input type='number' placeholder='enter any anumber' /> 
     <button onClick={squre} >Submit</button>
     <h1></h1>

    </div>
  )
}

export default Event

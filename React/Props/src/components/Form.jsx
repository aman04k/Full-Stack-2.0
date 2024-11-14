import React from 'react'

function Form() {
  return (
    <form>
        <label htmlFor="name">Name</label>
      <input type="text" placeholder='Enter your name' id='name'/> <br /><br />

      <label htmlFor="email">Email</label>
      <input type="email" placeholder='Enter your email' id='email'/> <br /><br />

      <label htmlFor="number">Phone</label>
      <input type="number" id='number'  /> <br /><br />

      <label htmlFor="password">Password</label>
      <input type="password" placeholder='Enter your password' id='password'/> <br /><br />

      <button>Submit</button>
    
    </form>
    

  )
}



export default Form

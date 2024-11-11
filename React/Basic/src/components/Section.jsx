import React from 'react'

function Section() {
  return (
    <div>

        <form>
            Name: <input type="text" placeholder='Name' /> <br /><br />
           Email: <input type="text" placeholder='Email' /><br /><br />
           Password <input type="text" placeholder='Password' /><br /><br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Section
import React from 'react'
import './Homepage.css'

function Homepage() {
  return (
    <div>
<header>
  <nav>
  <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" width="200" alt="netflix logo" /> 
  <section>

 <label for="language">
  Language
 </label>
 <select name="language" id="language">
  <option value="English">English</option>
  <option value="English">Spanish</option>
  <option value="English">Finnish</option>
  <option value="English">Ireland</option>
  <option value="English">German</option>
 </select>
 <button>
  Sign Out
 </button>
  </section>
 

  </nav>
</header>


  </div>
  )
}

export default Homepage;
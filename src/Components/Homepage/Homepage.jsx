import React from 'react'
import './Homepage.css'

function Homepage() {
  return (
    <div>
<header>
  <nav>
  <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" width="200" alt="netflix  logo" /> 
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
 <button className="buttonn ">
  Sign Out
 </button>
  </section>
 

  </nav>
</header>
{/* <section> */}
  <main>
    <span>
      Welcome back!
    </span>
    <h1>Unlimited movies, TV shows and more.</h1>
    <span>Watch anywhere. Cancel anytime.</span>
    <button className='buttonn'>
      Restart Your Membership >
    </button>
  </main>
{/* </section> */}

  </div>
  )
}

export default Homepage;
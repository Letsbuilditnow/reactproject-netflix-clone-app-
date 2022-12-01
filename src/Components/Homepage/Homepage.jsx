import { Container } from "@mui/material";
import React from "react";
import "./Homepage.css";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import Footer from "../Footer/Footer"

function Homepage() {
  return (
    <div>
      <header>
        <nav>
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            width="200"
            alt="netflix  logo"
          />
          <section>
            <label for="language">Language</label>
            <select name="language" id="language">
              <option value="English">English</option>
              <option value="English">Spanish</option>
              <option value="English">Finnish</option>
              <option value="English">Ireland</option>
              <option value="English">German</option>
            </select>
            <button className="buttonn ">Sign Out</button>
          </section>
        </nav>
      </header>
      {/* <section> */}
      <main>
        <span>Welcome back!</span>
        <h1>Unlimited movies, TV shows and more.</h1>
        <span>Watch anywhere. Cancel anytime.</span>
        <button className="buttonn">Restart Your Membership ></button>
      </main>
      {/* </section> */}
      <container className="watchOnContainer">
        <section className="watchOn">
          <h1>Enjoy on your TV.</h1>
          <h2>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h2>
        </section>
        <section className="watchOnImage">
          <img src="/watchOn.png" alt="Netflix Image" />
        </section>
      </container>
      {/* </section> */}
      <container className=" downloadContainer watchOnContainer">
        <section className="watchOnImage">
          <img src="/Downloadcontainerimg.png" alt="Netflix Image" />
        </section>
        <section className="watchOn">
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favourites easily and always have something to watch.
          </h2>
        </section>
      </container>
      <container className="watchEverywhereContainer watchOnContainer">
        <section className=" watchEverywhere watchOn">
          <h1>Watch everywhere.</h1>
          <h2>
            Stream unlimited movies and TV shows on your phone,tablet,laptop and
            TV.
          </h2>
        </section>
        <section className="watchOnImage">
          <img src="/watchEverywhere.png" alt="Netflix Image" />
        </section>
      </container>
      <container className="createProfilesContainer downloadContainer watchOnContainer">
        <section className="watchOnImage">
          <img src="/createProfilesContainer.png" alt="Netflix Image" />
        </section>
        <section className="watchOn">
          <h1>Create profiles for children.</h1>
          <h2>
            Send children on adventures with their favourite characters in a
            space made just for them -- free with your membership.
          </h2>
        </section>
      </container>
     <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
     <Footer></Footer>
    </div>
  );
}

export default Homepage;

import React from 'react'

export default function SignIn() {
  return (
    <div>
        <section className="container">
            <h1>Sign In</h1>
            <form action="#">
                <input type="text" />
                <input type="password" placeholder='Password' />
                <button><span>Sign In</span></button>
                <section>
                    <input type="checkbox" name="signinsave" id="signinsave" />
                    <span>Reme</span>
                    <span>Nee</span>
                </section>
                <span>New to Neflix? <a href="#">Sign up now</a></span>
                <span>This page is protected by Goodle reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a></span>
            </form>
        </section>
    </div>
  )
}

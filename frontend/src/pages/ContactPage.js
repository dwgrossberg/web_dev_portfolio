import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  const [toSend, setToSend] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    social: "",
    news: "",
  });
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const redirect = useNavigate();

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_y17374w",
        "template_0adzqyq",
        form.current,
        "7WKUMGoTo_nXTG_0w"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          console.log(toSend);
          window.alert("Message sent!");
          redirect("/");
        },
        (error) => {
          console.log("FAILED...", error.text);
          window.alert("Error, please try again.");
        }
      );
  };
  return (
    <>
      <h2>Contact</h2>
      <article>
        <p>
          If you have queries or comments, please fill out the form below with
          your information and I will get back to you shortly.
        </p>
        <form ref={form} id="contactForm">
          <fieldset>
            <legend>Who are you?</legend>
            <p>
              <label htmlFor="firstName">
                First Name
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={toSend.firstName}
                  onChange={handleChange}
                  maxLength="50"
                  size="25"
                  required
                  placeholder="First Name"
                  aria-required="true"
                  data-form-type="name,first"
                  className="required"
                  tabIndex="0"
                  autoFocus
                />
              </label>
            </p>
            <p>
              <label htmlFor="lastName">
                Last Name
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={toSend.lastName}
                  onChange={handleChange}
                  maxLength="50"
                  size="25"
                  required
                  placeholder="Last Name"
                  aria-required="true"
                  data-form-type="name,last"
                  className="required"
                  tabIndex="0"
                />
              </label>
            </p>
            <p>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={toSend.email}
                  onChange={handleChange}
                  size="25"
                  maxLength="100"
                  required
                  pattern="[^ @]+@[^ @]+.[a-z]+"
                  placeholder="example@email.com"
                  aria-required="true"
                  data-form-type="email"
                  className="required"
                  tabIndex="0"
                />
              </label>
            </p>
            <p className="textComments">
              <label htmlFor="comments">
                Leave a comment, concern, or query
              </label>
              <textarea
                name="comments"
                id="comments"
                value={toSend.comments}
                onChange={handleChange}
                minLength="2"
                maxLength="300"
                required
                placeholder="What's on your mind? (between 2 and 300 characters)"
                aria-required="true"
                data-form-type="other"
                className="required"
                tabIndex="0"
              ></textarea>
            </p>
          </fieldset>
          <fieldset>
            <legend>Media Preferences</legend>
            <label htmlFor="favSocial">
              What's your preferred social media platform?
            </label>
            <select
              name="social"
              id="favSocial"
              value={toSend.social}
              onChange={handleChange}
              data-form-type="other"
              tabIndex="0"
            >
              <option value="Discord">Discord</option>
              <option value="Reddit">Reddit</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="Snapchat">Snapchat</option>
              <option value="TikTok">TikTok</option>
              <option value="Twitch">Twitch</option>
              <option value="None">None</option>
            </select>
            <>
              <p>What is your favorite daily news source?</p>
              <label htmlFor="newspapers">
                <input
                  type="radio"
                  name="news"
                  onChange={handleChange}
                  id="newspapers"
                  value={toSend.news}
                  data-form-type="other"
                  tabIndex="0"
                  defaultChecked
                />
                Newspapers
              </label>
              <label htmlFor="socialMedia">
                <input
                  type="radio"
                  name="news"
                  onChange={handleChange}
                  id="socialMedia"
                  value={toSend.news}
                  data-form-type="other"
                  tabIndex="0"
                />
                Social Media
              </label>
              <label htmlFor="tv">
                <input
                  type="radio"
                  name="news"
                  onChange={handleChange}
                  id="tv"
                  value={toSend.news}
                  data-form-type="other"
                  tabIndex="0"
                />
                TV
              </label>
              <label htmlFor="radio">
                <input
                  type="radio"
                  name="news"
                  onChange={handleChange}
                  id="radio"
                  value={toSend.news}
                  data-form-type="other"
                  tabIndex="0"
                />
                Radio
              </label>
              <label htmlFor="friends">
                <input
                  type="radio"
                  name="news"
                  onChange={handleChange}
                  id="friends"
                  value={toSend.news}
                  data-form-type="other"
                  tabIndex="0"
                />
                Friends
              </label>
            </>
          </fieldset>
          <button type="submit" tabIndex="0" onClick={sendEmail}>
            Submit
          </button>
        </form>
      </article>
    </>
  );
}
export default ContactPage;

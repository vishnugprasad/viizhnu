import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UBackend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Thorough understanding of asynchronous programming in Node.js using callbacks, Promises, and async/await</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Skilled in designing and implementing RESTful APIs that conform to industry standards and best practices.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Passion for learning and staying up-to-date with the latest trends and best practices in Node.js development.</p>
            </li>

            
          </ul>
        </article>
        {/* end of UI */}



        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Understanding of React components, state, props, and JSX</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Familiar with using React hooks to manage component state and implement side effects</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Skilled in developing reusable and modular React components that follow best practices and design patterns</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Thorough understanding of state management in React using concepts like useState, useContext, and useReducer</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Proficient in implementing responsive design using CSS media queries and flexbox/grid layouts</p>
            </li>
            
            
          </ul>
        </article>
        {/* end of web development*/}







        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Strong communication skills and ability to write and articulate ideas in a clear, concise, and engaging manner.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Passion for sharing knowledge and helping others succeed in their professional journeys.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Proficient in creating engaging content for LinkedIn that highlights my expertise and industry knowledge.</p>
            </li>
           
            
            
          </ul>
        </article>
        {/* end of content creation */}


      </div>
    </section>
  );
};

export default Services;

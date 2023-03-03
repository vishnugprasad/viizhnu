import React from "react";
import "./experience.css";
import {BsShieldFillCheck} from'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5> What skills I have</h5>
      <h2> My Experience</h2>
      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>Frontend DEvelopment</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon"/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon"/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon"/>
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon"/>
              <div>
              <h4>React</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon"/>
              <div>
              <h4>Tailwind</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

          </div>

        </div>
{/* end of frontend */}
        <div className="experience_backtend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon"/>
              <div>
              <h4>NodeJS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon"/>
              <div>
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon"/>
              <div>
              <h4>Solidity</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon"/>
              <div>
              <h4>RUST</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon"/>
              <div>
                <h4>AWS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;

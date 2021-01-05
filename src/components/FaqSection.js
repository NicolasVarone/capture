import React from "react";
// Component
import Toggle from "./Toggle";
//Style
import styled from "styled-components";
import { About } from "../styles";
// Animation
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <div>
      <Faq>
        <h2>
          Any Questions <span>FAQ</span>
        </h2>
        <AnimateSharedLayout>
          <Toggle title="How Do I Start?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                repellendus necessitatibus labore, animi qui ipsam unde adipisci
                eum doloribus id!
              </p>
            </div>
          </Toggle>
          <Toggle title="Daily Schedule">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem, at.
              </p>
            </div>
          </Toggle>
          <Toggle title="Different Payment Methods">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem, at.
              </p>
            </div>
          </Toggle>
          <Toggle title="What Products Do You Offer?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem, at.
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </Faq>
    </div>
  );
};

// Style
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: 300;
  }
  .faq-line {
    background-color: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;

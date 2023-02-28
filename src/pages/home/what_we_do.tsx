"use client";
import { useState } from "react";
import styles from "../../app/page.module.css";


export default function WhatWeDo() {
  const [tabToggle, setTabToggle] = useState(1);
  return (
    <>
      <div
        className={styles.main}
        style={{
          padding: 100,
        }}
      >
        <div
          style={{
            display: "block",
          }}
        >
          <section className={styles.whatWeDo}>
            <div className={styles.whatWeDoContainer}>
              <div className={styles.sectionTitle}>
                <h1>What We Do</h1>
              </div>
              <div className={styles.whatWeDoTab}>
                <div className={styles.whatWeDoTabTab}>
                  <button
                    onClick={() => {
                      setTabToggle(1);
                    }}

                   className={ tabToggle === 1 ?styles.tabActive : styles.tabUnActive}
                  >
                    Digital Experience Strategy
                  </button>
                  <button
                    onClick={() => {
                      setTabToggle(2);
                    }}
                    className={ tabToggle === 2 ?styles.tabActive : styles.tabUnActive}
                  >
                    Web & Mobile App Development
                  </button>
                  <button
                    onClick={() => {
                      setTabToggle(3);
                    }}
                    className={ tabToggle === 3 ?styles.tabActive : styles.tabUnActive}
                  >
                    User Experience and Design
                  </button>
                </div>
              {tabToggle===1?(
                <div
                  id="Digital Experience Strategy"
                  className={styles.whatWeDoTabContent}
                >
                  <div className={styles.tabContentInner}>
                    <p>
                      Our digital strategy framework eases the process of
                      customer adoption and increases ongoing engagement. We
                      define product experience, customer journeys and content
                      strategy tailored to exceed customer expectations.
                    </p>
                    <ul>
                      <li>Product Strategy</li>
                      <li>Marketing Strategy</li>
                      <li>User Experience Strategy</li>
                      <li>Content Strategy</li>
                    </ul>
                  </div>
                </div>
                 ) : tabToggle === 2 ? (
                <div
                  id="Web & Mobile App Development"
                  className={styles.whatWeDoTabContent}
                >
                  <div className={styles.tabContentInner}>
                    <p>
                      Our full-stack development services help you bring modern
                      applications to life as envisioned, on time and under
                      budget. We can assist you with your end to end application
                      development needs - Enterprise-class application
                      development, mobile and web development, backend
                      development to API development, integration, and
                      deployment.
                    </p>
                    <ul>
                      <li>Mobile Apps (Native and Hybrid)</li>
                      <li>Front-end</li>
                      <li>Web Development</li>
                      <li>Enterprise Applications</li>
                    </ul>
                  </div>
                </div>
             ) : (
                <div
                  id="User Experience and Design"
                  className={styles.whatWeDoTabContent}
                >
                  <div className={styles.tabContentInner}>
                    <p>
                      We combine human-centered design with leading technologies
                      to deliver compelling experiences that move markets and
                      transform businesses. We can assist you with UX research,
                      analysis, IA, wireframing, UI design, interaction,
                      prototyping, and UX testing.
                    </p>
                    <ul>
                      <li>User Analysis</li>
                      <li>User Interface Design</li>
                      <li>Information Architecture</li>
                      <li>Wireframes</li>
                      <li>Prototyping</li>
                      <li>Interaction Design</li>
                    </ul>
                  </div>
                </div>
             )}

              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

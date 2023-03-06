import styles from "../../app/page.module.css";

export default function WaitingComponent() {
  return (
    <>
      <div className={styles.startupForm}></div>
      <div className={styles.startUpWaitingContainer}>
        <div className={styles.startupFormWrap}>
          <h1 className={styles.startupFormWrapHeader}>
            {"We’ve been waiting for you..."}
          </h1>
          <p className={styles.startupFormWrapDesc} style={{
                paddingTop: '20px',
          }}>
            {"Ready to begin your journey?"}
            <br></br>
            {"GET STARTED WITH STUDIO DISENO TODAY"}
          </p>
          <form name="contactForm">
            <div className={styles.formRow}>
                
              <div className={styles.colMd12}>
                <div
                  className={
                    styles.inputStartupField// + " " + styles.inputFieldFullWidth
                  }
                >
                  <input
                    type={"text"}
                    name={"name"}
                    id={"name"}
                    placeholder={"Name"}
                  />
                  <br></br>
                  <span id="nameInfo" className={"info"}></span>
                </div>
              </div>
            </div>

            <div className={styles.formRow}>
                <div className={styles.colMd6}>
                  <div className={styles.inputStartupField}>
                    <input
                      type="mail"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                    <br />
                    <span id="mail" className={styles.info}></span>
                  </div>
                </div>
                <div className={styles.colMd6}>
                  <div className={styles.inputStartupField}>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                    />
                    <br />
                    <span id="phoneInfo" className={styles.info}></span>
                  </div>
                </div>
                </div>
                <div className={styles.formRow}>
                <div className={styles.colMd12}>
                  <div className={styles.inputStartupField}>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Company Name"
                    />
                    <br />
                    <span id="companyInfo" className={styles.info}></span>
                  </div>
                </div>
        
              </div>
              <div className={styles.radiobuttonGroup}>
                <div className={styles.groupTitle}>
                  <h4 className={styles.formTitle}>Company Size</h4>
                  <span id="companysize" className={styles.info}></span>
                </div>
                <input type="radio" name="companysize" value="1-10" id="1-10" />
                <label >1-10</label>
                <input type="radio" name="companysize" value="11-50" id="11-50" />
                <label>11-50</label>
                <input
                  type="radio"
                  name="companysize"
                  value="51+"
                  id="51+"
                />
                <label >51+</label>
              </div>
              <div className={styles.radiobuttonGroup}>
                <div className={styles.groupTitle}>
                  <h4 className={styles.formTitle}>Product development Stage</h4>
                  <span id="productdevelopment" className={styles.info}></span>
                </div>
                <input
                  type="radio"
                  name="productdevelopment"
                  value="Ideation phase"
                  id="Ideation phase"
                />
                <label >Ideation phase</label>
                <input
                  type="radio"
                  name="productdevelopment"
                  value="Concept development"
                  id="Concept development"
                />
                <label >Concept development</label>
                <input
                  type="radio"
                  name="productdevelopment"
                  value="Business Analysis"
                  id="Business Analysis"
                />
                <label >Business Analysis</label>
                <input
                  type="radio"
                  name="productdevelopment"
                  value="Product development"
                  id="Product development"
                />
                <label >Product development</label>
                <input
                  type="radio"
                  name="productdevelopment"
                  value="Test marketing"
                  id="Test marketing"
                />
                <label >Test marketing</label>
                <input
                  type="radio"
                  name="productdevelopment"
                  value="Commercialization"
                  id="Commercialization"
                />
                <label >Commercialization</label>
              </div>
              <div className={styles.checkboxGroupFinal}>
                <div className={styles.groupTitle}>
                  <h4 className={styles.formTitle}>Services required</h4>
                  <span id="service" className={styles.info}></span>
                </div>
                <label
                  ><input
                    type="checkbox"
                    name="servicesrequired[]"
                    value="Product Ideation"
                  />
                <span> Product Ideation</span> 
                  </label>
                <label
                  ><input
                    type="checkbox"
                    name="servicesrequired[]"
                    value="UX/UI design"
                  /><span> UX/UI design </span></label
                >
                <label
                  ><input type="checkbox" name="servicesrequired[]" value="MVP" />
                  <span>MVP</span></label
                >
              </div>
              <div className={styles.submitButton}>
                <div className={styles.submitButtonWrap}>
                  <input
                    type="submit"
                    id={styles.sendmessage}
                    name="send"
                    // class="btn-submit"
                    value="Send"
                  />
                </div>
              </div>
          </form>
        </div>
      </div>
    </>
  );
}

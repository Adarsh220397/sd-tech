import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import OurClients from "../components/our_clients";
import linkedIn from "../../../assets/images/linkedin.svg";
import { useState, useEffect } from "react";
import Loading from "@/app/loading";
import { createClient } from "contentful";

export default function ContactUs({content, addressContent}:any) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetchData();
    setLoading(true);
    setLoading(false);
    console.log("------------");
  }, []);
  console.log(addressContent)
  return (
    
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div>
            <Header darkLogo={true} pageName={"Contact"} />

            <div className={styles.contactUsWrap}>
              <div className={styles.careerContainer}>
                <div className={styles.contactUsRow}>
                  <div className={styles.colMd8}>
                    <div className={styles.contactUsWrapForm}>
                      {content.map((data:any,index:number)=>(
                           <h3 key={data.key}> {data.fields.title}</h3>
                      ))}
                         {content.map((data:any,index:number)=>(
                     <h5 key={data.key}> {data.fields.subTitle1}</h5>
                      ))}
                           {content.map((data:any,index:number)=>(
                       <p key={data.key}>{data.fields.subTitle2}</p>
                      ))}
                   
                     
                    
                      <form name="contactForm">
                        <div className={styles.checkboxGroup}>
                          <div className={styles.groupTitle}>
                            <h4 className={styles.formTitleH4}>Service</h4>
                            <span
                              id="service"
                              className={styles.spanInfo}
                            ></span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                                      {content.map((data:any,index:number)=>(
                      data.fields.serviceList.map((serviceItem:any,index:number)=>(
                        <div key={data.key} className={styles.chip}>
                        <label>
                          <span>{serviceItem}</span>
                        </label>
                      </div>
                      ))
                      ))}

                           
                            {/* <div className={styles.chip}>
                              <label>
                                <span> Web design</span>
                              </label>
                            </div>
                            <div className={styles.chip}>
                              <label>
                                <span> App design</span>
                              </label>
                            </div>
                            <div className={styles.chip}>
                              <label>
                                <span>Interaction design</span>
                              </label>
                            </div>
                            <div className={styles.chip}>
                              <label>
                                <span>Animation</span>
                              </label>
                            </div> */}
                          </div>
                        </div>

                        <div className={styles.radiobuttonGroup}>
                          <div className={styles.groupTitle}>
                            <h4 className={styles.formTitleH4}>Budget</h4>
                            <span
                              id="service"
                              className={styles.spanInfo}
                            ></span>
                          </div>
<div    style={{
                              display: "flex",
                              flexDirection: "row",
                            }}>
                          {content.map((data:any,index:number)=>(
                      data.fields.budgetList.map((budgetItem:any,index:number)=>(
                        <div key={data.key} >
                     
                        <input
                            type="radio"
                            name="budget"
                            value="$15K - $30K"
                            id="$15K - $30K"
                          />
                          <label className={styles.chip}>{budgetItem}</label>
                        
                      </div>
                      ))
                      ))}
                       </div>
                          {/* <input
                            type="radio"
                            name="budget"
                            value="$30K - $50K"
                            id="$30K - $50K"
                          />
                          <label className={styles.chip}>$30K - $50K</label>
                          <input
                            type="radio"
                            name="budget"
                            value="$50K - $80K"
                            id="$50K - $80K"
                          />
                          <label className={styles.chip}>$50K - $80K</label>
                          <input
                            type="radio"
                            name="budget"
                            value="$80K and above"
                            id="$80K and above"
                          />
                          <label className={styles.chip}>$80K and above</label> */}
                        </div>
                        <div className={styles.rowInput}>
                          <div className={styles.colInput}>
                            <div className={styles.inputField}>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                              />{" "}
                              <br />
                              <span
                                className={styles.info}
                                id="nameInfo"
                              ></span>
                            </div>
                          </div>
                          <div className={styles.colInput}>
                            <div className={styles.inputField}>
                              <input
                                type="mail"
                                name="email"
                                id="email"
                                placeholder="Email"
                              />{" "}
                              <br />
                              <span className={styles.info} id="mail"></span>
                            </div>
                          </div>
                        </div>
                        <div className={styles.fileUpload}>
                          <div className={styles.inputField}>
                            <div className={styles.inputFieldFullWidth}>
                              <input
                                style={{ width: "98%" }}
                                type="text"
                                name="message"
                                id="message"
                                placeholder="Project Details"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className={
                            styles.exploreMore + " " + styles.exploreMoreContact
                          }
                        >
                          <div className={styles.exploreMoreanchore}>
                            <input
                              type="submit"
                              id={styles.sendmessage}
                              className="btn-submit"
                              value="Send"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      id="result"
                      style={{
                        color: "#ED1C24",
                        fontSize: "14px",
                        padding: "15px",
                      }}
                    ></div>
                  </div>
                  <div className={styles.formColMd4}>
                    <div className={styles.contactUsWrapFormDetails}>
                  
                      <h3>Contact us</h3>
                      {addressContent.map((data:any,index:number)=>(
                            <div key={data.key} className={styles.virtualAddress}>
                            <a href="mailto:hello@studiodiseno.com">
                              E-mail: {data.fields.eMail}
                            </a>
                          </div>
                        ))}
                  
                      <div
                        style={{
                          height: "5px",
                        }}
                      ></div>
                           {addressContent.map((data:any,index:number)=>(
                           <div key={data.key} className={styles.virtualAddress}>
                           <a href="tel:+91 44 42632026">
                             Contact:{data.fields.phone}{" "}
                           </a>
                         </div>
                        ))}
                  
                   
                      <div className={styles.physicalAddress}>
                      {addressContent.map((data:any,index:number)=>(
                       <h4   key={index}>
                   {data.fields.indianAddress}
                       <br></br> {data.fields.indianAddress2}
                     </h4>
                        ))}
                       
                        <a href="https://goo.gl/maps/cGemWsnPPi1Ja5G7A">
                          View Map{" "}
                        </a>
                      </div>
                      <div className={styles.physicalAddress}>
                      {addressContent.map((data:any,index:number)=>(
                     <h4 key={data.key}>
                          {data.fields.usAddress}<br></br>
                          {data.fields.usAddress2}
                        </h4>
                        ))}
                      
                        <a href="https://goo.gl/maps/M1qFmNvrbmgx6tMTA">
                          View Map{" "}
                        </a>
                      </div>
                      <div className={styles.socialMediaCareerSite}>
                        <h3>Follow</h3>

                        <a href="https://www.linkedin.com/company/sdtech-india">
                          <Image src={linkedIn} alt="linkedin" priority />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <OurClients /> */}
            {addressContent.map((data:any,index:number)=>(
                             <Footer key={index} contact={data.fields.phone} inAddress1={data.fields.indianAddress}inAddress2={data.fields.indianAddress2}mailId={data.fields.eMail}usAddress1={data.fields.usAddress}usAddress2={data.fields.indianAddress2}/>
                        ))}

          </div>
        </>
      )}
    </>
  );
}
export async function getStaticProps(){

  const client = createClient({
    space:  'cy16bo6v0525',
    accessToken: 'Yh0Z1HcEaVy1g0pCx-q1OyGSQJpOe3JuMvrxFkPLX0w',
  })
  
  const res = await client.getEntries({
  content_type :'contactUs'
  })

  const contactDetailsResponse = await client.getEntries({
    content_type :'contactAddressContent'
    })
  
  return {
    props:{
      content:res.items,
addressContent: contactDetailsResponse.items,
    }
  }
  }

import Image from "next/image";
import { Suspense } from "react";
import styles from "../../app/page.module.css";



interface IProps {
  title :string;
  description: string;
  backgroundImage: string;
  }
export default function Services({title, description,backgroundImage}:IProps ) {
  return (
    <>
      {/* <Suspense fallback={<Loading />}> */}
    {/* <Header darkLogo={false} pageName={'Services'}/> */}
      <div >
        <div className={styles.bgImageForServices} style={{
          backgroundImage:`url(${backgroundImage})`
        }}>
          <div className={styles.homeHeaderContent}>
            <div className={styles.container}>
              <div className={styles.serviceHeaderContentInner}>
                <h1>
                 <div>{title}</div> 
                
                </h1>
                <p>
           {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* </Suspense> */}
    </>
  );
}

import Image from "next/image";
import styles from "../../app/page.module.css";
import mvp from "../../../assets/images/startup/mvp.png";
export default function MVP({mvpContent}:any) {
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
          <div className={styles.row}>
            <div className={styles.headerSectionRowColMd6}>
              {mvpContent.map((data:any)=>(
        <div>
        <Image
          src={'https:'+data.fields.image.fields.file.url}
          alt="mvp"
          style={{
            verticalAlign: "middle",
          }}
          width={512}
          height={452}
          priority
        />
      </div>
              ))}
      
            </div>
            <div className={styles.headerSectionRowColMd6}>
              <div className={styles.servicesListDesc}>
                <div className={styles.tabContentInner}>
                  {mvpContent.map((data:any,index:number)=>(
   <div className={styles.tabContentInnerBlock}>
   <h3>{data.fields.heading}</h3>
   <p>
    {data.fields.description}
   </p>
   <ul>
     <li>
       Innovative implementation of the app with basic
       functionality
     </li>
     <li>
       Gain valuable insight on what works and what doesn’t
     </li>
     <li>Reduce implementation costs and time to market</li>
     <li>
       Understand how customers perceive the product before the
       launch
     </li>
   </ul>
 </div>
                  ))}
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

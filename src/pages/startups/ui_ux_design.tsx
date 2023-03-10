import Image from "next/image";
import styles from "../../app/page.module.css";
import uxdesign from "../../../assets/images/startup/uxdesign.png";
export default function UIUXDesign({uiuxdesignContent}:any) {
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
              <div className={styles.servicesListDesc}>
              <div className={styles.tabContentInner}>
                {uiuxdesignContent.map((data:any,index:number)=>(
     <div className={styles.tabContentInnerBlock}>
     <h3>{data.fields.heading}</h3>
     <p>
     {data.fields.description}
     </p>

     <ul>
           <li>Wireframing to create a prototype of the product</li>
           <li>
             Information Architecture to create an insightful structure
           </li>
           <li>Interactive design for seamless user engagement</li>
           <li>Focus on ease of use and user-friendliness</li>
         </ul>
   </div>
                ))}
         
              </div>
              </div>
            </div>
            <div className={styles.headerSectionRowColMd6}>
              {uiuxdesignContent.map((data:any)=>(
      <div className={styles.servicesListImage}>
      <Image
        src={'https:'+data.fields.image.fields.file.url}
        alt="uxdesign"
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
          </div>
        </div>
      </div>
    </>
  );
}

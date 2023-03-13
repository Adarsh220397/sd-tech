import Image from "next/image";
import styles from "../../app/page.module.css";
import productionideation from "../../../assets/images/startup/productionideation.png";
export default function ProductIdeation({productIdeationContent}:any) {
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
              {productIdeationContent.map((data:any,index:number)=>(
    <div  key={data.key}>
    <Image
      src={'https:'+data.fields.image.fields.file.url}
      alt="productionideation"
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
                  {productIdeationContent.map((data:any,index:number)=>(
    <div  key={data.key} className={styles.tabContentInnerBlock}>
    <h3>{data.fields.heading}</h3>
    <p>
    {data.fields.description}
    </p>
    <ul>
      <li>
        Client engagements to determine goals and challenges
      </li>
      <li>
        Periodical evaluation of needs and requirements using
        user and stakeholder perspectives
      </li>
      <li>
        Formalized product ideation based on goals and
        objectives
      </li>
      <li>Determination of business logic</li>
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

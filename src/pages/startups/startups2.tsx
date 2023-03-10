import Image from "next/image";
import styles from "../../app/page.module.css";



interface IProps {
  title :string;
  description: string;
  backgroundImage: string;
  }


export default function StartUp( {title,description,backgroundImage}:IProps) {
  return (
    <>
      <div>
        <div>
          {/* className={styles.homeHeader} */}

          <div className={styles.homeHeaderServices}>
            <div className={styles.bgImageForStartUp} style={{
              backgroundImage:  `url(${backgroundImage})`
            }}>
              <div className={styles.homeHeaderContent}>
                <div className={styles.container}>
                  <div className={styles.serviceHeaderContentInner}>
                    <h1>{title}</h1>
                    <p>
               {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

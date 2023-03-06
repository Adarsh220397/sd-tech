import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import OurClients from "../components/our_clients";
import VersionApp from "../whoWeAre/version_app";
import MVP from "./mvp";
import ProductIdeation from "./product_ideation";
import UIUXDesign from "./ui_ux_design";
import WaitingComponent from "./we_have_been_waiting";

export default function StartUp() {
  return (
    <>
      <div>
        <div>
          {/* className={styles.homeHeader} */}

          <div className={styles.homeHeaderServices}>
            <div className={styles.bgImageForStartUp}>
              <div className={styles.homeHeaderContent}>
                <div className={styles.container}>
                  <div className={styles.serviceHeaderContentInner}>
                    <h1>For Startups</h1>
                    <p>
                      We extend our assistance to startups with our expertise on
                      product ideation, UX/UI design and MVP development.
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
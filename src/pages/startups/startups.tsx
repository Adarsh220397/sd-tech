import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import OurClients from "../components/our_clients";
import UserExperienceAndDesign from "../services/user_exp_design";
import VersionApp from "../whoWeAre/version_app";

import Header from "../components/header";
import MVP from "./mvp";
import ProductIdeation from "./product_ideation";
import StartUp from "./startups2";
import UIUXDesign from "./ui_ux_design";
import { useState, useEffect } from "react";
import Loading from "@/app/loading";
import WaitingComponent from "./we_have_been_waiting";
import { createClient } from "contentful";

export default function MvpIndex({
  content,
  displayContent,
  addressContent,
  versionAppContent,
  productIdeationContent,
  mvpContent,
  uiuxdesignContent,
}: any) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetchData();
    setLoading(true);
    setLoading(false);
    console.log("------------");
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header darkLogo={true} pageName={"Startups"} />
          {displayContent.map((data: any, index: number) => (
            <StartUp
              title={data.fields.title}
              description={data.fields.homeScreenImageContent}
              backgroundImage={data.fields.backgroundImage.fields.file.url}
            />
          ))}
{productIdeationContent.map(()=>(

<ProductIdeation productIdeationContent={productIdeationContent} />
))}
{uiuxdesignContent.map(()=>(
  <UIUXDesign uiuxdesignContent={uiuxdesignContent} />
))}
{mvpContent.map(()=>(
  <MVP mvpContent={mvpContent}/>
))}
          
         
          <WaitingComponent />
          {versionAppContent.map((data: any, index: number) => (
            <VersionApp
              heading={data?.fields?.heading}
              versionAppContent={data.fields.content}
            />
          ))}
          {content.map((data: any, index: number) => (
            <OurClients content={data?.fields?.appContent} />
          ))}
          {addressContent.map((data: any, index: number) => (
            <Footer
              contact={data.fields.phone}
              inAddress1={data.fields.indianAddress}
              inAddress2={data.fields.indianAddress2}
              mailId={data.fields.mail}
              usAddress1={data.fields.usAddress}
              usAddress2={data.fields.indianAddress2}
            />
          ))}
        </div>
      )}
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: "cy16bo6v0525",
    accessToken: "Yh0Z1HcEaVy1g0pCx-q1OyGSQJpOe3JuMvrxFkPLX0w",
  });

  const res = await client.getEntries({
    content_type: "appVersionComponent",
  });

  const response = await client.getEntries({
    content_type: "homeScreenDisplay",
    "fields.title": "For Startups",
  });

  const contactDetailsResponse = await client.getEntries({
    content_type: "contactAddressContent",
  });
  const versionAppResponse = await client.getEntries({
    content_type: "versionAppComponent",
  });

  const productIdeationResponse = await client.getEntries({
    content_type: "pageContent",
    "fields.heading":'Product Ideation',
  });

  const mvpResponse = await client.getEntries({
    content_type: "pageContent",
    "fields.heading":' MVP',
  });


  const uiuxdesignResponse = await client.getEntries({
    content_type: "pageContent",
    "fields.heading":'UX/UI design',
  });

  return {
    props: {
      content: res.items,
      displayContent: response.items,
      addressContent: contactDetailsResponse.items,
      versionAppContent: versionAppResponse.items,
      productIdeationContent: productIdeationResponse.items,
      mvpContent: mvpResponse.items,
      uiuxdesignContent: uiuxdesignResponse.items,
    },
  };
}

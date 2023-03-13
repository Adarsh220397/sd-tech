import Image from "next/image";
import styles from "../../app/page.module.css";
import DigitalExpStrategy from "./digital_exp_strategy";
import Footer from "../components/footer";
import OurClients from "../components/our_clients";
import Services from "./services2";
import UserExperienceAndDesign from "./user_exp_design";
import WebMobileApplicationDev from "./web_mob_app_dev";
import Header from "../components/header";
import { useState, useEffect } from "react";
import Loading from "../../app/loading";
import { createClient } from "contentful";


export default function ServiceMainIndex({ content, displayContent ,addressContent,userExpPageContent,webAppDetailsContent,digitalExpContent}: any) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetchData();
    setLoading(true);
    setLoading(false);
    console.log("------------");
  }, []);

  console.log(digitalExpContent);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div>
            <Header darkLogo={false} pageName={"Services"} />
        
            {displayContent.map((data: any, index: number) => (
         
              <Services title={data?.fields?.title}description={data?.fields?.homeScreenImageContent } backgroundImage={data?.fields?.backgroundImage.fields.file.url}/>
            ))}
           
           {userExpPageContent.map((data: any, index: number) => (
         
         <DigitalExpStrategy heading={data.fields.heading}description ={data.fields.description} contentList={data.fields.contentList} image={data.fields.image.fields.file.url}  />
       ))}
      
      {webAppDetailsContent.map((data: any, index: number) => (
         
         <WebMobileApplicationDev heading={data.fields.heading}description ={data.fields.description} contentList={data.fields.contentList} image={data.fields.image.fields.file.url}/>
       ))}
         {digitalExpContent.map((data: any, index: number) => (
      <UserExperienceAndDesign heading={data.fields.heading}description ={data.fields.description} contentList={data.fields.contentList} image={data.fields.image.fields.file.url}/>
       ))}
         
            
            {content.map((data: any, index: number) => (
             
              <OurClients content={data?.fields?.appContent} />
            ))}

{addressContent.map((data:any,index:number)=>(
                             <Footer contact={data.fields.phone} inAddress1={data.fields.indianAddress}inAddress2={data.fields.indianAddress2}mailId={data.fields.eMail}usAddress1={data.fields.usAddress}usAddress2={data.fields.indianAddress2}/>
                        ))}
          </div>
        </>
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
    "fields.title": "Services",
  });

  const contactDetailsResponse = await client.getEntries({
    content_type: 'contactAddressContent', 
  
  });

  const userExpDetailsResponse = await client.getEntries({
    content_type: 'pageContent', 
    "fields.heading": "User Experience and Design",
  
  });
  const webAppResponse = await client.getEntries({
    content_type: 'pageContent', 
    "fields.heading": "Web & Mobile Application Development",
  
  });
  const digitalExpResponse = await client.getEntries({
    content_type: 'pageContent', 
    "fields.heading": "Digital Experience Strategy",
  
  });
  return {
    props: {
      content: res.items,
      displayContent: response.items,
      addressContent: contactDetailsResponse.items,
      userExpPageContent : userExpDetailsResponse.items,
      webAppDetailsContent:webAppResponse.items,
      digitalExpContent:digitalExpResponse.items,
    },
  };
}

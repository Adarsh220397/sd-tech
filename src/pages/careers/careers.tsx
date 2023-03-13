import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import OurClients from "../components/our_clients";
import UserExperienceAndDesign from "../services/user_exp_design";
import VersionApp from "../whoWeAre/version_app";

import Header from "../components/header";
import Careers from "./careers2";
import CurrentOpennings from "./current_opennings";
import { useState, useEffect } from "react";
import Loading from "@/app/loading";
import { createClient } from "contentful";

export default function CareersIndex({content,displayContent,addressContent}:any) {
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
        <>
          <div>
            <Header darkLogo={true} pageName={"Career"} />
            {
              displayContent.map((data:any,index:number)=> (
                <Careers title={data.fields.title} description={data.fields.homeScreenImageContent} backgroundImage={data.fields.backgroundImage.fields.file.url} />
              ))
            }
       
            <CurrentOpennings />
            {content.map((data:any, index: number)=>(
      
      <OurClients  content={data?.fields?.appContent}/>
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
export async function getStaticProps(){

  const client = createClient({
    space:  'cy16bo6v0525',
    accessToken: 'Yh0Z1HcEaVy1g0pCx-q1OyGSQJpOe3JuMvrxFkPLX0w',
  })
  
  const res = await client.getEntries({
  content_type :'appVersionComponent'
  })

  const response = await client.getEntries({
    content_type: "homeScreenDisplay", 
    "fields.title": "Come work with us!",
  });
  const contactDetailsResponse = await client.getEntries({
    content_type :'contactAddressContent'
    })
  
  
  return {
    props:{
      content:res.items,
displayContent:response.items,
addressContent: contactDetailsResponse.items,
    }
  }
  }

import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import OurClients from "../components/our_clients";
import UserExperienceAndDesign from "../services/user_exp_design";

import Header from "../components/header";
import WhoWeAreContent from "./content";
import VersionApp from "./version_app";
import WhoWeAre from "./who_we_are2";
import { useState, useEffect } from "react";
import Loading from "@/app/loading";
import { createClient } from "contentful";

export default function WhoWeAreMainIndex({content,displayContent,addressContent,whoWeAreContent, versionAppContent}:any) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setLoading(false);
    console.log("------------");
  }, []);

  console.log(whoWeAreContent)
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header darkLogo={true} pageName={"WhoWeAre"} />
          {displayContent.map((data:any,index:number)=>(
 <WhoWeAre  title={data?.fields?.title}backgroundImage={data?.fields?.backgroundImage.fields.file.url}/>
          ))}
         {
          whoWeAreContent.map((data:any,index:number)=> (
            <WhoWeAreContent content1={data.fields.content} content2 = {data.fields.content2} image1={data.fields.image1.fields.file.url} image2={data.fields.image2.fields.file.url} image3={data.fields.image3.fields.file.url} />
          ))
         }
                  {versionAppContent.map((data:any, index: number)=>(
    <VersionApp heading={data?.fields?.heading} versionAppContent= {data.fields.content} />
  ))}
       
         
          {content.map((data:any, index: number)=>(
      <OurClients  content={data?.fields?.appContent}/>
  ))}
 {addressContent.map((data:any,index:number)=>(
                             <Footer contact={data.fields.phone} inAddress1={data.fields.indianAddress}inAddress2={data.fields.indianAddress2}mailId={data.fields.eMail}usAddress1={data.fields.usAddress}usAddress2={data.fields.indianAddress2}/>
                        ))}
        </div>
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
    "fields.title": "Who We Are",
  });
  const contactDetailsResponse = await client.getEntries({
    content_type :'contactAddressContent'
    })
  
    const whoWeAreContentResponse = await client.getEntries({
      content_type :'whoWeAreContent'
      })
      const versionAppResponse = await client.getEntries({
        content_type :'versionAppComponent'
        })
    
     
  return {
    props:{
      content:res.items,
      displayContent:response.items,
      addressContent: contactDetailsResponse.items,
whoWeAreContent:whoWeAreContentResponse.items,
versionAppContent : versionAppResponse.items,
    }
  }
  }
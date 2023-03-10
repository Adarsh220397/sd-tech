"use client";

import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import OurClients from "../components/our_clients";
import UserExperienceAndDesign from "../services/user_exp_design";
// import content from '../../pages/utils/contentfulHome';
import Header from "../components/header";

import WhatWeDo from "./what_we_do";
import Main from "./home";
import { useState, useEffect } from "react";
import Loading from "@/app/loading";
import OurWork from "./our_work";
import VersionApp from "../whoWeAre/version_app";
import { createClient } from "contentful";

interface IProps {
  pageContent: string;
}

export default function HomeIndex({pageContent}:IProps) {
  const [loading, setLoading] = useState(true);
  const [listData, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    //  fetchData();
    setLoading(false);
  }, []);
  const fetchData = async () => {
    // setLoading(true);
    // const res = await client.query({
    // })
    // console.log('---res',res);
    // const content = res?.map((p) => {
    //   return p.fields.appContent;
    // })
    // console.log('--getStaticProps--',content);
    // return {
    //   props: {
    //    content: content,
    //   },
    // }
    // const content = res?.map((p) => {
    //   console.log('--getStaticProps---');
    //   return p.fields;
    // })
    // fetch('https://api.github.com/users').then(response=> response.json()).then(data=>{
    //   setData(data);
    //     setLoading(false);
    // })
  };

  // console.log(pageContent);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header darkLogo={false} pageName={"Home"} />
          <Main />
          {/* {listData.map((data:any, index: number)=>(
          <p key={index}>
            {data?.login?.toString()}
          </p>
        ))}  */}
          <WhatWeDo />
          {/* <VersionApp  /> */}
          {/* {content.map((data:any, index: number)=>(
      <OurClients  content={data?.fields?.appContent}/>
  ))} */}

<OurClients  content={pageContent}/>
          {/* <Footer /> */}
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
  
  return {
    props:{
      content:res.items
    }
  }
  }
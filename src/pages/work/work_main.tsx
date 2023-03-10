import Footer from "../components/footer";
import OurClients from "../components/our_clients";
import Header from "../components/header";
import ContentImagesOne from "./content";
import Work from "./work_main2";
import { useState, useEffect } from "react";
import Loading from "@/app/loading";
import { createClient } from "contentful";

export default function WorkMainIndex({
  content,
  displayContent,
  addressContent,
  eCommerceContent,
  digiStrategyContent,
  finseverContent,
  hrSolutionContent,
  hrMarketPlaceContent,
  financeContent,
}: any) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetchData();
    setLoading(true);
    setLoading(false);
    console.log("------------");
  }, []);
  console.log(displayContent);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header darkLogo={false} pageName={"Work"} />

          {displayContent.map((data: any, index: number) => (
            <Work
              title={data?.fields?.title}
              description={data?.fields?.homeScreenImageContent}
              backgroundImage={data?.fields?.backgroundImage.fields.file.url}
            />
          ))}
  
          <ContentImagesOne  eCommerceContent={eCommerceContent} digiStrategyContent={digiStrategyContent}finseverContent={finseverContent}hrSolutionContent={hrSolutionContent}hrMarketPlaceContent={hrMarketPlaceContent}financeContent={financeContent} />
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
    "fields.title": "Work",
  });
  const eCommerceResponse = await client.getEntries({
    content_type: "pageContent",
    "fields.heading": "eCommerce",
  });
  const digitalStrategyResponse = await client.getEntries({
    content_type: "pageContent",
    "fields.heading": "Digital Strategy",
  });
  const finseverResponse = await client.getEntries({
    content_type: "pageContent",
    "fields.heading": "Finsever",
  });
  const contactDetailsResponse = await client.getEntries({
    content_type: "contactAddressContent",
  });
  const hrSolutionResponse = await client.getEntries({
    content_type: "pageContent",
    "fields.heading": "HR Solutions",
  });
  const hrMarketPlaceResponse = await client.getEntries({
    content_type: "pageContent",
    "fields.heading": "Digital HR Marketplace",
  });

  const financeResponse = await client.getEntries({
    content_type: "pageContent",
    "fields.heading": "Finance",
  });
  return {
    props: {
      content: res.items,
      displayContent: response.items,
      addressContent: contactDetailsResponse.items,
      eCommerceContent: eCommerceResponse.items,
      digiStrategyContent: digitalStrategyResponse.items,
      finseverContent: finseverResponse.items,
      hrSolutionContent: hrSolutionResponse.items,
      hrMarketPlaceContent: hrMarketPlaceResponse.items,
      financeContent: financeResponse.items,
    },
  };
}

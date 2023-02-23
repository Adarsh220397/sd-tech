import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import logo from './homeBackground.jpg';
const inter = Inter({ subsets: ['latin'] })
import PageTwo from '../pages/blogs/pageTwo';
import OurWork from '@/pages/blogs/ourWork';
export default function Home() {
  return (  
    <main className={styles.main}>
  
      <div className={styles.bgImage}>




  
<div  style={{
  textAlign:'start',
  maxWidth:'100%',
flexDirection:'column',

  
}}>

  <div style={{
  textAlign:'start',
  maxWidth:'50%',
flexDirection:'row',

  
}}>
       <a 
         href="https://studiodiseno.com"
         target="_blank"
         rel="noopener noreferrer"
       >
    
         <Image
           src="https://studiodiseno.com/images/logoWhite.svg"
           alt="Vercel Logo"
           className={styles.vercelLogo}
           width={50}
           height={50}
           priority
         />
       </a>
    
       </div>  
<div  style={{
  textAlign:'end',
  maxWidth:'50%',
flexDirection:'row',

  
}}>

<Image 
           src="https://studiodiseno.com/images/hamburger.svg"
           alt="Vercel Logo"
           className={styles.vercelLogo}
           width={50}
           height={50}
           priority
         />
        
        </div>
     
        </div> 
  
    
   
 
   

      <div className={styles.homeHeaderContentInner}>
       <h1>
         WE DONT'T JUST DESIGN
         <br>
         </br>
         "WE DONT'T JUST DESIGN"
       </h1>
        {/* <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div> */}
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
        <Link
          href="/blogs/sample"
          className={styles.card}
          // target="_blank"
          rel=""
        >
          
          <h2 className={inter.className}>
            Next Page <span>-&gt;</span>
          </h2>
        
        </Link>
      </div>
      </div>

      <div className={styles.bgImage}>


<div className={styles.description}>

  <div>
    <a
      href="https://studiodiseno.com"
      target="_blank"
      rel="noopener noreferrer"
    >
 
      <Image
        src="https://studiodiseno.com/images/logoWhite.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={50}
        height={50}
        priority
      />
    </a>
  </div>
  <div>
 
 <a  href="https://studiodiseno.com"
      target="_blank"
      rel="noopener noreferrer">

<Image
        src="https://studiodiseno.com/images/hamburger.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={50}
        height={50}
        priority
      />
      </a>
 
   
  </div>
  
</div>

<div className={styles.homeHeaderContentInner}>
 <h1>
   WE DONT'T JUST DESIGN
   <br>
   </br>
   "WE DONT'T JUST DESIGN"
 </h1>
  {/* <div className={styles.thirteen}>
    <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
  </div> */}
</div>

<div className={styles.grid}>
  <a
    href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className={inter.className}>
      Docs <span>-&gt;</span>
    </h2>
    <p className={inter.className}>
      Find in-depth information about Next.js features and API.
    </p>
  </a>

  <a
    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className={inter.className}>
      Templates <span>-&gt;</span>
    </h2>
    <p className={inter.className}>Explore the Next.js 13 playground.</p>
  </a>

  <a
    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className={inter.className}>
      Deploy <span>-&gt;</span>
    </h2>
    <p className={inter.className}>
      Instantly deploy your Next.js site to a shareable URL with Vercel.
    </p>
  </a>
  <Link
    href="/blogs/sample"
    className={styles.card}
    // target="_blank"
    rel=""
  >
    
    <h2 className={inter.className}>
      Next Page <span>-&gt;</span>
    </h2>
  
  </Link>
</div>
</div>

<PageTwo/>
<OurWork/>
    </main>
  )
}


   

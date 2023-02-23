import Image from 'next/image'
import { Inter } from '@next/font/google'

import styles from '../../app/page.module.css';
const inter = Inter({ subsets: ['latin'] })

export default function Sample() {
    return (
      <>
      <main  className={styles.main}>
        <title>Samples</title>
        <h1 style={{
             fontSize:60,
           
        }}>
          What we do  
        </h1>
      <p > This is a new page</p>

      
<h2>Tabs</h2>
<p>Click on the buttons inside the tabbed menu:</p>

<div className="tab">
  <button className="tablinks" >London</button>
  <button className="tablinks" >Paris</button>
</div>

<div id="London" className="tabcontent">
  <h3>London</h3>
  <p>London is the capital city of England.</p>
</div>

<div id="Paris" className="tabcontent">
  <h3>Paris</h3>
  <p>Paris is the capital of France.</p> 
</div>



      </main>
      </>
    )
  }
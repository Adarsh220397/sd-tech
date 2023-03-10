const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
import { createClient } from 'contentful';
export async function getStaticProps(){
 client = createClient({
  space:  space,
  accessToken: accessToken,
})

const res = await client.getEntries({
content_type :'appVersionComponent'
})

return {
  prop:{
    content:res.items
  }
}
}
// export async function fetchEntries() {
//   //   console.log('---------fetchEntries--------')
//   // const entries = await client.getEntries()
//   // if (entries.items) return entries.items
//   // console.log(`Error getting Entries for ${contentType.name}.`)
// }

// export default { fetchEntries }


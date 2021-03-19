import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from 'swr';
import Link from 'next/link';
import Image from "next/image"

function Home({}) {

  const { data, error } = useSWR('/api/people', (url) => 
    fetch(url).then(res => res.json())
  );

  // if(error) return <div>Error</div>
  if(!data || data === []) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
        <Image width="890px" height="560px" src="/pc.jpg" />
        {/* <img width="890px" height="560px" src="/pc.jpg" /> */}
      </div>
      <h1 className={styles.reactdojo}>React Dojo Practice</h1>

      <ul>
        {data.map(person => (
          <li key={person.id}>
            <Link href={`/person/${person.id}`}>
              <a>{person.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:3000/api/people')
//   const data = await res.json()

//   if (!data) {
//     return {
//       props: { data: null }
//     }
//   }

//   return {
//     props: { data }, // will be passed to the page component as props
//   }
// }


// export async function getStaticProps() {
//   const res = await fetch('http://localhost:3000/api/people')
//   const data = await res.json()

//   return {
//     props: {
//       data,
//     },
//     // // Next.js will attempt to re-generate the page:
//     // // - When a request comes in
//     // // - At most once every second
//     // revalidate: 1, // In seconds
//   }
// }

export default Home;
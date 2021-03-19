import { useRouter } from 'next/router';
import useSWR from 'swr';

const One = ({ }) => {
  //add `data` for static rendering

  // commen/ this out is using static rendering
  const { query } = useRouter();
  const { data, error } = useSWR(`/api/people/${query.id}`,
    (url) => fetch(url).then(res => res.json()))

  console.log('data', data);

  if(!data) return <div>Loading....</div>
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair color</th>
          <th>Skin color</th>
          <th>Eye color</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.height}</td>
          <td>{data.mass}</td>
          <td>{data.hair_color}</td>
          <td>{data.skin_color}</td>
          <td>{data.eye_color}</td>
          <td>{data.gender}</td>
        </tr>
      </tbody>
    </table>
  )
}

// export async function getStaticPaths() {
//   const res = await fetch('http://localhost:3000/api/people')
//   const people = await res.json()

//   const paths = people.map(person => ({
//     params: { id: person.id },
//   }))

//   console.log('paths', paths);
//   return {
//     paths, fallback: false //must be false for getStaticPaths
//   };
// }

// export async function getStaticProps({ params }) {

//   const res = await fetch(`http://localhost:3000/api/people/${params.id}`)
//   const data = await res.json()
//   // By returning { props: data }, the Onw component
//   // will receive `data` as a prop at build time
//   return {
//     props: {
//       data,
//     },
//   }
// }

export default One
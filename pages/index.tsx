import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  const data = ['00', '01', '02', '03', '04', '05']
  return (
    <ul>
      {data.map((id) => (
        <li key={id}>
          <Link href="/reflectance/[id]" as={`/reflectance/${id}`}>
            {`Reflectance File: ${id}`}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Home

import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  const data = Array.from(Array(20).keys()).map((index) =>
    index < 10 ? `0${index}` : `${index}`
  )
  return (
    <div className="grid grid-cols-6 gap-6 justify-items-center mt-10">
      {data.map(id => (
        <div key={id}>
          <Link href="/reflectance/[id]" as={`/reflectance/${id}`}>
            {`${id}.csv`}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Home

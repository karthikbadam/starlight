import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function UserPage() {
  const router = useRouter()
  const { data, error } = useSwr(
    router.query.id ? `/api/reflectance/?id=${router.query.id}` : null,
    fetcher
  )

  if (error) return <div>Failed to load user</div>
  if (!data ) return <div>Loading...</div>

  return <div>{JSON.stringify(data.slice(0, 10))}</div>
}
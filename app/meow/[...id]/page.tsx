import { useRouter } from 'next/router'
 
export default function Page({ params }: { params: { id: string } }) {
  return <div>My Post: {params.id}</div>
}
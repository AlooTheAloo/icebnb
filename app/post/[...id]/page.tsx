import { useRouter } from 'next/router'
import { getPostByID } from '../../../lib/db/posts'
import { notFound } from 'next/navigation';
 

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPostByID(params.id);
  
  if(post == undefined) notFound();

  return <div>My Post: {post.Name }</div>
}
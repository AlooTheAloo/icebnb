import { getPostByID } from '../../../lib/db/posts'
import { notFound } from 'next/navigation';
import BnbButton from '../../components/global/BnbButton';
import TopOptions from '../../components/global/TopOptions';
import ReturnButton from '../../components/Post/ReturnButton';
import toast, { Toaster } from "react-hot-toast";
import { isLoggedIn } from '../../global/authmanager';
import PostInteractButton from '../../components/Post/PostInteractButton';
export const revalidate = 0;
export const dynamic = 'force-dynamic'

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPostByID(params.id);
  
  if(post == undefined) notFound();

  return <div className='bg-black w-full h-full min-h-screen'>
    <Toaster/>
    <TopOptions/>
    
    <div className='pt-24 sm:pt-0 flex justify-center items-center w-full h-full min-h-screen'>
      <div className='w-[80vw] h-[80vh] flex flex-col  justify-center gap-2'>
        <div className='text-6xl font-bold'>
          <h1 className=''>
            { post.Name }
          </h1>
        </div>
        <div className='border-[#727272] border-2 w-full flex-grow max-h-[80%] rounded-md bg flex sm:flex-row flex-col-reverse items-center'>
          <div className='w-full sm:w-2/3 flex-grow flex flex-col'>
            <div className='flex-grow'>
              <p className="text-2xl p-5">
                { post.Price }$ • { post.ItemState }              
              </p>
              <p className='pl-5'>
                { post.Description }
              </p>
            </div>
            <PostInteractButton postID={post.id}/>
          </div>
          <div className='sm:w-1/3 w-full max-w-[20rem] p-5 sm:p-0 sm:pr-10 flex items-center justify-center'>
            <img src={ post.ImageURL } className='opacity-100 rounded-xl border-[#131313] border-2'/>
          </div>
        </div>
        <ReturnButton/>

      </div>
    </div>
    
    
  </div>
}
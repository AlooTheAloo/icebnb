import { getPostByID } from '../../../lib/db/posts'
import { notFound } from 'next/navigation';
import BnbButton from '../../components/global/BnbButton';
import TopOptions from '../../components/global/TopOptions';
 

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPostByID(params.id);
  
  if(post == undefined) notFound();

  return <div className='bg-black w-full h-full min-h-screen'>
    <div className='bg-red-300 w-full h-full'>
      <h1>
        HEEE
      </h1>
      <TopOptions/>
    </div>
    
    <div className='flex justify-center items-center w-full h-full min-h-screen'>
      <div className='w-[80vw] h-[80vh] flex flex-col  justify-center gap-2'>
        <div className='text-6xl font-bold'>
          <h1 className=''>
            { post.Name }
          </h1>
        </div>
        <div className='border-[#727272] border-2 w-full flex-grow max-h-[80%] rounded-md bg flex'>
          <div className='w-2/3 flex-grow flex flex-col'>
            <div className='flex-grow'>
              <p className="text-2xl p-5">
                { post.Price }$ • { post.ItemState }              
              </p>
              <p className='pl-5'>
                { post.Description }
              </p>
            </div>
            <div className='h-20 p-5 flex'>
              <BnbButton primary={true} text='Contacter le vendeur' />
            </div>
          </div>
          <div className='w-1/3 pr-10 flex items-center justify-center'>
            <img src={ post.ImageURL } className='opacity-100 rounded-xl border-[#131313] border-2'/>
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
}
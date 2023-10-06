import { useRouter } from 'next/navigation';
import { getPosts } from '../lib/db/posts';
import HomePageHeader from './components/HomePage/HomePageHeader';
import TopOptions from './components/global/TopOptions';
import { useState } from "react";

async function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const posts = await getPosts(1)
  
  return (
    <div className='min-h-screen h-full w-screen bg'>
        <TopOptions/>

      <div className='flex justify-between'>
        <HomePageHeader/>
      </div>

      { 
        posts?.items.map((x, i) => { 
          return <div id={`${i}`}>
              {x.Description}
            </div>
        })
      }
    </div>
  )
}

export default Home;

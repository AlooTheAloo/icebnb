import { Post, getPageCount, getPosts } from '../lib/db/posts';
import HomePageHeader from './components/HomePage/HomePageHeader';
import TopOptions from './components/global/TopOptions';
import PostList from './components/PostList/PostList';
import PostListNavigation from './components/PostList/PostListNavigation';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  let posts:Post[]|undefined;
  const page = searchParams?.page;
  const pageCount = await getPageCount();
  let currentPage = 0;
  if(page != undefined && typeof(page) == "string"){ currentPage = (parseInt(page)) }
  else currentPage = 1

  posts = (await getPosts(currentPage))?.items; 

  if(posts == undefined) posts = [];
  
  return (
    <div className='min-h-screen h-full w-screen bg'>
      <TopOptions/>

      <div className='flex justify-between'>
        <HomePageHeader/>
      </div>
      <PostListNavigation totalPages={pageCount} currentPage={currentPage} />
      <PostList posts={posts} />
    </div>
  )
}

export default Home;

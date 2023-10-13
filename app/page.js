/* eslint-disable @next/next/no-img-element */
import TopLead from './components/global/1st/top-lead';
import TopRules from './components/global/1st/top-rules';
import BlogList from './components/global/1st/bloglist';

import bloglistGenerator from './functions/bloglist-generator';

export default async function Blogs() {

  const dir = '/1st';
  // 該当のディレクトリ内に有るmdを検索して返す
  const posts = await bloglistGenerator('content' + dir);

  return (
    <>
      <div className='w-full'>
        <img src="/images/dummy.jpg" width="1920" height="1080" alt="スーパマンタローカップ" />
      </div>
      <div className="">
        <TopLead />
        <TopRules />
        <div className=' bg-ikyellow-300 dark:bg-ikpurple-700'>
          <section className='py-24 sm:py-32 w-11/12 max-w-5xl mx-auto'>
            <h2 className='text-center text-3xl font-bold text-ikpurple-700 dark:text-ikyellow-300 mb-7'>最新情報</h2>
            <div className="flex-1 border-t border-b border-gray-500 dark:border-gray-200 py-10 px-5 flex flex-col gap-5 mt-8 md:mt-0">
              {posts.map((post) => {
                return (
                  <BlogList post={post} directory={dir} cat="true" limit="5" key="post.title" />
                )
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
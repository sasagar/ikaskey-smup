/* eslint-disable @next/next/no-img-element */
import bloglistGenerator from '@/app/functions/bloglist-generator';
import BlogList from '@/app/components/global/1st/bloglist';
import TowerControlLogo from '@/app/components/global/1st/images/towercontrol-logo';

const TowerControlBlogs = async function () {
    const dir = '/1st/towercontrol';
    // 該当のディレクトリ内に有るmdを検索して返す
    const posts = await bloglistGenerator('content' + dir);

    return (
        <>
            <div className='w-full'>
                <img src="/images/1st/smup-yagura.png" width="1920" height="1080" alt="スーパマンタローカップ ルール ガチヤグラ" />
            </div>

            <div className="py-12 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="md:flex gap-10 justify-between">
                        <h2 className="text-ikpurple-700 dark:text-ikyellow-200 text-3xl font-bold tracking-tight sm:text-4xl"><TowerControlLogo className=" w-60" /></h2>
                        <div className="flex-1 border-t border-b border-gray-200 py-10 px-5 flex flex-col gap-5 mt-8 md:mt-0">
                            {posts.map((post) => {
                                return (
                                    <BlogList post={post} directory={dir} key="post.title" />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TowerControlBlogs;
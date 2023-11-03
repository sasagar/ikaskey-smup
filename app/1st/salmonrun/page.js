/* eslint-disable @next/next/no-img-element */
import bloglistGenerator from '@/app/functions/bloglist-generator';
import BlogList from '@/app/components/global/1st/bloglist';
import SalmonRunLogo from '@/app/components/global/1st/images/salmonrun-logo';

import "./content.css"

const SalmonRunBlogs = async function () {
    const dir = '/1st/salmonrun';
    // 該当のディレクトリ内に有るmdを検索して返す
    const posts = await bloglistGenerator('content' + dir);

    return (
        <>
            <div className='w-full'>
                <img src="/images/1st/smup-salmon.png" width="1920" height="1080" alt="スーパマンタローカップ ルール シャケシバキ" />
            </div>

            <div className="bg-ikyellow-300 dark:bg-ikpurple-700">
                <section className="block py-24 sm:py-32 w-11/12 max-w-2xl mx-auto">
                    <h2 className="text-center text-3xl text-ikpurple-900 dark:text-ikyellow-100 font-bold italic tracking-wide mb-6">
                        <span className="inline-block">新しいジブン、</span>
                        <span className="inline-block">きっとミツカル？</span><br />
                        <span className="inline-block">全ての</span>
                        <span className="inline-block">イカタコ</span>
                        <span className="inline-block">お越しやす！</span>
                    </h2>
                    <p className="dark:text-ikpurple-100 text-center">
                        <span className="highlight text-ikblue-950 dark:text-white">ルール シャケシバキ</span>は多くの人に参加してもらえるチャンスのある複数日時開催！<br />
                        自分に合った日程で、ボーナスポイントを稼いで<span className="highlight text-ikblue-950 dark:text-white">クマサン賞とスーパーマンタロー賞を狙え！</span>
                    </p>

                    <div className='date'>
                        <h3>開催日時</h3>
                        <p>
                            <strong>2023/12/14 (木)</strong>
                        </p>
                        <ul>
                            <li>昼の部　13:00～14:00</li>
                            <li>夜の部　20:00～21:00</li>
                        </ul>
                        <p>
                            <strong>2023/12/16 (土)</strong>
                        </p>

                        <ul>
                            <li>夕の部　18:00～19:00</li>
                            <li>夜の部　22:00～23:00</li>
                        </ul>
                    </div>
                </section>
            </div>

            <div className="py-12 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="md:flex gap-10 justify-between">
                        <h2 className="text-ikpurple-700 dark:text-ikyellow-200 text-3xl font-bold tracking-tight sm:text-4xl"><SalmonRunLogo className=" w-60" /></h2>
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

export default SalmonRunBlogs;
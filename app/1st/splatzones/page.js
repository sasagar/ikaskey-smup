/* eslint-disable @next/next/no-img-element */
import bloglistGenerator from '@/app/functions/bloglist-generator';
import BlogList from '@/app/components/global/1st/bloglist';
import SplatZonesLogo from '@/app/components/global/1st/images/splatzones-logo';

import "./content.css";

const SplatZonesBlogs = async function () {
    const dir = '/1st/splatzones';
    // 該当のディレクトリ内に有るmdを検索して返す
    const posts = await bloglistGenerator('content' + dir);

    return (
        <>
            <div className='w-full'>
                <img src="/images/1st/smup-area.png" width="1920" height="1080" alt="スーパマンタローカップ ルール ガチエリア" />
            </div>

            <div className="bg-ikyellow-300 dark:bg-ikpurple-700">
                <section className="block py-24 sm:py-32 w-11/12 max-w-2xl mx-auto">
                    <h2 className="text-center text-3xl text-ikpurple-900 dark:text-ikyellow-100 font-bold italic tracking-wide mb-6">
                        <span className="inline-block">エリアを</span>
                        <span className="inline-block">ぬりたく〜れ！</span><br />
                        <span className="inline-block">ルーレットに</span>
                        <span className="inline-block">ヒメられた</span>
                        <span className="inline-block">チャンス！</span>
                    </h2>
                    <p className="dark:text-ikpurple-100 text-center">
                        <span className="highlight text-ikblue-950 dark:text-white">ルール ガチエリア</span>はお揃いボーナスも狙える？！<br />
                        人数に差があっても倍率で勝てるかも？！ <span className="highlight text-ikblue-950 dark:text-white">エリアをしっかり守り切れ！</span>
                    </p>

                    <div className='date'>
                        <h3>開催日時</h3>
                        <p>
                            <strong>12/2 15:00</strong> スタート！<br />
                            （ルール ガチアサリと交互進行）
                        </p>
                    </div>
                </section>
            </div>

            <div className="py-12 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="md:flex gap-10 justify-between">
                        <h2 className="text-ikpurple-700 dark:text-ikyellow-200 text-3xl font-bold tracking-tight sm:text-4xl"><SplatZonesLogo className=" w-60" /></h2>
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

export default SplatZonesBlogs;
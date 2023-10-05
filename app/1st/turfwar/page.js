import bloglistGenerator from '@/app/functions/bloglist-generator';
import BlogList from '@/app/components/global/1st/bloglist';
import TurfWarLogo from '@/app/components/global/1st/images/turfwar-logo';

export default async function TurfwarBlogs() {
    const dir = '/1st/turfwar';
    // 該当のディレクトリ内に有るmdを検索して返す
    const posts = await bloglistGenerator('content' + dir);

    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="md:flex gap-10 justify-between">
                    <h2 className="text-ikpurple-700 dark:text-ikyellow-200 text-3xl font-bold tracking-tight sm:text-4xl"><TurfWarLogo className=" w-60" /></h2>
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
    );
}
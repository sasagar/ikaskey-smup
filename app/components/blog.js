import Link from 'next/link';

const Blogs = () => {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h2>
                <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                    {posts.map((post) => (
                        <article
                            key={post.slug}
                            className="flex max-w-xl flex-col items-start justify-between"
                        >
                            <div className="group relative">
                                {/* 日付を表示 */}
                                <div className="flex items-center gap-x-4 text-xs">
                                    <div className="text-gray-500">{post.frontmatter.date}</div>
                                </div>
                                {/* 記事タイトル・リンク */}
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-blue-700 group-hover:text-blue-400">
                                    <Link
                                        href={`/${post.slug}`}
                                        className="mt-3 text-lg font-semibold leading-6 text-blue-700 group-hover:text-blue-400"
                                    >
                                        {post.frontmatter.title}
                                    </Link>
                                </h3>
                                {/* 記事説明文を表示 */}
                                <p
                                    className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"
                                    dangerouslySetInnerHTML={{ __html: `${post.frontmatter.description}` }}
                                ></p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blogs;
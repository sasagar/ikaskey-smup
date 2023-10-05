import Link from "next/link";

const BlogList = ({ post, directory }) => {
    return (
        <article
            key={post.slug}
            className="flex flex-col items-start justify-between p-4 border border-ikyellow-500 dark:border-ikblue-950 bg-ikyellow-100 dark:bg-ikblue-700 rounded-md w-full"
        >
            <div className="group relative">
                {/* 日付を表示 */}
                <div className="flex items-center gap-x-4 text-xs">
                    <div className="text-gray-500 dark:text-ikblue-300">{post.frontmatter.date}</div>
                </div>
                {/* 記事タイトル・リンク */}
                <h3 className="mt-1 text-lg leading-6">
                    <Link
                        href={`${directory}/${post.slug}`}
                        className="text-lg font-semibold leading-6 text-ikblue-700 dark:text-ikyellow-400 group-hover:text-ikblue-400 dark:group-hover:text-ikyellow-200"
                    >
                        {post.frontmatter.title}
                    </Link>
                </h3>
                {/* 記事説明文を表示 */}
                <p
                    className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-ikblue-200"
                    dangerouslySetInnerHTML={{ __html: `${post.frontmatter.description}` }}
                ></p>
            </div>
        </article>
    )
}

export default BlogList;
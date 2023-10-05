import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

export default async function Blogs() {
  // contentディレクトリ内のマークダウンファイル一覧を取得
  const postsDirectory = path.join(process.cwd(), 'content');
  // const fileNames = fs.readdirSync(postsDirectory);

  const FileType = {
    File: 'file',
    Directory: 'directory',
    Unknown: 'unknown'
  }

  const getFileType = fpath => {
    try {
      const stat = fs.statSync(fpath);

      switch (true) {
        case stat.isFile():
          return FileType.File;

        case stat.isDirectory():
          return FileType.Directory;

        default:
          return FileType.Unknown;
      }

    } catch (e) {
      return FileType.Unknown;
    }
  }

  const getFileNames = dirPath => {
    const ret = [];
    const paths = fs.readdirSync(dirPath);

    paths.forEach(a => {
      const filepath = `${dirPath}/${a}`;

      switch (getFileType(filepath)) {
        case FileType.File:
          const retPath = path.relative(postsDirectory, filepath);
          ret.push(retPath);
          break;

        case FileType.Directory:
          ret.push(...getFileNames(filepath));
          break;

        default:
        /* noop */
      }
    })

    return ret;
  };
  const fileNames = getFileNames(postsDirectory);

  // 各ファイルの中身を取得
  const posts = await Promise.all(
    // 各ファイル情報を取得
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      // slugとfrontmatter(title, date, description)を取得
      return {
        slug: fileName.replace('.md', ''),
        frontmatter: data,
      };
    })
  ).then((posts) =>
    // 最新日付順に並び替え
    posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
  );

  return (
    <>
      <div className='w-full'>
        <img src="/images/dummy.jpg" width="1920" height="1080" alt="スーパマンタローカップ" />
      </div>
      <div className="py-24 sm:py-32">
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
      </div>
    </>
  );
}
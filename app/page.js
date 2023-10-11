/* eslint-disable @next/next/no-img-element */
// import fs from 'fs';
// import path from 'path';
import TopLead from './components/global/1st/top-lead';
import TopRules from './components/global/1st/top-rules';
import BlogList from './components/global/1st/bloglist';

import bloglistGenerator from './functions/bloglist-generator';

export default async function Blogs() {
  // contentディレクトリ内のマークダウンファイル一覧を取得
  // const postsDirectory = path.join(process.cwd(), 'content');

  // const FileType = {
  //   File: 'file',
  //   Directory: 'directory',
  //   Unknown: 'unknown'
  // }

  // const getFileType = fpath => {
  //   try {
  //     const stat = fs.statSync(fpath);

  //     switch (true) {
  //       case stat.isFile():
  //         return FileType.File;

  //       case stat.isDirectory():
  //         return FileType.Directory;

  //       default:
  //         return FileType.Unknown;
  //     }

  //   } catch (e) {
  //     return FileType.Unknown;
  //   }
  // }

  // const getFileNames = dirPath => {
  //   const ret = [];
  //   const paths = fs.readdirSync(dirPath);

  //   paths.forEach(a => {
  //     const filepath = `${dirPath}/${a}`;

  //     switch (getFileType(filepath)) {
  //       case FileType.File:
  //         const retPath = path.relative(postsDirectory, filepath);
  //         ret.push(retPath);
  //         break;

  //       case FileType.Directory:
  //         ret.push(...getFileNames(filepath));
  //         break;

  //       default:
  //       /* noop */
  //     }
  //   })

  //   return ret;
  // };

  // const fileNames = getFileNames(postsDirectory);

  // 各ファイルの中身を取得
  // const posts = await Promise.all(
  //   // 各ファイル情報を取得
  //   fileNames.map(async (fileName) => {
  //     const filePath = path.join(postsDirectory, fileName);
  //     const fileContents = fs.readFileSync(filePath, 'utf8');
  //     const { data } = matter(fileContents);

  //     // slugとfrontmatter(title, date, description)を取得
  //     return {
  //       slug: fileName.replace('.md', ''),
  //       frontmatter: data,
  //     };
  //   })
  // ).then((posts) =>
  //   // 最新日付順に並び替え
  //   posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
  // );

  const dir = '/1st';
  // 該当のディレクトリ内に有るmdを検索して返す
  const posts = await bloglistGenerator('content' + dir);

  return (
    <>
      <div className='w-full'>
        <img src="/images/dummy.jpg" width="1920" height="1080" alt="スーパマンタローカップ" />
      </div>
      <div className="pb-24 sm:pb-32">
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
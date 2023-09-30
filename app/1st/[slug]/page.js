import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

import './content.css';

const fileDir = 'content/1st';

// export対応
export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), fileDir);
    console.log(postsDirectory)

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

                default:
                /* noop */
            }
        })

        return ret;
    };

    // const postsDirectory = path.join(process.cwd(), fileDir);
    // const fileNames = fs.readdirSync(postsDirectory);
    const fileNames = getFileNames();

    return fileNames.map((file) => ({
        slug: file.replace('.md', '')
    }));
}

// ブログ記事ページ
export default async function BlogPost({ params }) {
    // URLのパラメータから該当するファイル名を取得 (今回は hello-world)
    const { slug } = params;
    const filePath = path.join(process.cwd(), fileDir, `${slug}.md`);

    // ファイルの中身を取得
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const title = data.title; // 記事のタイトル
    const processedContent = await unified().use(remarkParse).use(remarkHtml).process(content);
    const contentHtml = processedContent.toString(); // 記事の本文をHTMLに変換

    return (
        <div className="bg-white px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {title}
                </h1>
                <div
                    className="mt-6"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                ></div>
            </div>
        </div>
    );
}
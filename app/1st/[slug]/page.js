import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

import Image from 'next/image';

import generateParams from '@/app/functions/generate-params';
import './content.css';

const fileDir = 'content/1st';

// export対応
export async function generateStaticParams() {
    return generateParams(fileDir, false);
}

// ブログ記事ページ
export default async function BlogPost({ params }) {
    // URLのパラメータから該当するファイル名を取得 (今回は hello-world)
    const { slug } = params;
    const filePath = path.join(process.cwd(), fileDir, `${slug}.md`);

    // ファイルの中身を取得
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const processedContent = await unified().use(remarkParse).use(remarkGfm).use(remarkHtml).process(content);
    const contentHtml = processedContent.toString(); // 記事の本文をHTMLに変換

    return (
        <div className="bg-ikyellow-200 dark:bg-ikpurple-400 py-12 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="md:flex gap-10 justify-between">
                    <h2 className="text-ikyellow-800 dark:text-ikpurple-100 text-3xl font-bold tracking-tight sm:text-4xl m-0">
                        <img src="/images/1st/smup-kv.png" width="1920" height="1080" alt="スーパマンタローカップ ルール ガチアサリ" className='w-full sm:w-60 mb-4' />
                        <Image src="/images/SMUP-LOGO.svg" width="710" height="325" className="w-60" alt="いかすきー presents スーパーマンタローカップ" />
                    </h2>
                    <div className="flex-1 border-t border-b border-gray-200 py-10 px-5 flex flex-col gap-5 mt-8 md:mt-0">
                        <div>{data.date}</div>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ikpurple-700 dark:text-ikyellow-300 sm:text-4xl">
                            {data.title}
                        </h1>
                        <div
                            className=""
                            dangerouslySetInnerHTML={{ __html: contentHtml }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
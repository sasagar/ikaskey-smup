
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const bloglistGenerator = async (dir, limit) => {
    // 該当のディレクトリ内に有るmdを検索して返す
    const content = dir;
    // contentディレクトリ内のマークダウンファイル一覧を取得
    const postsDirectory = path.join(process.cwd(), content);

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
    ).then((posts) => {
        if (limit) {
            return posts = posts.slice(0, limit - 1);
        } else {
            return posts;
        }
    });
    return await posts;
}

export default bloglistGenerator;
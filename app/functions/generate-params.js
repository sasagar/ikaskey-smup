import fs from 'fs';
import path from 'path';

const generateParams = (fileDir, includeDir = false) => {
    const postsDirectory = path.join(process.cwd(), fileDir);

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
                    if (includeDir) {
                        ret.push(...getFileNames(filepath));
                    }
                    break;

                default:
                /* noop */
            }
        })

        return ret;
    };

    const fileNames = getFileNames(postsDirectory);

    return fileNames.map((file) => ({
        slug: file.replace('.md', '')
    }));
}

export default generateParams;
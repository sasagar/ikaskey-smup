import './globals.css'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import Providers from "./components/providers";


const inter = Inter({ subsets: ['latin'] })
const noto = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata = {
  title: 'いかすきー presents スーパーマンタローカップ',
  description: '分散型SNSいかすきー利用者向けサーバー公式のスプラトゥーン大会のホームページです。',
  openGraph: {
    title: 'いかすきー presents スーパーマンタローカップ',
    description: '分散型SNSいかすきー利用者向けサーバー公式のスプラトゥーン大会のホームページです。',
    url: 'https://ikaskey-smup.bktsk.com/',
    siteName: 'スーパーマンタローカップ',
    images: [
      {
        url: 'https://ikaskey-smup.bktsk.com/images/1st/smup-kv.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'ja-JP',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${noto.className} bg-ikyellow-100 dark:bg-ikblue-900 text-ikyellow-800 dark:text-ikpurple-300`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

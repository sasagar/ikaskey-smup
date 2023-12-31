/* eslint-disable @next/next/no-img-element */
import ClamBlitzLogo from "./images/clamblitz-logo";
import RainmakerLogo from "./images/rainmaker-logo";
import SalmonRunLogo from "./images/salmonrun-logo";
import SplatZonesLogo from "./images/splatzones-logo";
import TowerControlLogo from "./images/towercontrol-logo";
import TurfWarLogo from "./images/turfwar-logo";

const TopRules = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 py-24 sm:py-32 w-11/12 max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-md border border-ikyellow-500 bg-ikyellow-400 dark:border-ikblue-900 dark:bg-ikblue-600">
                <img src="/images/1st/smup-turfwar.png" width="1920" height="1080" alt="ルール ナワバリバトル" />
                <div className="p-5">
                    <h3 className="text-ikblue-700 dark:text-ikyellow-200">
                        <TurfWarLogo className="h-10 w-auto mx-auto max-w-full" />
                    </h3>
                    <h4 className="text-center mt-4 text-base font-extrabold tracking-tight text-ikblue-800 dark:text-white leading-6 mb-4 after:block after:mt-4 after:h-px after:w-10 after:mx-auto after:bg-ikpurple-300">
                        <span className="inline-block">運命信じて！</span>
                        <span className="inline-block">直感信じて！</span>
                        <span className="inline-block">ぴったり目指せ！</span><br />
                        <span className="inline-block">キミならブキを</span>
                        <span className="inline-block">どうイカす？</span>
                    </h4>
                    <p className="text-sm text-ikyellow-800 dark:text-ikblue-200">
                        ルール ナワバリバトルはただ色を塗るだけじゃなく、指定された武器の中で戦うぞ！
                    </p>
                    <div className="mt-3">
                        <a href="/1st/turfwar" className="block w-fit mx-auto px-3 py-2 rounded bg-ikpurple-600 text-ikpurple-100 hover:bg-ikpurple-400 border border-ikpurple-900 dark:bg-ikyellow-400 dark:text-ikyellow-800 dark:hover:bg-ikyellow-500 dark:border-ikyellow-500 transition-all">ルールの詳細を見る！</a>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden rounded-md border border-ikyellow-500 bg-ikyellow-400 dark:border-ikblue-900 dark:bg-ikblue-600">
                <img src="/images/1st/smup-area.png" width="1920" height="1080" alt="ルール ガチエリア" />
                <div className="p-5">
                    <h3 className="text-ikblue-700 dark:text-ikyellow-200">
                        <SplatZonesLogo className="h-10 w-auto mx-auto max-w-full" />
                    </h3>
                    <h4 className="text-center mt-4 text-base font-extrabold tracking-tight text-ikblue-800 dark:text-white leading-6 mb-4 after:block after:mt-4 after:h-px after:w-10 after:mx-auto after:bg-ikpurple-300">
                        <span className="inline-block">エリアを</span>
                        <span className="inline-block">ぬりたく～れ！</span><br />
                        <span className="inline-block">ルーレットに</span>
                        <span className="inline-block">ヒメられた</span>
                        <span className="inline-block">チャンス！</span>
                    </h4>
                    <p className="text-sm text-ikyellow-800 dark:text-ikblue-200">
                        ルール ガチエリアでも塗れば塗っただけ勝てるかもしれない！ ナワバリバトルのようなガチエリアで勝ち上がれ！
                    </p>
                    <div className="mt-3">
                        <a href="/1st/splatzones" className="block w-fit mx-auto px-3 py-2 rounded bg-ikpurple-600 text-ikpurple-100 hover:bg-ikpurple-400 border border-ikpurple-900 dark:bg-ikyellow-400 dark:text-ikyellow-800 dark:hover:bg-ikyellow-500 dark:border-ikyellow-500 transition-all">ルールの詳細を見る！</a>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden rounded-md border border-ikyellow-500 bg-ikyellow-400 dark:border-ikblue-900 dark:bg-ikblue-600">
                <img src="/images/1st/smup-yagura.png" width="1920" height="1080" alt="ルール ガチヤグラ" />
                <div className="p-5">
                    <h3 className="text-ikblue-700 dark:text-ikyellow-200">
                        <TowerControlLogo className="h-10 w-auto mx-auto max-w-full" />
                    </h3>
                    <h4 className="text-center mt-4 text-base font-extrabold tracking-tight text-ikblue-800 dark:text-white leading-6 mb-4 after:block after:mt-4 after:h-px after:w-10 after:mx-auto after:bg-ikpurple-300">
                        <span className="inline-block">つっこめヤグラ！</span>
                        <span className="inline-block">やったれヤグラ！</span><br />
                        <span className="inline-block">ブリリアント・</span>
                        <span className="inline-block">シャイニング・</span>
                        <span className="inline-block">ローーード！！！</span>
                    </h4>
                    <p className="text-sm text-ikyellow-800 dark:text-ikblue-200">
                        ルール ガチヤグラは、直前でポイントが決まるので誰にでもチャンスがある！ 運に身を任せろ！
                    </p>
                    <div className="mt-3">
                        <a href="/1st/towercontrol" className="block w-fit mx-auto px-3 py-2 rounded bg-ikpurple-600 text-ikpurple-100 hover:bg-ikpurple-400 border border-ikpurple-900 dark:bg-ikyellow-400 dark:text-ikyellow-800 dark:hover:bg-ikyellow-500 dark:border-ikyellow-500 transition-all">ルールの詳細を見る！</a>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden rounded-md border border-ikyellow-500 bg-ikyellow-400 dark:border-ikblue-900 dark:bg-ikblue-600">
                <img src="/images/1st/smup-hoko.png" width="1920" height="1080" alt="ルール ガチホコ" />
                <div className="p-5">
                    <h3 className="text-ikblue-700 dark:text-ikyellow-200">
                        <RainmakerLogo className="h-10 w-auto mx-auto max-w-full" />
                    </h3>
                    <h4 className="text-center mt-4 text-base font-extrabold tracking-tight text-ikblue-800 dark:text-white leading-6 mb-4 after:block after:mt-4 after:h-px after:w-10 after:mx-auto after:bg-ikpurple-300">
                        <span className="inline-block">ホコの舞！</span><br />
                        <span className="inline-block">バリアを割って</span>
                        <span className="inline-block">大転身！！！</span>
                    </h4>
                    <p className="text-sm text-ikyellow-800 dark:text-ikblue-200">
                        ルール ガチホコは大逆転できるチャンスも用意！ どのポイントで勝ち抜くかはあなた次第！
                    </p>
                    <div className="mt-3">
                        <a href="/1st/rainmaker" className="block w-fit mx-auto px-3 py-2 rounded bg-ikpurple-600 text-ikpurple-100 hover:bg-ikpurple-400 border border-ikpurple-900 dark:bg-ikyellow-400 dark:text-ikyellow-800 dark:hover:bg-ikyellow-500 dark:border-ikyellow-500 transition-all">ルールの詳細を見る！</a>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden rounded-md border border-ikyellow-500 bg-ikyellow-400 dark:border-ikblue-900 dark:bg-ikblue-600">
                <img src="/images/1st/smup-asari.png" width="1920" height="1080" alt="ルール ガチアサリ" />
                <div className="p-5">
                    <h3 className="text-ikblue-700 dark:text-ikyellow-200">
                        <ClamBlitzLogo className="h-10 w-auto mx-auto max-w-full" />
                    </h3>
                    <h4 className="text-center mt-4 text-base font-extrabold tracking-tight text-ikblue-800 dark:text-white leading-6 mb-4 after:block after:mt-4 after:h-px after:w-10 after:mx-auto after:bg-ikpurple-300">
                        <span className="inline-block">投げ入れて☆</span>
                        <span className="inline-block">シューティングスター</span><br />
                        <span className="inline-block">〜床塗れ！</span>
                        <span className="inline-block">アシスト！</span>
                        <span className="inline-block">スペを吐け！〜</span>
                    </h4>
                    <p className="text-sm text-ikyellow-800 dark:text-ikblue-200">
                        ルール ガチアサリでは追加ギアパワーOFF！ どんどんアサリを投げつけろ！
                    </p>
                    <div className="mt-3">
                        <a href="/1st/clamblitz" className="block w-fit mx-auto px-3 py-2 rounded bg-ikpurple-600 text-ikpurple-100 hover:bg-ikpurple-400 border border-ikpurple-900 dark:bg-ikyellow-400 dark:text-ikyellow-800 dark:hover:bg-ikyellow-500 dark:border-ikyellow-500 transition-all">ルールの詳細を見る！</a>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden rounded-md border border-ikyellow-500 bg-ikyellow-400 dark:border-ikblue-900 dark:bg-ikblue-600">
                <img src="/images/1st/smup-salmon.png" width="1920" height="1080" alt="ルール シャケシバキ" />
                <div className="p-5">
                    <h3 className="text-ikblue-700 dark:text-ikyellow-200 w-40 mx-auto max-w-full">
                        <SalmonRunLogo className="h-10 w-auto mx-auto max-w-full" />
                    </h3>
                    <h4 className="text-center mt-4 text-base font-extrabold tracking-tight text-ikblue-800 dark:text-white leading-6 mb-4 after:block after:mt-4 after:h-px after:w-10 after:mx-auto after:bg-ikpurple-300">
                        <span className="inline-block">新しいジブン、</span>
                        <span className="inline-block">きっとミツカル？</span><br />
                        <span className="inline-block">全ての</span>
                        <span className="inline-block">イカタコ </span>
                        <span className="inline-block">お越しやす！</span>
                    </h4>
                    <p className="text-sm text-ikyellow-800 dark:text-ikblue-200">
                        ルール シャケシバキには二つの賞がある！ デスを重ねると勝てるかも？！
                    </p>
                    <div className="mt-3">
                        <a href="/1st/salmonrun" className="block w-fit mx-auto px-3 py-2 rounded bg-ikpurple-600 text-ikpurple-100 hover:bg-ikpurple-400 border border-ikpurple-900 dark:bg-ikyellow-400 dark:text-ikyellow-800 dark:hover:bg-ikyellow-500 dark:border-ikyellow-500 transition-all">ルールの詳細を見る！</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopRules;
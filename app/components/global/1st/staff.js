import ClamBlitzLogo from "./images/clamblitz-logo";
import RainmakerLogo from "./images/rainmaker-logo";
import SalmonRunLogo from "./images/salmonrun-logo";
import SplatZonesLogo from "./images/splatzones-logo";
import TowerControlLogo from "./images/towercontrol-logo";
import TurfWarLogo from "./images/turfwar-logo";

const Staff = () => {
    return (
        <section className="py-12 sm:pb-16 w-11/12 max-w-5xl mx-auto">
            <h2 className="text-center text-3xl font-bold text-ikpurple-700 dark:text-ikyellow-300 mb-7">運営チーム</h2>
            <div className="border-t border-b border-gray-500 dark:border-gray-200 py-10 px-5 mt-8 md:mt-0 mb-7">
                <div className="mb-6">
                    <h3 className="text-center text-2xl font-bold text-ikpurple-700 dark:text-ikyellow-300 mb-2">大会プロデューサー</h3>
                    <ul className="text-center flex flex-col gap-1 list-none m-0">
                        <li>
                            <a href="https://ikaskey.bktsk.com/@mantaro" className="text-ikyellow-800 hover:text-ikyellow-600 dark:text-ikpurple-200 dark:hover:text-ikpurple-400 transition-colors">スーパーマンタロー</a>
                        </li>
                        <li>
                            <a href="https://ikaskey.bkstk.com/@sasapiyo" className="text-ikyellow-800 hover:text-ikyellow-600 dark:text-ikpurple-200 dark:hover:text-ikpurple-400 transition-colors">ささぴよ</a>
                        </li>
                    </ul>
                </div>
                <h3 className="text-center text-2xl font-bold text-ikpurple-700 dark:text-ikyellow-300 mb-3">ルール ディレクター</h3>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                    <div className="grid row-span-2 sub-grid">
                        <h3 className="h-fit"><TurfWarLogo className="text-ikpurple-700 dark:text-ikyellow-300 h-6 mx-auto" /></h3>
                        <ul className="text-center flex flex-col gap-1 list-none m-0">
                            <li className="text-sm">
                                <a href="https://ikaskey.bktsk.com/@mantaro" className="text-ikyellow-800 hover:text-ikyellow-600 dark:text-ikpurple-200 dark:hover:text-ikpurple-400 transition-colors">クリフェ</a>
                            </li>
                            <li className="text-sm">
                                <a href="https://ikaskey.bkstk.com/@sasapiyo" className="text-ikyellow-800 hover:text-ikyellow-600 dark:text-ikpurple-200 dark:hover:text-ikpurple-400 transition-colors">しゅしゅとん</a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid row-span-2 sub-grid">
                        <h3 className="h-fit"><SplatZonesLogo className="text-ikpurple-700 dark:text-ikyellow-300 h-6 mx-auto" /></h3>
                        <ul className="text-center flex flex-col gap-1 list-none m-0">
                            <li className="text-sm">
                                <a href="https://ikaskey.bktsk.com/@mantaro" className="text-ikyellow-800 hover:text-ikyellow-600 dark:text-ikpurple-200 dark:hover:text-ikpurple-400 transition-colors">ハル</a>
                            </li>
                            <li className="text-sm">
                                <a href="https://ikaskey.bkstk.com/@sasapiyo" className="text-ikyellow-800 hover:text-ikyellow-600 dark:text-ikpurple-200 dark:hover:text-ikpurple-400 transition-colors">ぷごろ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid row-span-2 sub-grid">
                        <h3 className="h-fit"><TowerControlLogo className="text-ikpurple-700 dark:text-ikyellow-300 h-6 mx-auto" /></h3>
                        <ul className="text-center flex flex-col gap-1 list-none m-0">
                            <li className="text-sm">
                                <a href="https://ikaskey.bktsk.com/@mantaro" className="text-ikyellow-800 hover:text-ikyellow-600 dark:text-ikpurple-200 dark:hover:text-ikpurple-400 transition-colors">鷲(syu)</a>
                            </li>
                            <li className="text-sm">
                                <a href="https://ikaskey.bkstk.com/@sasapiyo" className="text-ikyellow-800 hover:text-ikyellow-600 dark:text-ikpurple-200 dark:hover:text-ikpurple-400 transition-colors">ととら</a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid row-span-2 sub-grid">
                        <h3 className="h-fit"><RainmakerLogo className="text-ikpurple-700 dark:text-ikyellow-300 h-6 mx-auto" /></h3>
                        <ul className="text-center flex flex-col gap-1 list-none m-0">
                            <li className="text-sm">
                                <a href="https://ikaskey.bktsk.com/@mantaro" className="text-ikyellow-800 hover:text-ikyellow-600 dark:text-ikpurple-200 dark:hover:text-ikpurple-400 transition-colors">mire</a>
                            </li>
                            <li className="text-sm">
                                <a href="https://ikaskey.bkstk.com/@sasapiyo" className="text-ikyellow-800 hover:text-ikyellow-600 dark:text-ikpurple-200 dark:hover:text-ikpurple-400 transition-colors">鈴木</a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid row-span-2 sub-grid">
                        <h3 className="h-fit"><ClamBlitzLogo className="text-ikpurple-700 dark:text-ikyellow-300 h-6 mx-auto" /></h3>
                        <ul className="text-center flex flex-col gap-1 list-none m-0">
                            <li className="text-sm">
                                <a href="https://ikaskey.bktsk.com/@mantaro" className="text-ikyellow-800 hover:text-ikyellow-600 dark:text-ikpurple-200 dark:hover:text-ikpurple-400 transition-colors">しゅしゅとん</a>
                            </li>
                            <li className="text-sm">
                                <a href="https://ikaskey.bkstk.com/@sasapiyo" className="text-ikyellow-800 hover:text-ikyellow-600 dark:text-ikpurple-200 dark:hover:text-ikpurple-400 transition-colors">べーぐる</a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid row-span-2 sub-grid">
                        <h3 className="h-fit"><SalmonRunLogo className="text-ikpurple-700 dark:text-ikyellow-300 h-6 mx-auto" /></h3>
                        <ul className="text-center flex flex-col gap-1 list-none m-0">
                            <li className="text-sm">
                                <a href="https://ikaskey.bktsk.com/@mantaro" className="text-ikyellow-800 hover:text-ikyellow-600 dark:text-ikpurple-200 dark:hover:text-ikpurple-400 transition-colors">ぴよ</a>
                            </li>
                            <li className="text-sm">
                                <a href="https://ikaskey.bkstk.com/@sasapiyo" className="text-ikyellow-800 hover:text-ikyellow-600 dark:text-ikpurple-200 dark:hover:text-ikpurple-400 transition-colors">まそら</a>
                            </li>
                            <li className="text-sm">
                                <a href="https://ikaskey.bkstk.com/@sasapiyo" className="text-ikyellow-800 hover:text-ikyellow-600 dark:text-ikpurple-200 dark:hover:text-ikpurple-400 transition-colors">00037</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-center text-2xl font-bold text-ikpurple-700 dark:text-ikyellow-300 mb-4">大会イラスト提供</h3>
                <ul className="flex gap-4 flex-wrap justify-center list-none m-0">
                    <li className="text-sm">
                        <a href="https://ikaskey.bktsk.com/@mantaro" className="text-ikyellow-800 hover:text-ikyellow-600 dark:text-ikpurple-200 dark:hover:text-ikpurple-400 transition-colors">00037</a>
                    </li>
                    <li className="text-sm">
                        <a href="https://ikaskey.bktsk.com/@mantaro" className="text-ikyellow-800 hover:text-ikyellow-600 dark:text-ikpurple-200 dark:hover:text-ikpurple-400 transition-colors">𝕄𝕠½</a>
                    </li>
                    <li className="text-sm">
                        <a href="https://ikaskey.bktsk.com/@mantaro" className="text-ikyellow-800 hover:text-ikyellow-600 dark:text-ikpurple-200 dark:hover:text-ikpurple-400 transition-colors">いもけんぴ</a>
                    </li>
                    <li className="text-sm">
                        <a href="https://ikaskey.bktsk.com/@mantaro" className="text-ikyellow-800 hover:text-ikyellow-600 dark:text-ikpurple-200 dark:hover:text-ikpurple-400 transition-colors">こばと</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Staff;
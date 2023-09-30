"use client";
import '@/app/components/global/1st/header.css';

import TurfWarLogo from '../turfwar-logo';
import SplatZonesLogo from '../splatzones-logo';
import TowerControlLogo from '../towercontrol-logo';
import RainmakerLogo from '../rainmaker-logo';
import ClamBlitzLogo from '../clamblitz-logo';
import SalmonRunLogo from '../salmonrun-logo';

import ChangeThemeButton from '../modechanger';

const Header = () => {
    return (
        <header>
            <div className="bg-ikyellow-300 dark:bg-ikblue-950 shadow shadow-ikblue-900/30 dark:shadow-ikyellow-200/30 fixed w-full top-0 left-0">
                <div className="flex w-5/6 py-4 mx-auto gap-7">
                    <div className="flex-1 flex justify-end items-center gap-4">
                        <TurfWarLogo className="rule" />
                        <SplatZonesLogo className="rule" />
                        <TowerControlLogo className="rule" />
                    </div>
                    <div className="">
                        <img src="/images/SMUP-LOGO.svg" className="w-auto h-12" alt="いかすきー presents スーパーマンタローカップ" />
                    </div>
                    <div className="flex-1 flex justify-start items-center gap-4">
                        <RainmakerLogo className="rule" />
                        <ClamBlitzLogo className="rule" />
                        <SalmonRunLogo className="rule" />
                        <button className="">参加する！</button>
                        <span className="group inline-flex items-center text-xl font-medium pl-2 pr-3 py-2">
                            <ChangeThemeButton />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
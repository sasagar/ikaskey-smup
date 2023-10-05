"use client";
import Image from 'next/image';
import { useState } from "react";

import '@/app/components/global/1st/header.css';

import TurfWarLogo from './images/turfwar-logo';
import SplatZonesLogo from './images/splatzones-logo';
import TowerControlLogo from './images/towercontrol-logo';
import RainmakerLogo from './images/rainmaker-logo';
import ClamBlitzLogo from './images/clamblitz-logo';
import SalmonRunLogo from './images/salmonrun-logo';

import ChangeThemeButton from '../modechanger';
import Link from 'next/link';

const Header = ({ headerRef }) => {
    // ハンバーガーメニュー展開管理
    const [isOpen, setOpen] = useState(false);
    const handleMenuOpen = () => {
        setOpen(!isOpen);
    };

    return (
        <header className='fixed w-full top-0 left-0 z-10' ref={headerRef}>
            <div className="bg-ikyellow-300 dark:bg-ikblue-950 shadow shadow-ikblue-900/30 dark:shadow-ikyellow-200/30">
                <nav className="hidden lg:flex w-5/6 py-4 mx-auto gap-7">
                    <div className="flex-1 flex justify-end items-center gap-4">
                        <Link href="/1st/turfwar">
                            <TurfWarLogo className="rule" />
                        </Link>
                        <SplatZonesLogo className="rule" />
                        <TowerControlLogo className="rule" />
                    </div>
                    <div className="">
                        <Link href="/">
                            <Image src="/images/SMUP-LOGO.svg" width="710" height="325" className="w-auto h-12" alt="いかすきー presents スーパーマンタローカップ" />
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-start items-center gap-4">
                        <RainmakerLogo className="rule" />
                        <ClamBlitzLogo className="rule" />
                        <SalmonRunLogo className="rule" />
                        <button className="text-xs font-bold tracking-tighter">参加する！</button>
                        <span className="group inline-flex items-center text-xs font-medium pl-2 pr-3 py-2">
                            <ChangeThemeButton />
                        </span>
                    </div>
                </nav>

                <div className='block lg:hidden'>
                    <div className='z-10 flex justify-between w-5/6 py-4 mx-auto gap-7'>
                        <Image src="/images/SMUP-LOGO.svg" width="710" height="325" className="z-10 w-auto h-10" alt="いかすきー presents スーパーマンタローカップ" onClick={handleMenuOpen} />
                        <button className="z-10 space-y-2 hamburger" onClick={handleMenuOpen}>
                            <span
                                className={
                                    isOpen
                                        ? "block w-8 h-0.5 bg-gray-600 dark:bg-gray-300 translate-y-2.5 rotate-45 duration-300"
                                        : "block w-8 h-0.5 bg-gray-600 dark:bg-gray-300 duration-300"
                                }
                            />
                            <span
                                className={
                                    isOpen ? "block opacity-0 duration-300" : "block w-8 h-0.5 bg-gray-600 dark:bg-gray-300 duration-300"
                                }
                            />
                            <span
                                className={
                                    isOpen
                                        ? "block w-8 h-0.5 bg-gray-600 dark:bg-gray-300 -rotate-45 duration-300"
                                        : "block w-8 h-0.5 bg-gray-600 dark:bg-gray-300 duration-300"
                                }
                            />                        </button>

                    </div>
                    <nav className={
                        isOpen
                            ? "z-0 bg-ikblue-300 dark:bg-ikyellow-800 fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col"
                            : "fixed right-[-100%]"
                    }>
                        <ul className={
                            isOpen ? "flex h-screen justify-center items-center flex-col gap-6 list-none m-0 pt-20" : "block"
                        }>
                            <li><Link href="/1st/turfwar" className='block w-full h-full'><TurfWarLogo className="rule sp" /></Link></li>
                            <li><SplatZonesLogo className="rule sp" /></li>
                            <li><TowerControlLogo className="rule sp" /></li>
                            <li><RainmakerLogo className="rule sp" /></li>
                            <li><ClamBlitzLogo className="rule sp" /></li>
                            <li><SalmonRunLogo className="rule sp" /> </li>
                        </ul>
                        <ul className='flex justify-between list-none m-0 mb-5 mx-4'>
                            <li><button className="">参加する！</button></li>
                            <li className="group inline-flex items-center text-xl font-medium p-0">
                                <ChangeThemeButton />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
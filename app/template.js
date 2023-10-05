"use client";

import { useRef, useEffect } from 'react';

import Header from './components/global/1st/header'
import Footer from './components/global/1st/footer'
import { SelectWindow } from 'iconoir-react';

const Template = ({ children }) => {
    const header = useRef(null);
    const main = useRef(null);
    const headerStyle = useRef(80)

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            entries.forEach((el) => {
                headerStyle.current = el.contentRect.height;
                main.current.style.paddingTop = headerStyle.current + "px";
            })
        });

        if (header.current) {
            observer.observe(header.current);
        }

        return () => {
            observer.disconnect();
        }
    }, [headerStyle, main]);

    return (
        <>
            <Header headerRef={header} />
            <main ref={main}>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Template;
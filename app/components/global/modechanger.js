import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunLight, HalfMoon } from 'iconoir-react'

const ChangeThemeButton = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    return (
        <>
            <button
                aria-label="DarkModeToggle"
                // type="button"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {mounted && <>{theme === 'dark' ? <HalfMoon /> : <SunLight />}</>}
            </button>
        </>
    )
}

export default ChangeThemeButton;

interface ChangeThemeColorProps {
    theme?: string
    setTheme: (theme: string) => void
}

export const changeThemeColor = ({ theme, setTheme }: ChangeThemeColorProps) => {
    if (theme === "dark") {
        setTheme("light")
    } else {
        setTheme("dark")
    }
}


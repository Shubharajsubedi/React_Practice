import useThemeStore from '../store/ThemeStore'

const Theme = () => {
    const { theme, setTheme } = useThemeStore()
    
    return (
        
        <div className={theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"}>
            <button 
                onClick={setTheme} 
                className='rounded-lg bg-blue-600 px-4 py-2 text-white'
            >
                {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
        </div>
    )
}

export default Theme

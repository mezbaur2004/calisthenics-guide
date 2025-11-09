const Footer = () => {
    return (
        <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-10">
            <div className="max-w-6xl mx-auto text-center px-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} Calisthenics Guides. All rights reserved.</p>
                <p className="text-xs mt-1">
                    Built with Next.js & Tailwind CSS
                </p>
            </div>
        </footer>
    )
}

export default Footer
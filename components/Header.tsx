'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname:string = usePathname()

    const navItems:{name:string,href:string}[] = [
        { name: 'Home', href: '/' },
        { name: 'Workouts', href: '/workouts' },
        { name: 'Routines', href: '/routines' },
        { name: 'Nutrition', href: '/nutrition' },
    ]

    return (
        <header className="w-full bg-white dark:bg-neutral-900 shadow-sm fixed top-0 left-0 z-50">
            <div className="mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <h1 className="text-xl font-bold text-amber-600">Calisthenics Guides</h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6">
                    {navItems.map((item:{name:string,href:string}) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-medium transition ${
                                pathname === item.href
                                    ? 'text-amber-600 border-b-2 border-amber-600 pb-1'
                                    : 'text-gray-700 hover:text-amber-600'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-gray-700 hover:text-amber-600"
                    onClick={():void => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-neutral-900 shadow-inner">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={():void => setMenuOpen(false)}
                            className={`block px-6 py-3 text-sm font-medium ${
                                pathname === item.href
                                    ? 'text-amber-600 bg-amber-50 dark:bg-neutral-800'
                                    : 'text-gray-700 hover:text-amber-600'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    )
}

export default Header

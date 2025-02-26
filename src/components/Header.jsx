// Header.js
import React from 'react';
import { Bell, Sun, Moon, Search, User } from 'lucide-react';
import logo from '../img/im.png';
import logo2 from '../img/images.jpeg'

const Header = ({ theme, setTheme, unreadCount = 0, toggleNotifications }) => {
    return (
        <header className={`py-3 px-4 shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
            <div className="flex items-center justify-between">
                {/* Logo and Brand */}
                <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 md:h-15 md:w-15 flex items-center justify-center">
                        <img
                            src={theme === 'dark' ? logo : logo2} 
                            alt="Logi-Stick Logo"
                            className={`w-full h-full object-contain ${theme === 'dark' ? 'brightness-150' : ''}`}
                        />

                    </div>
                    <div>
                        <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-blue-300 dark:to-purple-400 font-sans tracking-tight drop-shadow-xl">
                            Logi-Stick
                        </h1>
                        <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} hidden sm:block`}>
                            Shipment Dashboard
                        </p>
                    </div>
                </div>

                {/* Search Bar - Only on medium+ screens */}
                <div className="hidden md:block flex-1 max-w-md mx-4">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={16} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search shipments, orders..."
                            className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${theme === 'dark'
                                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                                : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                                }`}
                        />
                    </div>
                </div>

                {/* Action Items */}
                <div className="flex items-center space-x-1 sm:space-x-3">
                    <button
                        className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-700 text-gray-200' : 'hover:bg-gray-100 text-gray-700'} transition-colors relative`}
                        aria-label="Search"
                    >
                        <Search size={20} className="md:hidden" />
                    </button>

                    <button
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ?
                            <Moon size={20} className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`} /> :
                            <Sun size={20} className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`} />
                        }
                    </button>

                    <button
                        onClick={toggleNotifications}
                        className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors relative`}
                        aria-label="Notifications"
                    >
                        <Bell size={20} className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`} />
                        {unreadCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                {unreadCount > 9 ? '9+' : unreadCount}
                            </span>
                        )}
                    </button>

                    <div className={`h-8 w-8 rounded-full overflow-hidden flex items-center justify-center border ${theme === 'dark'
                        ? 'bg-gray-700 border-gray-600'
                        : 'bg-gray-200 border-gray-300'
                        }`}>
                        <User size={16} className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
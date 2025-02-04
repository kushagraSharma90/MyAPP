import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Home, Database, Menu, X } from "lucide-react"

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const location = useLocation()

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const getCurrentPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home"
      case "/datatable":
        return "Data Table"
      default:
        return "Dashboard"
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-indigo-700 text-white transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-64" : "w-20"
        } flex flex-col`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className={`font-bold text-xl ${!isSidebarOpen && "hidden"}`}>Dashboard</h2>
          <button onClick={toggleSidebar} className="p-1 rounded-full hover:bg-indigo-600 focus:outline-none">
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav className="flex-1 mt-5">
          <Link
            to="/"
            className="flex items-center py-3 px-4 text-indigo-200 hover:bg-indigo-600 transition-colors duration-200"
          >
            <Home size={20} />
            <span className={`ml-4 ${!isSidebarOpen && "hidden"}`}>Home</span>
          </Link>
          <Link
            to="/datatable"
            className="flex items-center py-3 px-4 text-indigo-200 hover:bg-indigo-600 transition-colors duration-200"
          >
            <Database size={20} />
            <span className={`ml-4 ${!isSidebarOpen && "hidden"}`}>Data Table</span>
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">{getCurrentPageTitle()}</h1>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  )
}


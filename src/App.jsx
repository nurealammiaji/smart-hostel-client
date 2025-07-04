import { Outlet } from 'react-router'
import './App.css'
import MenuAccordion from './components/MenuAccordion/MenuAccordion';

const App = () => {

  return (
    <>
      <div>
        <div>
          <div className="relative drawer lg:drawer-open">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="flex flex-col drawer-content">
              {/* Navbar */}
              <div className="w-full navbar bg-base-300">
                <div className="flex-none lg:hidden">
                  <label htmlFor="dashboard-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </label>
                </div>
                <div className="flex-1 px-2 mx-2">
                  <h3 className='md:text-2xl md:font-bold font-semibold'>Smart Hostel</h3>
                </div>
                <div className="flex-none">
                  <ul className="menu menu-horizontal flex gap-3">
                    {/* Navbar menu content here */}
                    <li className='btn btn-sm'>Link-1</li>
                    <li className='btn btn-sm'>Link-2</li>
                  </ul>
                </div>
              </div>
              {/* Page content here */}
              <div className="p-5">
                <Outlet />
              </div>
            </div>
            <div className="drawer-side">
              <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="min-h-full p-4 menu bg-base-200 w-60 md:w-80">
                {/* Sidebar content here */}
                <MenuAccordion />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

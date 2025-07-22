import { Link, Outlet } from 'react-router'
import './App.css'
import MenuAccordion from './components/MenuAccordion/MenuAccordion';
import { PiCopyrightBold, PiHouseLineDuotone, PiMagnifyingGlassDuotone } from 'react-icons/pi';

const App = () => {

  const user = {
    name: "Abdullah",
    role: "admin",
    status: "active",
    image: ""
  };

  return (
    <>
      <div>
        <div>
          {/* Nav + Sidebar */}
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
                  <Link to={"/"} className='md:text-2xl md:font-bold font-semibold'>Smart Hostel</Link>
                </div>
                <div className="flex-none">
                  <div className="menu menu-horizontal flex items-center gap-4">
                    {/* Navbar menu content here */}
                    <Link to={"/"} className="tooltip tooltip-bottom" data-tip="Home">
                      {/* <PiHouseLineBold className='text-primary text-3xl' /> */}
                      <PiHouseLineDuotone className='text-3xl font-bold text-success' />
                    </Link>
                    <Link to={"/search"} className='tooltip tooltip-bottom' data-tip="Search">
                      <PiMagnifyingGlassDuotone className='text-3xl font-bold text-success' />
                    </Link>
                    {
                      (user) &&
                      <div className="tooltip tooltip-bottom" data-tip="Profile">
                        {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
                        <button className="btn btn-circle" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                          <div className="avatar avatar-online p-1">
                            <div className="ring-success ring-offset-base-100 w-5 rounded-full ring-2 ring-offset-2">
                              <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                            </div>
                          </div>
                        </button>
                        <ul className="dropdown dropdown-end menu bg-base-200 border border-success rounded-box" popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                          <li><Link to={"/profile/edit"}>Edit</Link></li>
                          <li><Link to={"/profile/view"}>View</Link></li>
                          <li><button>Logout</button></li>
                        </ul>
                      </div>
                    }
                  </div>
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

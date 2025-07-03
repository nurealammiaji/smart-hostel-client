import { Outlet } from 'react-router'
import './App.css'
import { PiBedBold, PiBellRingingBold, PiBowlSteamBold, PiChartLineBold, PiChatTextBold, PiMoneyWavyBold, PiStudentBold, PiUserCircleGearBold, PiUserSquareBold } from "react-icons/pi";

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
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title font-semibold flex gap-4"><span className='text-2xl text-success'><PiStudentBold /></span> Student Management</div>
                  <div className="collapse-content text-sm">Student items will here</div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title font-semibold flex gap-4"><span className='text-2xl text-primary'><PiChartLineBold /></span> Stock Management</div>
                  <div className="collapse-content text-sm">Stock items will here</div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title font-semibold flex gap-4"><span className='text-2xl text-warning'><PiBowlSteamBold /></span> Food Management</div>
                  <div className="collapse-content text-sm">Food items will here</div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title font-semibold flex gap-4"><span className='text-2xl text-info'><PiBedBold /></span> Seat Management</div>
                  <div className="collapse-content text-sm">Seat items will here</div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title font-semibold flex gap-4"><span className='text-2xl text-lime-500'><PiMoneyWavyBold /></span> Fees & Payments</div>
                  <div className="collapse-content text-sm">Fees items will here</div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title font-semibold flex gap-4"><span className='text-2xl text-error'><PiChatTextBold /></span> Complaints</div>
                  <div className="collapse-content text-sm">Complaint items will here</div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title font-semibold flex gap-4"><span className='text-2xl text-yellow-300'><PiBellRingingBold /></span> Notices</div>
                  <div className="collapse-content text-sm">Notice items will here</div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title font-semibold flex gap-4"><span className='text-2xl text-orange-500'><PiUserSquareBold /></span> Profile</div>
                  <div className="collapse-content text-sm">Profile items will here</div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

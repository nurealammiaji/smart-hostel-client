import React from 'react';
import { PiBedBold, PiBellRingingBold, PiBowlSteamBold, PiChartLineBold, PiChatTextBold, PiEyeBold, PiListBulletsBold, PiMagnifyingGlassBold, PiMoneyWavyBold, PiPenBold, PiPlusCircleBold, PiSignOutBold, PiStudentBold, PiUserSquareBold } from "react-icons/pi";
import { Link, NavLink } from 'react-router';

const MenuAccordion = () => {
    return (
        <>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="checkbox" name="menu-accordion" />
                <div className="collapse-title font-semibold flex gap-4 items-center"><span className='text-2xl text-success'><PiStudentBold /></span> Student Management</div>
                <div className="collapse-content text-sm">
                    <ul className="menu bg-base-200 rounded-box w-full border border-success">
                        <li>
                            <NavLink to={"/students/add"} className={({isActive}) => isActive ? "text-success bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiPlusCircleBold />
                                </span>
                                Add
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/students/search"} className={({isActive}) => isActive ? "text-success bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiMagnifyingGlassBold />
                                </span>
                                Search
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/students/all"} className={({isActive}) => isActive ? "text-success bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiListBulletsBold />
                                </span>
                                View All
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="checkbox" name="menu-accordion" />
                <div className="collapse-title font-semibold flex gap-4 items-center"><span className='text-2xl text-primary'><PiChartLineBold /></span> Stock Management</div>
                <div className="collapse-content text-sm">
                    <ul className="menu bg-base-200 rounded-box w-full border border-primary">
                        <li>
                            <NavLink to={"/stocks/add"} className={({isActive}) => isActive ? "text-primary bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiPlusCircleBold />
                                </span>
                                Add
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className={({isActive}) => isActive ? "text-primary bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiMagnifyingGlassBold />
                                </span>
                                Search
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className={({isActive}) => isActive ? "text-primary bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiListBulletsBold />
                                </span>
                                View All
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="checkbox" name="menu-accordion" />
                <div className="collapse-title font-semibold flex gap-4 items-center"><span className='text-2xl text-warning'><PiBowlSteamBold /></span> Food Management</div>
                <div className="collapse-content text-sm">
                    <ul className="menu bg-base-200 rounded-box w-full border border-warning">
                        <li>
                            <NavLink to={"/foods/add"} className={({isActive}) => isActive ? "text-warning bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiPlusCircleBold />
                                </span>
                                Add
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className={({isActive}) => isActive ? "text-warning bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiMagnifyingGlassBold />
                                </span>
                                Search
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className={({isActive}) => isActive ? "text-warning bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiListBulletsBold />
                                </span>
                                View All
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="checkbox" name="menu-accordion" />
                <div className="collapse-title font-semibold flex items-center gap-4"><span className='text-2xl text-info'><PiBedBold /></span> Seat Management</div>
                <div className="collapse-content text-sm">
                    <ul className="menu bg-base-200 rounded-box w-full border border-info">
                        <li>
                            <NavLink to={"/seats/add"} className={({isActive}) => isActive ? "text-info bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiPlusCircleBold />
                                </span>
                                Add
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className={({isActive}) => isActive ? "text-info bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiMagnifyingGlassBold />
                                </span>
                                Search
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className={({isActive}) => isActive ? "text-info bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiListBulletsBold />
                                </span>
                                View All
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="checkbox" name="menu-accordion" />
                <div className="collapse-title font-semibold flex gap-4 items-center"><span className='text-2xl text-lime-500'><PiMoneyWavyBold /></span> Fees & Payments</div>
                <div className="collapse-content text-sm">
                    <ul className="menu bg-base-200 rounded-box w-full border border-lime-500">
                        <li>
                            <NavLink to={"/payments/add"} className={({isActive}) => isActive ? "text-lime-500 bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiPlusCircleBold />
                                </span>
                                Add
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className={({isActive}) => isActive ? "text-lime-500 bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiMagnifyingGlassBold />
                                </span>
                                Search
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className={({isActive}) => isActive ? "text-lime-500 bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiListBulletsBold />
                                </span>
                                View All
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="checkbox" name="menu-accordion" />
                <div className="collapse-title font-semibold flex gap-4 items-center"><span className='text-2xl text-error'><PiChatTextBold /></span> Complaints</div>
                <div className="collapse-content text-sm">
                    <ul className="menu bg-base-200 rounded-box w-full border border-error">
                        <li>
                            <NavLink to={"/complaints/add"} className={({isActive}) => isActive ? "text-error bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiPlusCircleBold />
                                </span>
                                Add
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className={({isActive}) => isActive ? "text-error bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiMagnifyingGlassBold />
                                </span>
                                Search
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className={({isActive}) => isActive ? "text-error bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiListBulletsBold />
                                </span>
                                View All
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="checkbox" name="menu-accordion" />
                <div className="collapse-title font-semibold flex gap-4 items-center"><span className='text-2xl text-yellow-300'><PiBellRingingBold /></span> Notices</div>
                <div className="collapse-content text-sm">
                    <ul className="menu bg-base-200 rounded-box w-full border border-yellow-300">
                        <li>
                            <NavLink to={"/notices/add"} className={({isActive}) => isActive ? "text-yellow-300 bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiPlusCircleBold />
                                </span>
                                Add
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"}  className={({isActive}) => isActive ? "text-yellow-300 bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiMagnifyingGlassBold />
                                </span>
                                Search
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"}  className={({isActive}) => isActive ? "text-yellow-300 bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiListBulletsBold />
                                </span>
                                View All
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="checkbox" name="menu-accordion" />
                <div className="collapse-title font-semibold flex gap-4 items-center"><span className='text-2xl text-orange-500'><PiUserSquareBold /></span> Profile</div>
                <div className="collapse-content text-sm">
                    <ul className="menu bg-base-200 rounded-box w-full border border-orange-500">
                        <li>
                            <NavLink to={"/profile/edit"} className={({isActive}) => isActive ? "text-orange-500 bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiPenBold />
                                </span>
                                Edit
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/profile/view"} className={({isActive}) => isActive ? "text-orange-500 bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    <PiEyeBold />
                                </span>
                                View
                            </NavLink>
                        </li>
                        <li>
                            <button>
                                <span className='text-xl'>
                                    <PiSignOutBold />
                                </span>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MenuAccordion;
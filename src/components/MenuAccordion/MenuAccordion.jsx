import React from 'react';
import { PiBedBold, PiBellRingingBold, PiBowlSteamBold, PiChartLineBold, PiChatTextBold, PiEyeBold, PiIntersectBold, PiMoneyWavyBold, PiPenBold, PiPlusCircleBold, PiStudentBold, PiUserSquareBold } from "react-icons/pi";
import { Link } from 'react-router';

const MenuAccordion = () => {
    return (
        <>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="menu-accordion" />
                <div className="collapse-title font-semibold flex gap-4 items-center"><span className='text-2xl text-success'><PiStudentBold /></span> Student Management</div>
                <div className="collapse-content text-sm">
                    <ul className="menu bg-base-200 rounded-box w-full">
                        <li>
                            <Link to={"/students/add"}>
                                <span className='text-xl'>
                                    <PiPlusCircleBold />
                                </span>
                                Add
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <span className='text-xl'>
                                    <PiIntersectBold />
                                </span>
                                Item 2
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <span className='text-xl'>
                                    <PiIntersectBold />
                                </span>
                                Item 3
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="menu-accordion" />
                <div className="collapse-title font-semibold flex gap-4 items-center"><span className='text-2xl text-primary'><PiChartLineBold /></span> Stock Management</div>
                <div className="collapse-content text-sm">
                    <ul className="menu bg-base-200 rounded-box w-full">
                        <li>
                            <Link to={"/stocks/add"}>
                                <span className='text-xl'>
                                    <PiPlusCircleBold />
                                </span>
                                Add
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <span className='text-xl'>
                                    <PiIntersectBold />
                                </span>
                                Item 2
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <span className='text-xl'>
                                    <PiIntersectBold />
                                </span>
                                Item 3
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="menu-accordion" />
                <div className="collapse-title font-semibold flex gap-4 items-center"><span className='text-2xl text-warning'><PiBowlSteamBold /></span> Food Management</div>
                <div className="collapse-content text-sm">
                    <ul className="menu bg-base-200 rounded-box w-full">
                        <li>
                            <Link to={"/foods/add"}>
                                <span className='text-xl'>
                                    <PiPlusCircleBold />
                                </span>
                                Add
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <span className='text-xl'>
                                    <PiIntersectBold />
                                </span>
                                Item 2
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <span className='text-xl'>
                                    <PiIntersectBold />
                                </span>
                                Item 3
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="menu-accordion" />
                <div className="collapse-title font-semibold flex items-center gap-4"><span className='text-2xl text-info'><PiBedBold /></span> Seat Management</div>
                <div className="collapse-content text-sm">
                    <ul className="menu bg-base-200 rounded-box w-full">
                        <li>
                            <Link to={"/seats/add"}>
                                <span className='text-xl'>
                                    <PiPlusCircleBold />
                                </span>
                                Add
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <span className='text-xl'>
                                    <PiIntersectBold />
                                </span>
                                Item 2
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <span className='text-xl'>
                                    <PiIntersectBold />
                                </span>
                                Item 3
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="menu-accordion" />
                <div className="collapse-title font-semibold flex gap-4 items-center"><span className='text-2xl text-lime-500'><PiMoneyWavyBold /></span> Fees & Payments</div>
                <div className="collapse-content text-sm">
                    <ul className="menu bg-base-200 rounded-box w-full">
                        <li>
                            <Link to={"/payments/add"}>
                                <span className='text-xl'>
                                    <PiPlusCircleBold />
                                </span>
                                Add
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <span className='text-xl'>
                                    <PiIntersectBold />
                                </span>
                                Item 2
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <span className='text-xl'>
                                    <PiIntersectBold />
                                </span>
                                Item 3
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="menu-accordion" />
                <div className="collapse-title font-semibold flex gap-4 items-center"><span className='text-2xl text-error'><PiChatTextBold /></span> Complaints</div>
                <div className="collapse-content text-sm">
                    <ul className="menu bg-base-200 rounded-box w-full">
                        <li>
                            <Link to={"/complaints/add"}>
                                <span className='text-xl'>
                                    <PiPlusCircleBold />
                                </span>
                                Add
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <span className='text-xl'>
                                    <PiIntersectBold />
                                </span>
                                Item 2
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <span className='text-xl'>
                                    <PiIntersectBold />
                                </span>
                                Item 3
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="menu-accordion" />
                <div className="collapse-title font-semibold flex gap-4 items-center"><span className='text-2xl text-yellow-300'><PiBellRingingBold /></span> Notices</div>
                <div className="collapse-content text-sm">
                    <ul className="menu bg-base-200 rounded-box w-full">
                        <li>
                            <Link to={"/notices/add"}>
                                <span className='text-xl'>
                                    <PiPlusCircleBold />
                                </span>
                                Add
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <span className='text-xl'>
                                    <PiIntersectBold />
                                </span>
                                Item 2
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <span className='text-xl'>
                                    <PiIntersectBold />
                                </span>
                                Item 3
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="menu-accordion" />
                <div className="collapse-title font-semibold flex gap-4 items-center"><span className='text-2xl text-orange-500'><PiUserSquareBold /></span> Profile</div>
                <div className="collapse-content text-sm">
                    <ul className="menu bg-base-200 rounded-box w-full">
                        <li>
                            <Link to={"/profile/view"}>
                                <span className='text-xl'>
                                    <PiEyeBold />
                                </span>
                                View
                            </Link>
                        </li>
                        <li>
                            <Link to={"/profile/edit"}>
                                <span className='text-xl'>
                                    <PiPenBold />
                                </span>
                                Edit
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <span className='text-xl'>
                                    <PiIntersectBold />
                                </span>
                                Item 3
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MenuAccordion;
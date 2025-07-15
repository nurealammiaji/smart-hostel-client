import React from 'react'

const StudentAddForm = () => {

    const classes = [
        {
            id: 1,
            name: "One",
        },
        {
            id: 2,
            name: "Two",
        },
        {
            id: 3,
            name: "Three",
        },
        {
            id: 4,
            name: "Four",
        },
        {
            id: 5,
            name: "Five",
        },
    ];

    return (
        <form className="bg-base-200 border-base-300 rounded-box border p-4">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='w-full'>
                    <label className="label">Student ID</label>
                    <input type="text" className="input w-full" placeholder="type student id here" />
                </div>
                <div className='w-full'>
                    <label className="label">Student Name</label>
                    <input type="text" className="input w-full" placeholder="type student name here" />
                </div>
                <div className='w-full'>
                    <label className="label">Class</label>
                    <select className='select w-full'>
                        <option value="" className='text-slate-400'>select class</option>
                        {
                            (classes) &&
                            classes.map((c, i) => <option key={i} value={c.name}>{c.name}</option>)
                        }
                    </select>
                </div>
                <div className='w-full'>
                    <label className="label">Father's Name</label>
                    <input type="text" className="input w-full" placeholder="type father's name here" />
                </div>
                <div className='w-full'>
                    <label className="label">Mother's Name</label>
                    <input type="text" className="input w-full" placeholder="type mother's name here" />
                </div>
                <div className='w-full'>
                    <label className="label">Guardian's Name</label>
                    <input type="text" className="input w-full" placeholder="type guardian's name here" />
                </div>
            </div>
            <div className='text-center mt-5'>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
        </form>
    )
}

export default StudentAddForm


import { useState } from "react";
import { addStudent } from "../services/api";

const CreateStudent = () => {

    const initialValue = {
        name: '',
        email: '',
        phone: '',
    }

    const [student, setStudent] = useState(initialValue);


    const onValueChange = (e) => {

        setStudent({...student, [e.target.name]: e.target.value})
        
    }

    const addUserDetails = async () => {
        await addStudent(student);
    }

    return (

        <div className="h-full w-full">

            <h2 className=" text-5xl text-blue-500 text-center font-bold w-fit mx-auto mb-20">Create New Student</h2>

            <form className="w-fit mx-auto">

                {/* Name Input */}

                <div className="mb-5">

                    <label htmlFor="name" className="block mb-2 text-black text-2xl font-semibold">Name</label>

                    <input id="name" onChange={(e) => onValueChange(e)} className="block border-2 border-slate-200 rounded shadow-lg px-5 py-2 text-xl w-96" type="text" name="name" />

                </div>

                {/* Email Input */}

                <div className="mb-5">

                    <label htmlFor="email" className="block mb-2 text-black text-2xl font-semibold">Email</label>

                    <input id="email" onChange={(e) => onValueChange(e)} className="block border-2 border-slate-200 rounded shadow-lg px-5 py-2 text-xl w-96" type="email" name="email" />

                </div>

                {/* Phone Input */}

                <div className="mb-10">

                    <label htmlFor="phone" className="block mb-2 text-black text-2xl font-semibold">Phone</label>

                    <input id="phone" onChange={(e) => onValueChange(e)} className="block border-2 border-slate-200 rounded shadow-lg px-5 py-2 text-xl w-96" type="tel" name="phone" />

                </div>

                {/* Submit Button */}

                <div className="w-fit mx-auto">
                    <button onClick={ () => addUserDetails()} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded shadow-lg">Create Student</button>
                </div>

            </form>

        </div>

    );


}


export default CreateStudent;
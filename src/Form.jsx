import React, { useEffect, useState } from 'react'

function Form() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        ssc: 0,
        course: ''
    })


    const [isRegister, setIsRegister] = useState(false)


    useEffect(() => {
        console.log("##", formData)
    }, [formData])


    const register = () => {
        setIsRegister(true)
    }

    return (
        <div className='flex flex-col gap-3 h-screen justify-start items-center pt-10 bg-indigo-500 rounded-xl shadow-gray-50'>
            <h1 className='text-2xl font-bold'>Student Registration</h1>
            <div className='bg-gray-400 p-5  rounded-xl gap-5 flex flex-col'>

                <div className=' border-orange-500 outline-green-600'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" className='px-3 py-2 rounded-xl border-orange-500 outline-green-600'
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} />
                </div>
                <div className=' border-orange-500 outline-green-600'>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" className='px-3 py-2 rounded-xl border-orange-500 outline-green-600'
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    />

                </div>
                <div className=' border-orange-500 outline-green-600'>
                    <label htmlFor="mobile">Mobile: </label>
                    <input type="text" name="mobile" id="mobile" maxLength={10} className='px-3 py-2 rounded-xl border-orange-500 outline-green-600'
                        onChange={(e) => setFormData((prev) => ({ ...prev, mobile: e.target.value }))}

                    />
                </div>
                <div className=' border-orange-500 outline-green-600'>
                    <label htmlFor="ssc">10th %: </label>
                    <input type="number" name="ssc" id="ssc" min={0} max={100} className='px-3 py-2 rounded-xl border-orange-500 outline-green-600'
                        onChange={(e) => setFormData((prev) => ({ ...prev, ssc: e.target.value }))}
                    />
                </div>


                {formData?.ssc &&
                    <p className='text-pretty text-lg font-bold text-white'>
                        {formData?.ssc >= 90 ? 'Outstanding' :
                            formData?.ssc >= 80 ? 'Nice' :
                                formData?.ssc >= 70 ? 'Good' :
                                    formData?.ssc >= 60 ? 'Ok' :
                                        formData?.ssc >= 50 ? 'Not OK' :
                                            formData?.ssc >= 40 ? 'Bad' : 'Fail'}
                    </p>
                }

                <div className=' border-orange-500 outline-green-600'>
                    <label htmlFor="course">Course: </label>
                    <select name="course" id="course"
                        onChange={(e) => setFormData((prev) => ({ ...prev, course: e.target.value }))}
                    >
                        <optgroup label='Science'>
                            <option value="BCA">B.C.A</option>
                            <option value="BSC">B.Sc</option>
                        </optgroup>
                        <optgroup label='Commerce'>
                            <option value="BCOM">B.Com</option>
                            <option value="CA">CA</option>
                        </optgroup>
                    </select>
                </div>

                <button onClick={register} className='bg-green-400 p-5 shadow-lg hover:bg-green-600 hover:shadow-orange-700 shadow-orange-500  rounded-xl'>Register</button>
            </div>


            {isRegister &&
                <div className='bg-green-600 p-5 shadow-lg shadow-orange-500  rounded-xl gap-5 flex flex-col'>
                    <h1 className='text-pretty text-lg font-bold text-white'>You have successfully registerd!</h1>
                    <h1 className='text-pretty text-lg font-bold text-white'>Name : {formData?.name}</h1>
                    <h1 className='text-pretty text-lg font-bold text-white'>Email : {formData?.email}</h1>
                    <h1 className='text-pretty text-lg font-bold text-white'>Mobile : {formData?.mobile}</h1>
                    <h1 className='text-pretty text-lg font-bold text-white'>10th % : {formData?.ssc}</h1>
                    <h1 className='text-pretty text-lg font-bold text-white'>Course : {formData?.course}</h1>
                </div>
            }
        </div>
    )
}

export default Form
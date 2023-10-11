import React from 'react'
import SignupInput from '../components/signup/SignupInput'

function Signup() {
    return (
        <div className='min-h-screen h-full w-screen bg flex flex-col items-center justify-center'>
            <div className="w-[40rem] max-w-[80%] rounded-lg bg-gradient-to-br from-[#C1C1C1] to-50% p-[0.1rem] flex">
                <div className='bg-[#121212] rounded-lg flex-grow'>
                    <h1 className='text-2xl sm:text-4xl font-semibold px-5 pt-5 text-center sm:text-left'>
                        Création de compte
                    </h1>
                    <p className='pl-5 text-gray-500'>
                        Les mots de passes sont surestimés de toute façon
                    </p>
                    <SignupInput/>
                </div>
            </div>
        </div>
    )
}

export default Signup
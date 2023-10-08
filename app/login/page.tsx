import React from 'react'
import CardWrapper from '../components/global/CardWrapper'
import LoginInput from '../components/Login/LoginInput'

function Login() {
  return (
        <div className='min-h-screen h-full w-screen bg flex flex-col items-center justify-center'>
            <div className="w-[40rem] max-w-[80%] rounded-lg bg-gradient-to-br from-[#C1C1C1] to-50% p-[0.1rem] flex">
                <div className='bg-[#121212] rounded-lg flex-grow'>
                    <h1 className='text-2xl sm:text-4xl font-semibold px-5 pt-5 text-center sm:text-left'>
                        Connexion à iceBNB
                    </h1>
                    <p className='pl-5 text-gray-500'>
                        Probablement déjà plus sécuritaire que Desjardins
                    </p>
                    <LoginInput/>
                </div>
            </div>
        </div>
  )
}

export default Login
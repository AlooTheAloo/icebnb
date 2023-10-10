import React from 'react'
import ReturnButton from '../components/Post/ReturnButton'
import { Toaster } from 'react-hot-toast'
import TopOptions from '../components/global/TopOptions'
import ModifyForm from '../components/modify/ModifyForm'

function Modify() {
    return (
        <div className='bg-black w-full'>
        <Toaster/>
        <TopOptions showSellOption={false}/>
        
        <div className='pt-24 sm:pt-0 flex justify-center items-start w-full h-full min-h-screen'>
          <div className='w-[80vw] flex flex-col gap-2'>
            <div className='text-4xl sm:text-6xl font-bold text-center sm:text-left sm:mt-36'>
              <h1>
                Modifier post
              </h1>
            </div>
            <div className='border-[#727272] border-2 w-full flex-grow rounded-md bg flex sm:flex-row flex-col-reverse'>
              <div className='w-full sm:w-2/3 flex-grow flex flex-col '>
                <div className='flex-grow '>
                    <ModifyForm/>
                </div>
              </div>
            </div>
            <ReturnButton/>
          </div>
        </div>
      </div>
    )
}

export default Modify
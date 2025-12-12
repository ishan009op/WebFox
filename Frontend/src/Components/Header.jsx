import React from 'react'

const Header = () => {
  return (
    <>
    <div className='w-full flex bg-black justify-between '>
<div className='flex'>
    <p className='text-white flex text-lg p-2 justify-around items-center gap-3'><svg className='inline' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffff"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg> sales@gmail.com </p>

    <p className='text-white flex text-lg p-2 justify-around items-center gap-3'>
<p>HR :-</p>

        <svg className='inline' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffff"><path d="M763-145q-121-9-229.5-59.5T339-341q-86-86-135.5-194T144-764q-2-21 12.29-36.5Q170.57-816 192-816h136q17 0 29.5 10.5T374-779l24 106q2 13-1.5 25T385-628l-97 98q20 38 46 73t57.97 65.98Q422-361 456-335.5q34 25.5 72 45.5l99-96q8-8 20-11.5t25-1.5l107 23q17 5 27 17.5t10 29.5v136q0 21.43-16 35.71Q784-143 763-145ZM255-600l70-70-17.16-74H218q5 38 14 73.5t23 70.5Zm344 344q35.1 14.24 71.55 22.62Q707-225 744-220v-90l-75-16-70 70ZM255-600Zm344 344Z"/></svg>
        91+ 999-9999-999
    </p>
</div>
<div className='flex justify-around gap-4 items-center p-3'>
    <div className='bg-white rounded-md  hover:bg-slate-100'>
        <p className='font-bold p-2'>
            Talk to our experts
        </p>
    </div>
        <p className='text-white font-semibold'>91+ 888-8888-888</p>
</div>
    </div>
    </>
  )
}

export default Header
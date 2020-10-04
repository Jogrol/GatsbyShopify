import React, { Children, useContext } from 'react'



const Banner = () => {
    return <div className='w-screen h-screen'>
        <div className="max-w-5xl mx-auto flex justify-end items-center h-full">
            <div className="bg-gray-300 p-6 rounded-md">
                <h1 className="text-6xl">Kuin Modern.</h1>
                <p>
                    some paragraph text
                </p>
            </div>
        </div>
    </div >
}



export default Banner
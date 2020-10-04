import React, { Children, useContext } from 'react'




const Banner = () => {
    return <div className='w-screen h-screen bg-fixed' style={{
        backgroundImage: "url('../images/pexels-martin-péchy-1866149.jpg')"
    }}
    >
        < div className="max-w-5xl mx-auto flex justify-end items-center h-full" >

            <div className="bg-gray-300 p-6 rounded-md">
                <h1 className="text-6xl leading-none">Producten te koop!</h1>
                <p>
                    some paragraph text
                </p>
            </div>
        </div >
    </div >
}



export default Banner
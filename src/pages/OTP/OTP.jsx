import React, { useEffect, useState } from 'react'
import GenerateOTP from './GenerateOTP'
import InputOTP from './InputOTP'


const OTP = () => {
    const [navbarHeight, setNavbarHeight] = useState("")

    useEffect(() => {
        const navbarH = `${document.querySelector(".navbar")?.getBoundingClientRect().height}px`
        setNavbarHeight(navbarH)
    }, [])

    return (
        <div className='bg-secondary' style={{ minHeight: `calc(100vh - ${navbarHeight})` }}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-6 col-lg-4 pt-5'>
                        <GenerateOTP />
                        <InputOTP />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OTP
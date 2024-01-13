import React, { useState } from 'react'
import GenerateOTP from '../components/GenerateOTP'
import InputOTP from '../components/InputOTP'

const OTP = () => {
    const navbarHeight = `${document.querySelector(".navbar").getBoundingClientRect().height}px`
    const [orgOtp, setOrgOtp] = useState("******");
    const [inputOtp, setInputOtp] = useState("")
    const handleSubmit = () => {
        (+inputOtp !== +orgOtp) ? alert("Wrong OTP") : alert("Correct OTP")
    }
    return (
        <div className='bg-secondary' style={{ minHeight: `calc(100vh - ${navbarHeight})` }}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-6 col-lg-4 pt-5'>
                        <GenerateOTP orgOtp={orgOtp} setOrgOtp={setOrgOtp} />
                        <InputOTP inputOtp={inputOtp} setInputOtp={setInputOtp} handleSubmit={handleSubmit} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OTP
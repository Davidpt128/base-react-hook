import React, { useState } from 'react'
import GenerateOTP from '../components/GenerateOTP'
import InputOTP from '../components/InputOTP'

const OTP = () => {
    const navbarHeight = "56px"
    const [orgOtp, setOrgOtp] = useState("******");
    const [inputOtp, setInputOtp] = useState("")
    const handleSubmit = () => {
        (+inputOtp !== +orgOtp) ? alert("Wrong OTP") : alert("Correct OTP")
    }
    return (
        <div className='bg-secondary vw-100' style={{ minHeight: `calc(100vh - ${navbarHeight})` }}>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-6 col-lg-4 pt-5'>
                    <GenerateOTP orgOtp={orgOtp} setOrgOtp={setOrgOtp} />
                    <InputOTP inputOtp={inputOtp} setInputOtp={setInputOtp} handleSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    )
}

export default OTP
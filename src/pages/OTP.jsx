import React, { useEffect, useState } from 'react'
import GenerateOTP from '../components/GenerateOTP'
import InputOTP from '../components/InputOTP'


const OTP = () => {
    const [navbarHeight, setNavbarHeight] = useState("")
    const [orgOtp, setOrgOtp] = useState("******");
    const [inputOtp, setInputOtp] = useState("")
    const [isDisableClear, setIsDisableClear] = useState(true)
    const [isDisableConfirm, setIsDisableConfirm] = useState(true)
    const [isPlaying, setIsPlaying] = useState(false)
    const [keyCountDown, setKeyCountDown] = useState(0)
    const numInputs = 6

    const handleClickGenerate = () => {
        setIsPlaying(true)
        setKeyCountDown(keyCountDown + 1)
        setOrgOtp(Math.floor(100000 + Math.random() * 900000))
        setInputOtp("")
        setIsDisableClear(true)
        setIsDisableConfirm(true)
    }
    const handleInput = (input) => {
        (input.length === numInputs && isPlaying) ? setIsDisableConfirm(false) : setIsDisableConfirm(true);
        (input.length !== 0) ? setIsDisableClear(false) : setIsDisableClear(true);
        setInputOtp(input)
    }
    const handleTimeOut = () => {
        setIsDisableConfirm(true)
        setIsPlaying(false)
    }
    const handleClear = () => {
        setIsDisableConfirm(true)
        setIsDisableClear(true)
        setInputOtp("")
    }
    const handleSubmit = () => {
        (+inputOtp !== +orgOtp) ? alert("Wrong OTP ~~") : alert("Correct OTP ^^")
    }

    useEffect(() => {
        const navbarH = `${document.querySelector(".navbar")?.getBoundingClientRect().height}px`
        setNavbarHeight(navbarH)
    }, [])

    return (
        <div className='bg-secondary' style={{ minHeight: `calc(100vh - ${navbarHeight})` }}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-6 col-lg-4 pt-5'>
                        <GenerateOTP orgOtp={orgOtp} handleClickGenerate={handleClickGenerate} />
                        <InputOTP inputOtp={inputOtp} numInputs={numInputs} isPlaying={isPlaying} keyCountDown={keyCountDown} isDisableClear={isDisableClear} isDisableConfirm={isDisableConfirm} handleInput={handleInput} handleTimeOut={handleTimeOut} handleClear={handleClear} handleSubmit={handleSubmit} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OTP
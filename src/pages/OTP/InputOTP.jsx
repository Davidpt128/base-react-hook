import React from 'react';
import OtpInput from 'react-otp-input';
import CountDown from './CountDown';
import { useDispatch, useSelector } from 'react-redux';
import { clickBtnClear, enterInput } from '../../redux/slice/otpSlice';

const InputOTP = () => {
    const dispatch = useDispatch()
    const orgOtp = useSelector(state => state.otp.orgOtp)
    const inputOtp = useSelector(state => state.otp.inputOtp)
    const numInputs = useSelector(state => state.otp.numInputs)
    const isDisableClear = useSelector(state => state.otp.isDisableClear)
    const isDisableConfirm = useSelector(state => state.otp.isDisableConfirm)

    const handleInput = (input) => {
        dispatch(enterInput(input))
    }
    const handleClear = () => {
        dispatch(clickBtnClear())
    }
    const handleSubmit = () => {
        (+inputOtp !== +orgOtp) ? alert("Wrong OTP ~~") : alert("Correct OTP ^^")
    }

    return (
        <div className='card bg-white mb-5 mt-5 border-0' style={{ boxShadow: "0 12px 15px rgba(0, 0, 0, 0.02)" }}>
            <div className='card-body p-5 text-center'>
                <h4 className='mb-4'>Enter verification code</h4>
                <OtpInput
                    containerStyle={{ justifyContent: "center", marginBottom: "10px" }}
                    inputStyle={{ height: "45px", width: "42px", borderRadius: "6px", outline: "none", fontSize: "1.125rem", textAlign: "center", border: "1px solid #ddd" }}
                    value={inputOtp}
                    onChange={handleInput}
                    numInputs={numInputs}
                    renderSeparator={<span>&nbsp;&nbsp;</span>}
                    renderInput={(props) => <input {...props} />}
                />
                <div className='timer my-4'>
                    <CountDown size={120} duration={20} />
                </div>
                <div className='my-3'>
                    <button className='btn btn-primary me-5' disabled={isDisableClear} onClick={handleClear}>Clear</button>
                    <button className='btn btn-primary' disabled={isDisableConfirm} onClick={handleSubmit}>Confirm</button>
                </div>
            </div>

        </div>
    )
}

export default InputOTP
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import CountDown from './CountDown';

const InputOTP = (props) => {
    const [isDisable, setIsDisable] = useState(false)
    return (
        <div className='card bg-white mb-5 mt-5 border-0' style={{ boxShadow: "0 12px 15px rgba(0, 0, 0, 0.02)" }}>
            <div className='card-body p-5 text-center'>
                <h4 className='mb-4'>Enter verification code</h4>
                <OtpInput
                    containerStyle={{ justifyContent: "center", marginBottom: "10px" }}
                    inputStyle={{ height: "45px", width: "42px", borderRadius: "6px", outline: "none", fontSize: "1.125rem", textAlign: "center", border: "1px solid #ddd" }}
                    value={props.inputOtp}
                    onChange={props.setInputOtp}
                    numInputs={6}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                />
                <div className='timer my-4'>
                    <CountDown setIsDisable={setIsDisable} />
                </div>
                <div className='my-3'>
                    <button className='btn btn-primary me-5' onClick={() => { props.setInputOtp("") }}>Clear</button>
                    <button className='btn btn-primary' disabled={isDisable} onClick={props.handleSubmit}>Confirm</button>
                </div>

            </div>

        </div>
    )
}

export default InputOTP
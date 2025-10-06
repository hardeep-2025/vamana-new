import './EnquireForm.css';
import 'react-phone-number-input/style.css';
import PhoneInput, { isPossiblePhoneNumber, isValidPhoneNumber } from "react-phone-number-input";
import { useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { useNavigate } from "react-router-dom";

const EnquireForm = ({ subtitle, title, setOpen, button, setshowsidePopup }) => {
    // const [formVisible, setFormVisible] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [termsValue, setTermsValue] = useState(false);
    const [termsCheck, setTermsCheck] = useState(false);
    const [mobileNumber, setMobileNumber] = useState();
    const [phoneError, setPhoneError] = useState("");
    // const [formSuccess, setFormSuccess] = useState("");
    const [formError, setFormError] = useState("");
    const [loading, setLoading] = useState(false);
    // const [disableSubmit, setDisableSubmit] = useState(true);

    const navigate=useNavigate();
    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if (mobileNumber) {
            if (isValidPhoneNumber(mobileNumber) === false || isPossiblePhoneNumber(mobileNumber) === false) {
                setPhoneError("Please Enter Valid Mobile Number.");

                setTimeout(() => {
                    setPhoneError('');
                }, 5000);

                return false;
            }
        }
        // setDisableSubmit(true);
        setLoading(true);

        axios({
            method: "post",
            url: "https://vamanaresidences.com/api/enquire-us-api.php",
            data: JSON.stringify({
                name: name,
                mobileNumber: mobileNumber,
                email: email,
            }),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
            .then(function (response) {
                //handle success

                console.log(response.data.status)
            
                if (response.data.status === 0) {
                    setLoading(false);
                    if(setOpen){
                       setOpen(false); 
                    }
                    if(setshowsidePopup){
                        setshowsidePopup(false);
                    }
                    navigate('/thankyou');
                    
                    // setFormSuccess("THANK YOU !! Our Team Will Contact You Shortly!");
                    
                    //   if( setOpen){
                    
                    //     setFormVisible(false);
                    //   }
                    //     resetForm();
                    //     setTimeout(() => {
                    //         setFormSuccess('');
                    //         if (setOpen) {
                    //             setOpen(false);
                    //             setFormVisible(true);
                    //         }
                    //     }, 10000);

                } else {
                    setLoading(false);
                    setFormError("Some error occured");
                    
                    resetForm();
                    setOpen(false);
                    setTimeout(() => {
                        setFormError('');
                    }, 10000);
                }
            })
            .catch(function (response) {
                //handle error
                setLoading(false);
                console.log(response);
                setFormError("Some error occured");
                resetForm();
                setTimeout(() => {
                    setFormError('');
                }, 5000);
            });

    }

    const EmailChange = (e) => {

        setEmail(e.target.value);

        if (name.length >= 1 && mobileNumber !== undefined && termsValue === true) {
            // setDisableSubmit(false);
        } else {
           // setDisableSubmit(true);
        }
    }

    const NameChange = (e) => {

        const value = e.target.value;
       
        const filteredValue = value.replace(/[^a-zA-Z\s]/g, '');
        setName(filteredValue);
        if (e.target.value.length >= 1 && mobileNumber !== undefined && termsValue === true) {
            // setDisableSubmit(false);
        } else {
            // setDisableSubmit(true);
        }
    }

    const handleUpdate = number => {
        setMobileNumber(number);

        if (name.length >= 1 && number !== undefined && termsValue === true) {
            // setDisableSubmit(false);
        } else {
            // setDisableSubmit(true);
        }
    };

    const CheckboxChange = (e) => {

        setTermsValue(!termsValue);
        setTermsCheck(!termsValue);
        if (name.length >= 1 && mobileNumber !== undefined && !termsValue === true) {
            // setDisableSubmit(false);
        } else {
            // setDisableSubmit(true);
        }
    }

    const resetForm = () => {
        setName("")
        setMobileNumber('');
        setEmail('');
        setTermsValue(false);
        setTermsCheck(false);
    }

    return (
        <form className="enquire-form py-6" onSubmit={handleSubmit}>
            <div className="form-section text-left">
                {formError && (
                    <p className="text-red-400 py-2 text-[12px] text-center">{formError}</p>
                )}

                {/* {formSuccess && (
                    <p className="text-green-700 py-2 text-[12px] text-center">{formSuccess}</p>
                )} */}
                <div id='enquiry-form'>
                    <h5 className="text-2xl title font-extrabold capitalize mb-2.5">
                        {subtitle && <span className='block'>{subtitle}</span>}
                        {title}
                    </h5>
                    <div className="py-2">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name*"
                            className="text-md form-input border border-gray-300 w-full px-3.5 py-2 bg-white"
                            required
                            value={name}
                            onChange={(e) => NameChange(e)}
                        />
                    </div>
                    <div className="py-2">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email (Optional)"
                            className="text-md form-input border border-gray-300 w-full px-3.5 py-2 bg-white"
                            value={email}
                            onChange={(e) => EmailChange(e)}
                        />
                    </div>
                    <div className="py-2">
                        <PhoneInput
                            type="tel"
                            id="mobile-number"
                            name="mobile-number"
                            placeholder="Mobile Number*"
                            className="text-md form-input border border-gray-300 w-full px-3.5 py-2 bg-white"
                            country="IN"
                           // maxlength="10"
                            defaultCountry="IN"
                            value={mobileNumber}
                            onChange={handleUpdate}
                            limitMaxLength={true}
                            national="true"
                            international={false}
                            required
                        />
                        {phoneError && (
                            <p className="text-red-400 text-xs" >{phoneError}</p>
                        )}
                    </div>

                    <p className={`flex items-center text-[10px] mt-5 ${termsCheck ? 'font-semibold' : 'font-extralight  text-gray-400'}`}><input type='checkbox' required className='align-middle size-4' name="termsCheck" checked={termsCheck} value={termsValue} onChange={(e) => CheckboxChange(e)} /> I agree to be contacted by 'Vamana Residences' and its agents via WhatsApp, SMS, phone, email etc.</p>

                    <div className="mt-[20px] flex items-center gap-5 justify-center">
                        
                        <input type="submit" value={button ? button : 'Download Now'} className={`w-max hover:text-white font-bold text-primary-yellow uppercase text-xs tracking-widest py-2.5 sm:py-3.5 px-3.5 sm:px-[22px] 1xl:px-8 hover:bg-primary-yellow border-2 border-primary-yellow cursor-pointer`}  />
                        {loading && (
                            <CircularProgress
                                sx={{
                                    color: (theme) =>
                                        theme.palette.grey[theme.palette.mode === 'dark' ? 400 : 800],
                                }}
                                size={35}
                                thickness={4}
                                value={100}
                            />
                        )}
                    </div>
                </div>
            </div>
        </form>
    )
}

export default EnquireForm
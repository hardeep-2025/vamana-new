import './EnquireForm.css';
import 'react-phone-number-input/style.css';
import PhoneInput, { isPossiblePhoneNumber, isValidPhoneNumber } from "react-phone-number-input";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import telephone from "../../../assests/images/telephone.png";
import carIcon from "../../../assests/images/car-icon.png";
import appIcon from "../../../assests/images/app-icon.png";
import rupee from "../../../assests/images/rupee.png";
import business from "../../../assests/images/businessman.png";
import operator from "../../../assests/images/operator.png";
import { useFormContext } from '../../FormContext';

const weGetOptions = [
    {
        icon: telephone,
        text: "Immediate Call Back",
    },
    {
        icon: carIcon,
        text: "Free Site Visit with Pickup & Drop",
    },
    {
        icon: rupee,
        text: "Direct Developer Pricing ",
    },
    {
        icon: appIcon,
        text: "Project Brochure & Floor Plans on WhatsApp",
    },
    {
        icon: business,
        text: "Dedicated Relationship Manager",
    },
    {
        icon: operator,
        text: "Expert Help with Home Loans & Paperwork",
    }
]

const EnquireForm = ({ subtitle, title, showSide, button, formId}) => {

    const navigate=useNavigate();

    const { isRequestFormOpen, closeRequestForm, isPriceFormOpen, closePriceForm } = useFormContext();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobileNumber: "",
        terms: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
            setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });

        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, mobileNumber: value });
        if (errors.mobileNumber) {
            setErrors({ ...errors, mobileNumber: "" });
        }
    };

    const validate = () => {
        const newErrors = {};

        // Name required
        if (!formData.name.trim()) newErrors.name = "Please Fill Out this Field";

        // Email optional but must be valid if filled
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Enter a valid email";

        // Mobile number validation using react-phone-number-input helpers
        if (!formData.mobileNumber) {
            newErrors.mobileNumber = "Please Fill Out this Field";
        } else if (!isPossiblePhoneNumber(formData.mobileNumber)) {
            newErrors.mobileNumber = "Phone number format looks incorrect";
        } else if (!isValidPhoneNumber(formData.mobileNumber)) {
            newErrors.mobileNumber = "Invalid phone number for selected country";
        }
        if (!formData.terms) newErrors.terms = "You must accept the terms";

        return newErrors;
    };

    const [formError, setFormError] = useState("");
    const [loading, setLoading] = useState(false);
    const [priceRange, setPriceRange] = useState("1 Cr to 1.5 Cr");

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setLoading(true);

            axios({
                method: "post",
                url: "https://vamanaresidences.com/api/enquire-us-api.php",
                data: JSON.stringify({
                    name: formData.name,
                    mobileNumber: formData.mobileNumber,
                    email: formData.email,
                    price: priceRange,
                }),
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            })
            .then(function (response) {
                //handle success

                console.log(response.data.status)
            
                if (response.data.status === 0) {
                    setLoading(false);
                    if (isRequestFormOpen) closeRequestForm();
                    if (isPriceFormOpen) closePriceForm();

                    if(formId === "fixed") {
                        navigate('/thankyou', {
                            state: { message: "Your request to download the Vamana Residences price list has been received. Our team will get in touch shortly to share the details and assist you with any questions." },
                        });
                    } else if(formId === "schedule") {
                        navigate('/thankyou', {
                            state: { message: "Your request for a free site visit at Vamana Residences has been received. Our team will contact you shortly to confirm your visit." },
                        });
                    } else if(formId === "request") {
                        navigate('/thankyou', {
                            state: { message: "Your request has been received successfully. Our team will contact you shortly with the details and assist you with any questions about Vamana Residences." },
                        });
                    } else if(formId === "brochure") {
                        navigate('/thankyou', {
                            state: { message: "Your brochure has been sent to your email. Our team will connect with you shortly to assist further." },
                        });
                    } else {
                        navigate('/thankyou');
                    }
                    

                } else {
                    setLoading(false);
                    setFormError("Some error occured");
                    
                    resetForm();
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
    }

    const resetForm = () => {
        setFormData({ name: "", email: "", mobileNumber: "", terms: false });
        setPriceRange('1 Cr to 1.5 Cr');
    }

    return (
        <form className="enquire-form" onSubmit={handleSubmit}>
            <div className="form-section text-left">
                
                <div id='enquiry-form'>

                    {formError && (
                        <p className="py-2 form_error text-center">{formError}</p>
                    )}
                    
                    {/* {formSuccess && (
                        <p className="text-green-700 py-2 text-[12px] text-center">{formSuccess}</p>
                    )} */}
                
                    <h5 className="text-2xl title font-extrabold capitalize mb-2.5">
                        {subtitle && <span className='block'>{subtitle}</span>}
                        {title}
                    </h5>

                    <div className='form-row-flex'>
                        <div className="py-2 form-row">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name*"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? "invalid" : ""}
                            />
                            <p className={`text-red-400 error text-sm ${errors.name && "visible"}`}>{errors.name ? errors.name : "Please Fill Out this Field"}</p>
                        </div>
                        <div className="py-2 form-row">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email (Optional)"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? "invalid" : ""}
                            />
                            <p className={`text-red-400 error text-sm ${errors.email && "visible"}`}>{errors.email ? errors.email : "Please Fill Out this Field"}</p>
                        </div>
                    </div>
                    <div className="py-2 form-row">
                        <PhoneInput
                            type="tel"
                            id="mobile-number"
                            name="mobile-number"
                            placeholder="Mobile Number*"
                            value={formData.mobileNumber}
                            onChange={handlePhoneChange}
                            className={errors.mobileNumber ? "phone-input-error" : ""}
                            country="IN"
                            // maxlength="10"
                            defaultCountry="IN"
                            limitMaxLength={true}
                            national="true"
                            international={false}
                        />
                        <p className={`text-red-400 error text-sm ${errors.mobileNumber && "visible"}`}>{errors.mobileNumber ? errors.mobileNumber : "Please Fill Out this Field"}</p>
                    </div>

                    <div className="py-2 form-row">
                        <p className='form_label'>Select Budget*</p>

                        <ToggleButtonGroup name={`price_range_${formId}`} className='price_range_group' type="radio" value={priceRange} onChange={(val) => setPriceRange(val)}>
                            <ToggleButton id={`${formId+"_1"}`} value={"1 Cr to 1.5 Cr"} className={`${priceRange === "1 Cr to 1.5 Cr" && 'active'}`}>
                                1 Cr to 1.5 Cr
                            </ToggleButton>
                            <ToggleButton id={`${formId+"_2"}`} value={"1.5 Cr to 2 Cr"}>
                                1.5 Cr to 2 Cr
                            </ToggleButton>
                            <ToggleButton id={`${formId+"_4"}`} value={"2 Cr Onwards"}>
                                2 Cr Onwards
                            </ToggleButton>
                        </ToggleButtonGroup>
                        
                    </div>

                    <p className={`checkbox_div flex items-center text-[10px] ${formData.terms ? 'font-semibold' : 'font-extralight  text-gray-400'}`}>
                        <label className="custom-checkbox">
                            <input 
                                type='checkbox' 
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                                className={errors.terms ? "checkbox-error checkbox" : "checkbox"} 
                            /> 
                            <span className={errors.terms ? "checkbox-error checkmark" : "checkmark"}></span>
                        </label>
                        <span>I agree to be contacted by 'Vamana Residences' and its agents via WhatsApp, SMS, phone, email etc.</span>
                    </p>

                    <p className={`text-red-400 error text-sm ${errors.terms && "visible"}`}>{errors.terms ? errors.terms : "You must accept the terms"}</p>

                    <div className="text-center flex items-center gap-5 justify-end">
                        <input type="submit" value={loading ? "Processing..." : button ? button : 'Download Now'} disabled={loading} className={`submit_btn cursor-pointer`} />
                    </div>
                </div>

                {showSide && showSide === true &&
                    <div className="py-2 form-row we_get_row">
                        <p className='form_label'>What You Get</p>
                        <div className='we_get_div_grid'>
                            {weGetOptions.map((item,i) => (
                                <div className='we_get_div_item' key={i}>
                                    <img src={item.icon} alt={item.text} className='we_get_icon' />
                                    <p className='we_get_text'>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>
        </form>
    )
}

export default EnquireForm
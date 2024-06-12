import React, { useEffect, useState } from 'react';
import { SendEmail } from '../Api.jsx';
import InlineError from './inlineError.jsx';
import {
    validateEmail,
    validateFullName,
    validateMessage,
    validatePhone,
    validateAddress,
} from './Validation.jsx';
import { toast } from 'react-toastify';
import Toast from './Toast.jsx';

const Contacts = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [fullNameError, setFullNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [phoneError, setPhoneError] = useState();
    const [addressError, setAddressError] = useState();
    const [messageError, setMessageError] = useState();
    const [buttonLoading, setButtonLoading] = useState(false);
    const [send, setSend] = useState();


    useEffect(() => {

        // *********** VALIDATION **********
        validateFullName({ fullName, setFullNameError });
        validateEmail({ email, setEmailError });
        validatePhone({ phone, setPhoneError });
        validateAddress({ address, setAddressError });
        validateMessage({ message, setMessageError });

        // ***********
        if (send) { console.log(send.message, send.msg);
            toast.success(send.message);
            setFullName("")
            setEmail("")
            setMessage("")
            setSend()
            setPhone("")
            setAddress("")
        }
    }, [fullName, email, phone, address, message, send]);

    const submitHandler = (e) => {
        e.preventDefault();
        setButtonLoading(true);
        if (!fullNameError & !emailError & !phoneError & !messageError & !addressError) {
           SendEmail({ fullName, email, phone, address, message, setSend })
           .then(
                () => {
                    setButtonLoading(false);
                }
            );
        }
    };
    
    return (
        <>
            <Toast />
            <div className="container flex-col py-12 mx-auto min-h-screen sm:py-2 px-4 ">
                
                (
                    <div class='max-w-[1200px] mx-auto sm:py-20 p-5' id="contact" data-aos="fade-down" data-aos-delay={200}>
                        <div className='text-center'>
                            <h2 class="text-4xl font-bold leading-tight primary-color">Contact Me</h2>
                        </div>
                        <div class="max-w-[800px] mx-auto">
                            <div class="mt-6 bg-[#161616] rounded-xl">
                                <div class="p-10">
                                    <form onSubmit={submitHandler}>
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 justify-between items-center">
                                            <div>
                                                <div class="mt-2.5 relative px-2.5">
                                                    <input type="text" name="" id="" placeholder='Your Name' class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-lime-600 gap-x-4" value={fullName}
                                                        onChange={(e) => setFullName(e.target.value)}
                                                        required />{fullNameError && <InlineError error={fullNameError} />}
                                                </div>
                                            </div>

                                            <div>
                                                <div class="mt-2.5 relative px-2.5">
                                                    <input type="email" name="" id="" placeholder='Your Email' class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-lime-600" value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required />{emailError && <InlineError error={emailError} />}
                                                </div>
                                            </div>
                                            <div>
                                                <div class="mt-2.5 relative px-2.5">
                                                    <input type="number" name="" id="" placeholder='Your Contact No' class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-lime-600 gap-x-4" value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        required />{phoneError && <InlineError error={phoneError} />}
                                                </div>
                                            </div>

                                            <div>
                                                <div class="mt-2.5 relative px-2.5">
                                                    <input type="text" name="" id="" placeholder='Your Address' class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-lime-600" value={address}
                                                        onChange={(e) => setAddress(e.target.value)}
                                                        required />{addressError && <InlineError error={addressError} />}
                                                </div>
                                            </div>
                                            <div class="sm:col-span-2">
                                                <div class="mt-2.5 relative px-2.5">
                                                    <textarea name="" id="" placeholder='Your Message' class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-lime-600" rows="4" required
                                                        value={message}
                                                        onChange={(e) => setMessage(e.target.value)}></textarea>{messageError && <InlineError error={messageError} />}
                                                </div>
                                            </div>
                                            <div class="sm:col-span-2 items-center px-2.5">
                                                <button type="submit"
                                                    disabled={buttonLoading && true} class="text-xl w-full p-2 mt-2 font-semibold text-white bg-primary-color rounded-xl bg-gradient-to-br from-lime-500 to-blue-500">{buttonLoading ? 'Loading..' : 'Save'}</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            </div>
        </>)
}

export default Contacts




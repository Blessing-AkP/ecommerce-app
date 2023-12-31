import React from 'react'
import BreadCrump from '../components/BreadCrump';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const ForgotPassword = () => {
  return (
    <>
        <Meta title={"BgStore | Reset Password"} />
        <BreadCrump title="Password Reset" />
        <Container class1='login-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <div className='login-card'>
                        <h3 className='text-center mb-3'>Reset Your Password</h3>
                        <p className='text-center mb-3 mt-1'>We will send you an email to reset your password</p>
                        <form action='' className='d-flex flex-column gap-15'>
                            <CustomInput
                                name='email'
                                type='email'
                                placeholder='Email'
                            />
                            <div className='mt-3 d-flex flex-column justify-content-center align-items-center gap-15'>
                                <button className='button border-0 login-btn' type='submit'>Submit</button>
                                <Link to="/login" className='fs-6'>Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default ForgotPassword
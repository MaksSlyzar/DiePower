import React, {useState} from 'react'
import MyVerticallyCenteredModal from "./AuthModalForm";

export default function Modal(){
    const [modalShow, setModalShow] = React.useState(false);
    const [state, setState] = useState({
        email: '',
        password: '',
        password_confirmation: '',
        name: '',
        errors: {
            email: '',
            password: '',
            password_confirmation: '',
            name: ''
        }
    })
    const [step, setStep] = useState(0)

    const onChange = (e) => {
        const {name, value} = e.target
        const errors = {...state.errors}
        switch (name) {
            case "email":
                errors.email = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(value) ? '' : 'Invalid email'
                break
            case "password":
                errors.password = value.length < 6 ? 'Minimum 6 symbols required' : ''
                break
            case "name":
                errors.name = value.length < 2 ? 'Minimum 2 symbols required' : ''
                break
            case "repassword":
                errors.password_confirmation = value !== state.password ? 'Passwords not the same' : ''
                break
        }

        setState({...state, [name]: value, errors})
    }
    const setNewStep = (num) => {
        setStep(num)
        setState({
            email: '',
            name: '',
            password: '',
            password_confirmation: '',
            errors: {
                email: '',
                password: '',
                password_confirmation: '',
                name: ''
            }
        })
    }

    const title = step === 0  ? 'Sign In' : step === 1 ? 'Sign Up' : step === 2 ? 'Reset password' : 'Setting new password'
    const btnText = step === 0  ? 'Sign In' : step === 1 ? 'Sign Up' : step === 2 ? 'Reset' : 'Set'

    const hideModal = () => {
        setModalShow(false)
        setState({
            email: '',
            password: '',
            password_confirmation: '',
            name: '',
            errors: {
                email: '',
                password: '',
                password_confirmation: '',
                name: ''
            }
        })
    }
    return <>
        <button className="btn green-btn" style={{color: '#fff', background: 'transparent', border: '1px solid #fff', marginLeft: 10}}
                onClick={() => setModalShow(true)}
        >
            Sign in
        </button>
        <MyVerticallyCenteredModal
            state={state}
            onChange={onChange}
            step={step}
            setNewStep={setNewStep}
            show={modalShow}
            onHide={hideModal}
            title={title}
            btnText={btnText}
        />
    </>
}

import AuthForm from "./AuthForm";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {useState, useEffect} from 'react'


const MySwal = withReactContent(Swal);

export default function AuthPopup() {
    // const [titleText, setTitleText] = useState('Sign In')
    const [state, setState] = useState({
        email: '',
        password: '',
        repassword: '',
        errors: {
            email: '',
            password: '',
            repassword: ''
        }
    })
    const [step, setStep] = useState(0)


    const title = step === 0  ? 'Sign In' : step === 1 ? 'Sign Up' : step === 2 ? 'Reset password' : 'Setting new password'
    const btnText = step === 0  ? 'Sign In' : step === 1 ? 'Sign Up' : step === 2 ? 'Reset' : 'Set'

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
            case "repassword":
                errors.repassword = value !== state.password ? 'Passwords not the same' : ''
                break
        }

        setState({...state, [name]: value, errors})
    }
    const setNewStep = (num) => {
        setStep(num)
        setState({
            email: '',
            password: '',
            repassword: '',
            errors: {
                email: '',
                password: '',
                repassword: '',
            }
        })
    }

    useEffect(() => {
        let titleElem = document.getElementById('swal2-title')
        if(titleElem){
            titleElem.textContent = title
        }
    }, [title])

    useEffect(() => {
        let btnElem = document.getElementsByClassName('swal2-confirm')[0]
        if(btnElem){
            btnElem.textContent = btnText
        }
    }, [btnText])

    const showModal = () => {
        MySwal.fire({
            title: title,
            html: <AuthForm onChangeState={onChange} onChangeStep={setNewStep} />,
            confirmButtonText: btnText,
            showCancelButton: true,
            focusConfirm: false,
            preConfirm: () => {
                let titleElem = document.getElementById('swal2-title')
                if(titleElem?.textContent === 'Reset password'){
                    setStep(3)
                    return {last: true}
                }
               //  let titleElem = document.getElementById('swal2-title')
               //  const email = Swal.getPopup().querySelector('#email')?.value
               //  const password = Swal.getPopup().querySelector('#password')?.value
               //  const repassword = Swal.getPopup().querySelector('#repassword')?.value
               // if(titleElem.textContent === 'Reset Password'){
               //     if(!email){
               //         console.log('we here')
               //         MySwal.disableConfirmButton();
               //     }
               //     setData({...data, email})
               //     return {redirect: true, email}
               // }else if(titleElem.textContent === 'Sign Up'){
               //     if (!email || !password || !repassword) {
               //         Swal.showValidationMessage(`Please enter all data`)
               //     }
               //     return { email, password, repassword }
               // }
               // return {email, password}

            }
        })
            .then((result) => {
                if(result.value?.last){
                    MySwal.fire({
                        title: 'Setting new password',
                        html: <AuthForm st={4} onChangeStep={setNewStep} onChangeState={onChange}/>,
                        confirmButtonText: 'Set',
                        showCancelButton: true,
                        focusConfirm: false,
                    })
                    return
                }
                // if(step === 2){
                //
                // }
                setStep(0)

                // if(result.value?.redirect){
                //     MySwal.fire({
                //         title: 'Setting new password',
                //         html: <AuthForm setTitleText={setTitleText} st={4}/>,
                //         confirmButtonText: 'Set',
                //         showCancelButton: true,
                //         focusConfirm: false,
                //     })
                // }else{
                //     setTitleText('Sign in')
                // }
            })
    };

    return <>
        <button className="btn green-btn" style={{color: '#fff', background: 'transparent', border: '1px solid #fff', marginLeft: 10}}
            onClick={showModal}
        >
            Sign in
        </button>
    </>
}

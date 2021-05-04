import {useState, useEffect} from 'react'

export default function AuthForm({st, onChangeState, onChangeStep}){
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

    useEffect(() => {
        if(st){
            setStep(st)
        }
    }, [st])

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
        onChangeState(e)
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
        onChangeStep(num)
        // let title = num === 0 ? 'Sign in' : num === 1 ? 'Sign up' : 'Reset'
        // setTitleText(title)
    }

    return <div>
        {step === 0 ?
            <>
                <input
                    id="email"
                    type="email"
                    name={'email'}
                    value={state.email}
                    onChange={onChange}
                    className="swal2-input"
                    placeholder="Email"
                    style={state.errors.email ? {border: '1px solid red', marginBottom: 0} : {}}
                />
                {state.errors.email && <p style={{color: 'red'}}>{state.errors.email}</p>}
                <input
                    id="password"
                    type="password"
                    name={'password'}
                    value={state.password}
                    onChange={onChange}
                    className="swal2-input"
                    placeholder="Password"
                    style={state.errors.password ? {border: '1px solid red', marginBottom: 0} : {}}
                />
                {state.errors.password && <p style={{color: 'red'}}>{state.errors.password}</p>}
                <a href="#" style={{display: 'block'}} onClick={() => setNewStep(1)}>Don't have an account?</a>
                <a href="#" style={{display: 'block', margin: '5px 0'}} onClick={() => setNewStep(2)}>Reset password</a>
            </>
            :
            step === 1 ?
            <>
                <input
                    id="email"
                    type="email"
                    name={'email'}
                    value={state.email}
                    onChange={onChange}
                    className="swal2-input"
                    placeholder="Email"
                    style={state.errors.email ? {border: '1px solid red', marginBottom: 0} : {}}
                />
                {state.errors.email && <p style={{ color: 'red'}}>{state.errors.email}</p>}
                <input
                    id="password"
                    type="password"
                    name={'password'}
                    value={state.password}
                    onChange={onChange}
                    className="swal2-input"
                    placeholder="Password"
                    style={state.errors.password ? {border: '1px solid red', marginBottom: 0} : {}}
                />
                {state.errors.password && <p style={{color: 'red'}}>{state.errors.password}</p>}
                <input
                    id="repassword"
                    type="password"
                    name={'repassword'}
                    value={state.repassword}
                    onChange={onChange}
                    className="swal2-input"
                    placeholder="Repeat Password"
                    style={state.errors.repassword ? {border: '1px solid red', marginBottom: 0} : {}}
                />
                {state.errors.repassword && <p style={{ color: 'red'}}>{state.errors.repassword}</p>}
                <a href="#" style={{display: 'block', marginBottom: 5}} onClick={() => setNewStep(0)}>Already have an account?</a>
            </>
                :
                step === 2 ?
                <>
                    <input
                        id="email"
                        type="email"
                        name={'email'}
                        value={state.email}
                        onChange={onChange}
                        className="swal2-input"
                        placeholder="Email"
                        style={state.errors.email ? {border: '1px solid red', marginBottom: 0} : {}}
                    />
                    {state.errors.email && <p style={{ color: 'red'}}>{state.errors.email}</p>}
                    <a href="#" style={{display: 'block', marginBottom: 5}} onClick={() => setNewStep(0)}>Already have an account?</a>
                </>
                    :
                    <>
                        <input
                            id="password"
                            type="password"
                            name={'password'}
                            value={state.password}
                            onChange={onChange}
                            className="swal2-input"
                            placeholder="New Password"
                            style={state.errors.password ? {border: '1px solid red', marginBottom: 0} : {}}
                        />
                        {state.errors.password && <p style={{ color: 'red'}}>{state.errors.password}</p>}
                        <input
                            id="repassword"
                            type="password"
                            name={'repassword'}
                            value={state.repassword}
                            onChange={onChange}
                            className="swal2-input"
                            placeholder="Repeat Password"
                            style={state.errors.repassword ? {border: '1px solid red', marginBottom: 0} : {}}
                        />
                        {state.errors.repassword && <p style={{color: 'red'}}>{state.errors.repassword}</p>}
                    </>
        }

    </div>
}

import {Button, Form, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {signIn, signUp} from "../redux/actions/auth.actions";

export default function MyVerticallyCenteredModal({onHide, show, step, state, onChange, setNewStep, title, btnText}) {
    const dispatch = useDispatch()

    const submitForm = () => {
        const {email, password, password_confirmation, name} = state
        switch (step) {
            case 0:
                if(email && password){
                    dispatch(signIn({email, password}))
                }
                break
            case 1:
                if(email && password && password_confirmation && name){
                    dispatch(signUp({email, password, name, password_confirmation}))
                }
                break
            case 2:
                break
        }
    }

    const isDisable = () => {
        return state.errors.email || state.errors.password || state.errors.password_confirmation || state.errors.name
    }
    return (
        <Modal
            onHide={onHide}
            show={show}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {step === 0 ?
                    <>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    name={"email"}
                                    type="email"
                                    placeholder="Enter email"
                                    value={state.email}
                                    onChange={onChange}
                                    isInvalid={!!state.errors.email}
                                />
                                {state.errors.email && <Form.Control.Feedback type="invalid">
                                    {state.errors.email}
                                </Form.Control.Feedback>}
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    name={"password"}
                                    type="password"
                                    placeholder="Password"
                                    value={state.password}
                                    onChange={onChange}
                                    isInvalid={!!state.errors.password}
                                />
                                {state.errors.password && <Form.Control.Feedback type="invalid">
                                    {state.errors.password}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Form>
                        <p onClick={() => setNewStep(1)} style={{cursor: 'pointer', color: '#042855', marginBottom: 0}}>Don't have an account?</p>
                        <p onClick={() => setNewStep(2)} style={{cursor: 'pointer', color: '#042855'}}>Forgot password?</p>
                    </>
                    :
                    step === 1 ?
                        <>
                            <Form>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter name"
                                        value={state.name}
                                        name={"name"}
                                        onChange={onChange}
                                        isInvalid={!!state.errors.name}
                                    />
                                    {state.errors.name && <Form.Control.Feedback type="invalid">
                                        {state.errors.name}
                                    </Form.Control.Feedback>}
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name={"email"}
                                        value={state.email}
                                        onChange={onChange}
                                        isInvalid={!!state.errors.email}
                                    />
                                    {state.errors.email && <Form.Control.Feedback type="invalid">
                                        {state.errors.email}
                                    </Form.Control.Feedback>}
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name={"password"}
                                        placeholder="Password"
                                        value={state.password}
                                        onChange={onChange}
                                        isInvalid={!!state.errors.password}
                                    />
                                    {state.errors.password && <Form.Control.Feedback type="invalid">
                                        {state.errors.password}
                                    </Form.Control.Feedback>}
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Repeat password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name={"password_confirmation"}
                                        placeholder="Repeat Password"
                                        value={state.password_confirmation}
                                        onChange={onChange}
                                        isInvalid={!!state.errors.password_confirmation}
                                    />
                                    {state.errors.password_confirmation && <Form.Control.Feedback type="invalid">
                                        {state.errors.password_confirmation}
                                    </Form.Control.Feedback>}
                                </Form.Group>
                            </Form>
                            <p onClick={() => setNewStep(0)} style={{cursor: 'pointer', color: '#042855'}}>Already have an account?</p>
                        </>
                        :
                        step === 2 ?
                            <>
                                RES
                            </>
                            :
                            <>
                                Pass
                            </>
                }

            </Modal.Body>
            <Modal.Footer>
                <Button
                    disabled={isDisable()}
                    onClick={submitForm}
                >
                    {btnText}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

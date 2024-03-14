import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {IAuth} from "../interfaces";
import {authActions} from "../redux";

const Login = () => {

    const {register, handleSubmit} = useForm<IAuth>();
    const {loginError} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const login: SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.login({user}));
        if (requestStatus === 'fulfilled') {
            navigate('/cars')
        }
    }

    return (
        <div>
            {loginError && <h5>{loginError}</h5>}
            <form onSubmit={handleSubmit(login)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>Login</button>
            </form>
        </div>
    );
};

export {Login};
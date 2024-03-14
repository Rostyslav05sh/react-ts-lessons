import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../hooks";
import {IAuth} from "../interfaces";
import {authActions} from "../redux";
import {useNavigate} from "react-router-dom";

const Register = () => {

    const {register, handleSubmit, reset} = useForm<IAuth>();
    const {registerError} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const reg: SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.register({user}));
        if (requestStatus === 'fulfilled') {
            navigate('/login')
        }
    }


    return (
        <div>
            {registerError && <h5>{registerError}</h5>}
            <form onSubmit={handleSubmit(reg)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>Register</button>
            </form>
        </div>
    );
};

export {Register};
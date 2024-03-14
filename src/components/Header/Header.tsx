import {Link} from "react-router-dom";
import css from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authService} from "../../services";
import {authActions} from "../../redux";
import {useEffect} from "react";

const Header = () => {

    const {currentUser} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const access = authService.getAccessToken()

    useEffect(() => {
    if (access && !currentUser) {
        dispatch(authActions.me)
    }
    }, []);

    return (
        <div className={css.Header}>
            <h1>Cars</h1>
            <div>
                {
                    currentUser?
                        <div>{currentUser.username} -- {currentUser.last_login}</div>
                        :
                <div className={css.HeaderBox}>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
                </div>
                }

            </div>
        </div>
    );
};

export {Header};
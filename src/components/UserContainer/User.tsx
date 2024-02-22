import {FC} from "react";
import {IUser} from "../../interfaces";
import {useLocation, useNavigate} from "react-router-dom";
import {useAppLocation} from "../../hooks";

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user}) => {

    const {id, name} = user;

    const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={() => navigate(id.toString(), {state: {user}})}>Detail</button>
        </div>
    );
};

export {User};
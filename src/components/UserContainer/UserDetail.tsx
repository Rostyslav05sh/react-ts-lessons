import {FC} from "react";
import {IUser} from "../../interfaces";

interface IProps {
    userDetails: IUser
}

const UserDetail:FC<IProps> = ({userDetails}) => {

    const {id, name, username, email} = userDetails;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
        </div>
    );
};

export {UserDetail};
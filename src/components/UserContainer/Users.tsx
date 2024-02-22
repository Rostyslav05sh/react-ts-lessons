import {FC, useEffect, useState} from "react";
import {userService} from "../../services";
import {User} from "./User";
import {IUser} from "../../interfaces";

interface IProps {

}

const Users: FC<IProps> = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};
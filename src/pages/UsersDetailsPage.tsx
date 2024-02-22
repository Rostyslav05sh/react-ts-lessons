import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {useAppLocation} from "../hooks";
import {IUser} from "../interfaces";
import {userService} from "../services";
import {UserDetail} from "../components";

const UsersDetailsPage = () => {

    const {state} = useAppLocation<{user:IUser}>();
    const [userDetails, setUserDetails] = useState<IUser>(null)
    const {id} = useParams();

    useEffect(() => {
        if (state?.user) {
            setUserDetails(state.user)
        } else {
            userService.getById(+id).then(({data}) => setUserDetails(data))
        }
    }, [id, state]);

    return (
        <div>
            {userDetails && <UserDetail userDetails={userDetails}/>}
        </div>
    );
};

export {UsersDetailsPage};
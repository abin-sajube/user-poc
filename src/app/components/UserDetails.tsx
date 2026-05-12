import { User } from "../types/user";

interface UserProp{
    user:User
}

export default function UserDetails({
    user,
}:UserProp){
    return(
        <div>
                <h2>{user.name}</h2>
                <p><strong>Email:</strong>{user.email}</p>
                <p><strong>Phone:</strong>{user.phone}</p>
        </div>
    );
}
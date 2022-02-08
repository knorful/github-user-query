import UserCard from "./UserCard";
import "../stylesheets/UserCardList.css";

const UserCardList = (props) => {
    return (
        <div id="UserCardList">
            {props.users.map((user, i) => {
                return <UserCard key={user + i} user={user} />
            })}
        </div>
    )
}

export default UserCardList;
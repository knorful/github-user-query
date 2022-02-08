import '../stylesheets/UserCard.css'
const UserCard = (props) => {
    console.log(props.user)
    return (
        <div id="UserCard">
            <img src={props.user.avatar_url} alt="profile pic" />
            <p class="labels">username: </p>
            <p>{props.user.login}</p>
            <p class="labels">name: </p>
            <p>{props.user.name}</p>
            <p class="labels">bio:</p>
            <p>{props.user.bio}</p>
            <p class="labels">repo: </p>
            <p>{props.user.html_url}</p>
        </div>
    )
}

export default UserCard;
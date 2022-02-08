import "../stylesheets/SearchForm.css"

const SearchForm = (props) => {

    return (
        <form id="SearchForm" onSubmit={props.onSubmit}>
            <input
                placeholder='Enter Username'
                type="text"
                onChange={props.onHandleUsernameChange}
                value={props.name}
            />
            <input
                type="submit"
                value="Submit"
            />
        </form>
    )
}

export default SearchForm;
const axios = require('axios');

const getGithubUser = (username) => {
    const githubUser = axios.get(`https://api.github.com/users/${username}`)
        .then(res => res.data)

    return githubUser;
}

export default getGithubUser;
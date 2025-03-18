async function getProjects() {
    const response = await fetch('https://api.github.com/users/octocat/repos');
    const data = await response.json();
    return data;
}

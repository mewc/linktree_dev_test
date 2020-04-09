export const get = (filename) => {
    //todo change this from fetch to API call handler for backend (eg axios)
    return fetch(filename)
    .then((data) => {
        return data.json()
    })
}
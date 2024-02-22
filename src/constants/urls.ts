const baseURL = 'https://jsonplaceholder.typicode.com/'

const users = '/users'
const posts = '/posts'

const urls = {
    cars: {
        base: users,
        ById: (id:number) => `${users}/${id}`
    },
    posts: {
        base: posts,
        ById: (id:number) => `${posts}/${id}`
    }
}

export {
    baseURL,
    urls
}
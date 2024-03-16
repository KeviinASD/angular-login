export interface User{
    id: number,
    firstname: string,
    lastname: string,
    github_name: string,
    email: string,
    rol: string,
    pais: string,
    comments: number,
    projects: number,
    downloads: number
}

export interface IUserLogin{
    email: string,
    password: string,
}
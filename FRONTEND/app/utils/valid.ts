import { EMAIL_REGEXP, GITHUB_REGEXP, NUMBER_REGEXP } from "./consts";

export const isEmailValid = (email: string) => EMAIL_REGEXP.test(email)
export const isPasswordValid = (password: string) => password.length >= 8 && password.length <= 32
export const isGithub = (github: string) => GITHUB_REGEXP.test(github)
export const isNumber = (number: string) => number.match(NUMBER_REGEXP)?.length === 9
export const isDefaultValid = (str: string) => str.length >= 3 && str.length <= 64

export const registerValid = (
    name: string,
    surname: string,
    email: string,
    password: string,
    github: string,
    number: string
) => {
    if (
        number.length === 16 &&
        name.length > 3 &&
        surname.length > 3 &&
        isEmailValid(email) &&
        isPasswordValid(password) &&
        isGithub(github)
    ) {
        return true
    }
    return false
}
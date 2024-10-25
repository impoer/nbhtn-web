declare module 'jwt-decode' {
    export function jwtDecode(token: string): any;
    export class InvalidTokenError extends Error {}
}
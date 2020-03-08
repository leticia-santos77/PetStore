 export const TOKEN_KEY = 'Authorization';
 export const isAuthenticated = () => true;
 export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
 export const login = token => {
     sessionStorage.setItem(TOKEN_KEY,token);
 };
 export const logout = () => {
     sessionStorage.removeItem(TOKEN_KEY);
 }
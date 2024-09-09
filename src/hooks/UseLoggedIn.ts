import Cookies from "cookies-ts"
export const UseLoggedIn = () => {
    const cookies = new Cookies();  
    const accessToken = cookies.get("access-token");
    if(accessToken){
        return true
    }
  return false;
};

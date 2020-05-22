export const isAuthenticated = request =>{
    if(!request.user){
        throw Error("wrong User information");
    }
    return ;
}
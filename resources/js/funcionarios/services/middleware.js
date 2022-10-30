export default {
    auth(to, from, next) {
        const token = localStorage.getItem("myauth_token");
        
        if (!token) {
            next("/funcionarios");
        }
        next();
    },
};

export default {
    auth(to, from, next) {
        const token = localStorage.getItem("myauth_token");
        console.log(token);
        if (!token) {
            next("/funcionarios");
        }
        next();
    },
};

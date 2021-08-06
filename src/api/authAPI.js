import instance from "./axios"
const authAPI ={
    signin (user){
        const url = `/664/signin`;
        return instance.post(url, user);
    },
    signup (user) {
        const url = `/signup`;
        return instance.post(url, user);
    }
}
export default authAPI
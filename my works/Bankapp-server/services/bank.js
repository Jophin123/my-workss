let data = {
    jo: { username: "jo", password: "abc123", accno: "1234", balance: 1000, history: [] },
    amal: { username: "amal", password: "amal123", accno: "135", balance: 5000, history: [] },
    sebu: { username: "sebu", password: "sebu123", accno: "1357", balance: 6000, history: [] },
    raju: { username: "raju", password: "raju123", accno: "1347", balance: 7000, history: [] },

}
let currentUser;
function getusers() {
    return data;
}
function addUser(username, password, accno) {
    data[username] = { username, password, accno,history:[], balance: 0 };
    
}
function setCurrentUser(username){
    currentuser=username;
}
function getCurrentUser(){
    return currentuser;
}
module.exports = {
    getusers: getusers,
    addUser:addUser,
   // setCurrentUser:setCurrentUser,
    //getCurrentUser:getCurrentUser,
}
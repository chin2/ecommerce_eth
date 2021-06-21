import web3 from 'web3';
import ABI from "./Abi"
const contractaddress = '0x6507822651D42a2f5562c492D59f5FfDAD9A0191';
export const logingas = "0x4ee4bE696fc03ce860Fd0DE51E7132bE05f958d6"

export let Web3 = new web3('http://localhost:7545');
let API = new Web3.eth.Contract(ABI, contractaddress);


export async function getUserCountFunc() {
    const value = await API.methods.getUserCount().call();
    return value;
}
export async function getOrdersCountFunc() {
    const value = await API.methods.getOrdersCount().call()
    return value;
}


export async function OrderDetails() {
    var arr = [];
    const value = await API.methods.getOrdersCount().call()
    for (let i = 0; i < value; i++) {
        var temp = await API.methods.o_list(i).call()
        if (temp.email == localStorage.getItem("username")) {
            arr.push(temp)
        }
    }
    console.log(arr);
    return arr;
}

export async function TotalOrderDetails() {
    var arr = [];
    const value = await API.methods.getOrdersCount().call()
    for (let i = 0; i < value; i++) {
        var temp = await API.methods.o_list(i).call()
        arr.push(temp)
    }
    console.log(arr);
    return arr;
}

export async function register_order(email, transactionHash, cost, bookName, sender, receiver, status, gasused, image) {
    await API.methods.order_list(email, transactionHash, cost, bookName, sender, receiver, status, gasused, image).send({ from: logingas, gas: '3000000' })
}

export async function getProfile() {
    const value = await API.methods.profileDetails(localStorage.getItem("username")).call();
    console.log(value)
    localStorage.setItem("userid", value.ad)
    return value;
}

export async function login(username, password) {
    console.log(username, password)
    try {
        await API.methods.user_login_verfication(username, password).send({ from: logingas, gas: '3000000' })
        localStorage.setItem("username", username)
            // http://localhost:3000/
        window.location.href = "http://localhost:3000/home"
    } catch (e) {
        alert((String(e).split(":"))[3])
    }
}

export async function register(count, username, address, phonenumber, password) {
    const eth_address = await Web3.eth.getAccounts()
        // console.log(eth_address[count])
        // console.log(username, address, phonenumber, password)

    try {
        console.log(await API.methods.register_(eth_address[count], username, password, address, phonenumber).send({ from: eth_address[count], gas: '3000000' }))
        window.location.href = "http://localhost:3000/login"
    } catch (e) {
        alert((String(e).split(":"))[3])
    }
    // console.log("signup Successfully")
    // API.methods.register_(username, address, phonenumber, password);
}



// export async function getOwner(){

//     return await API.methods.getCurrentOwner().call();

// }

// export async function setOwnerTransaction(buyer,owner){

//  return await API.methods.changeOwner(buyer).send({from:owner})
// }

export { API };

// export {
//     API,
//     Web3,
//     getAccount,
//     getOwner,
// };
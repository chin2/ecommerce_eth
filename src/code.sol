// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Storage {
    uint256 number;
    address public Owner;
    string secret_key;
    uint256 public usercount=0;
    uint256 public orderscount=0;
    mapping(uint256=>userRegister) public register;
    mapping(uint256=>orderList) public o_list;    
    constructor(){
        Owner = msg.sender;
        secret_key = "thala";
    }
    struct orderList{
        string email;
        string transactionHash;
        string cost;
        string bookName;
        address sender;
        address receiver;
        
        bool status;
        uint256 gasused;
        string image;
    }
    struct userRegister{
        address userid;
        string email;
        string password;
        string delivery_address;
        string mobno;
    }
    modifier isOwner(){
            require(msg.sender==Owner,"you are not authorized");
            _;
     }
    modifier isUser(string memory email){
     bool flag=false;
     
       for(uint256 i=0;i<usercount;i++){
           if( (keccak256(bytes(register[i].email)) ==keccak256(bytes(email)))){
               flag=true;
               
           }
       }
        if(flag==true){
            _;
        }
        else{
          revert("User doesnt exit");
        }
    }
    modifier isRigisterValid(address sender,string memory email){
         bool flag= false;
     
       for(uint256 i=0;i<usercount;i++){
           if(register[i].userid==sender || (keccak256(bytes(register[i].email)) ==keccak256(bytes(email)))){
               flag=true;
           }
       }
       if(flag==true){
           revert("already people with address present");
       }
       else{
           
            _;
       }
       
   }
    function register_(address userid,string memory email, string memory password, string memory delivery_address,string memory mobno)  public isRigisterValid(userid,email) {
            uint256 temp = usercount;
            register[temp] = userRegister(userid,email,password,delivery_address,mobno);
            usercount++;
     }
    function getUserCount() public view returns (uint256){
         return usercount;
     }
    function getOrdersCount() public view returns(uint256){
         return orderscount;
     }
    function adminLogin(address userid, string memory password) public view returns (bool value) {
           if(userid==Owner && (keccak256(bytes(password))==keccak256(bytes(secret_key))) ){
               return true;
           }
           else{
               return false;
           }
     }
    function profileDetails(string memory email) public view returns(address ad , string memory phonenumber,string memory v_address){
        for(uint256 i;i<usercount;i++) {
         if(keccak256(bytes(register[i].email))== keccak256(bytes(email))){
           return (
               register[i].userid,
               register[i].mobno,
               register[i].delivery_address
               );
         } 
     }          
     }
    function user_login_verfication(string memory email, string memory password) public view  {
    bool flag=false;
     for(uint256 i;i<usercount;i++) {
         if(keccak256(bytes(register[i].email))== keccak256(bytes(email)) && keccak256(bytes(register[i].password))==keccak256(bytes(password))){
                  flag=true;
         }
     }
     
     if(flag==false){
          revert("Username and Password mismatch !!!");   
     }
     else{
       
     }
    }
    function order_list(string memory email,string memory transactionHash,string memory cost,string memory bookName,address sender, address receiver,bool status,uint256 gasused,string memory image) public isUser(email){
        uint256 temp=orderscount;
        o_list[temp]=orderList(email,transactionHash,cost,bookName,sender,receiver,status,gasused,image);
        orderscount++;
    }
    function retrieve() public view returns (address){
        return Owner;
    }
}
const ABI = [{
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "Owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "userid",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "password",
                "type": "string"
            }
        ],
        "name": "adminLogin",
        "outputs": [{
            "internalType": "bool",
            "name": "value",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getOrdersCount",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getUserCount",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "o_list",
        "outputs": [{
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "transactionHash",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "cost",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "bookName",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "status",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "gasused",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "image",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "transactionHash",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "cost",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "bookName",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "status",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "gasused",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "image",
                "type": "string"
            }
        ],
        "name": "order_list",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "orderscount",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "string",
            "name": "email",
            "type": "string"
        }],
        "name": "profileDetails",
        "outputs": [{
                "internalType": "address",
                "name": "ad",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "phonenumber",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "v_address",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "register",
        "outputs": [{
                "internalType": "address",
                "name": "userid",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "password",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "delivery_address",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "mobno",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "userid",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "password",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "delivery_address",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "mobno",
                "type": "string"
            }
        ],
        "name": "register_",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "retrieve",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "password",
                "type": "string"
            }
        ],
        "name": "user_login_verfication",
        "outputs": [],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "usercount",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }
]
export default ABI;
export const asset1155Abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "baseUri",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "id",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "initialPolicy",
        type: "tuple",
        internalType: "struct Asset1155.Policy",
        components: [
          {
            name: "transferable",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "requiresLiveness",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "issuedAt",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "validFrom",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "validTo",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "issuer",
            type: "address",
            internalType: "address",
          },
          {
            name: "livenessVerifier",
            type: "address",
            internalType: "address",
          },
        ],
      },
      {
        name: "initialMetadataCommitment",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "id",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "useFrom",
    inputs: [
      {
        name: "holder",
        type: "address",
        internalType: "address",
      },
      {
        name: "id",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "livenessSignature",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "check",
    inputs: [
      {
        name: "holder",
        type: "address",
        internalType: "address",
      },
      {
        name: "id",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "livenessSignature",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "configureAsset",
    inputs: [
      {
        name: "id",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "newAdmins",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "newVerifiers",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "updatePolicy",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "p",
        type: "tuple",
        internalType: "struct Asset1155.Policy",
        components: [
          {
            name: "transferable",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "requiresLiveness",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "issuedAt",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "validFrom",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "validTo",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "issuer",
            type: "address",
            internalType: "address",
          },
          {
            name: "livenessVerifier",
            type: "address",
            internalType: "address",
          },
        ],
      },
      {
        name: "updateCommitment",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "commitment",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "supplyDelta",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "mintData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
      {
        name: "id",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
] as const;


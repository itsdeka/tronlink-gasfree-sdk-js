import { ChainInfo } from '../types';

export const TRON_NILE_CREATION_CODE =
  '0x60a06040908082526103e5803803809161001982856101d6565b833981019082818303126101d2576100308161020d565b91602091828101519060018060401b0382116101d2570181601f820112156101d25780519061005e8261022a565b9261006b875194856101d6565b8284528483830101116101d25783905f5b8381106101be5750505f9183010152823b1561017a5780516100b3575b50506080525161013c90816102a982396080518160180152f35b8351635c60da1b60e01b81529082826004816001600160a01b0388165afa918215610170575f9261012d575b50905f80838561011c9695519101845af4903d15610124573d6101018161022a565b9061010e885192836101d6565b81525f81943d92013e610245565b505f80610099565b60609250610245565b90918382813d8311610169575b61014481836101d6565b810103126101665750905f8061015d61011c959461020d565b939450506100df565b80fd5b503d61013a565b85513d5f823e3d90fd5b835162461bcd60e51b815260048101839052601b60248201527f626561636f6e2073686f756c64206265206120636f6e747261637400000000006044820152606490fd5b81810183015185820184015285920161007c565b5f80fd5b601f909101601f19168101906001600160401b038211908210176101f957604052565b634e487b7160e01b5f52604160045260245ffd5b516001600160a81b03811681036101d2576001600160a01b031690565b6001600160401b0381116101f957601f01601f191660200190565b9061026c575080511561025a57805190602001fd5b604051630a12f52160e11b8152600490fd5b8151158061029f575b61027d575090565b604051639996b31560e01b81526001600160a01b039091166004820152602490fd5b50803b1561027556fe60806040819052635c60da1b60e01b81526020816004817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9081156100ae575f91610056575b506100e8565b6020903d82116100a6575b601f8201601f1916810167ffffffffffffffff8111828210176100925761008c9350604052016100b9565b5f610050565b634e487b7160e01b84526041600452602484fd5b3d9150610061565b6040513d5f823e3d90fd5b602090607f1901126100e4576080516001600160a81b03811681036100e4576001600160a01b031690565b5f80fd5b5f808092368280378136915af43d82803e15610102573d90f35b3d90fdfea26474726f6e5822122019fba3a984dfef08920adc4d0e531dbd369df1dec237bfb02ce668f5d8e2704064736f6c63430008140033';

export const TRON_CREATION_CODE =
  '0x60a06040908082526103e5803803809161001982856101d6565b833981019082818303126101d2576100308161020d565b91602091828101519060018060401b0382116101d2570181601f820112156101d25780519061005e8261022a565b9261006b875194856101d6565b8284528483830101116101d25783905f5b8381106101be5750505f9183010152823b1561017a5780516100b3575b50506080525161013c90816102a982396080518160180152f35b8351635c60da1b60e01b81529082826004816001600160a01b0388165afa918215610170575f9261012d575b50905f80838561011c9695519101845af4903d15610124573d6101018161022a565b9061010e885192836101d6565b81525f81943d92013e610245565b505f80610099565b60609250610245565b90918382813d8311610169575b61014481836101d6565b810103126101665750905f8061015d61011c959461020d565b939450506100df565b80fd5b503d61013a565b85513d5f823e3d90fd5b835162461bcd60e51b815260048101839052601b60248201527f626561636f6e2073686f756c64206265206120636f6e747261637400000000006044820152606490fd5b81810183015185820184015285920161007c565b5f80fd5b601f909101601f19168101906001600160401b038211908210176101f957604052565b634e487b7160e01b5f52604160045260245ffd5b516001600160a81b03811681036101d2576001600160a01b031690565b6001600160401b0381116101f957601f01601f191660200190565b9061026c575080511561025a57805190602001fd5b604051630a12f52160e11b8152600490fd5b8151158061029f575b61027d575090565b604051639996b31560e01b81526001600160a01b039091166004820152602490fd5b50803b1561027556fe60806040819052635c60da1b60e01b81526020816004817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9081156100ae575f91610056575b506100e8565b6020903d82116100a6575b601f8201601f1916810167ffffffffffffffff8111828210176100925761008c9350604052016100b9565b5f610050565b634e487b7160e01b84526041600452602484fd5b3d9150610061565b6040513d5f823e3d90fd5b602090607f1901126100e4576080516001600160a81b03811681036100e4576001600160a01b031690565b5f80fd5b5f808092368280378136915af43d82803e15610102573d90f35b3d90fdfea26474726f6e58221220309a2919b7a1b203f1a7a1c544a7d671bb94b0adf8a39e4c9b6eeb6d03939ffe64736f6c63430008140033';

export const TRON_SHASTA_CREATION_CODE =
  '0x60a06040908082526104b8803803809161001982856102a9565b833981019082818303126102a557610030816102e0565b91602091828101519060018060401b0382116102a5570181601f820112156102a55780519061005e826102fd565b9261006b875194856102a9565b8284528483830101116102a55783905f5b8381106102915750505f9183010152823b15610271577fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b038581169182179092558551635c60da1b60e01b8082529193928582600481885afa918215610267575f92610230575b50813b156102175750508551837f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e5f80a28251156101f857508390600487518095819382525afa9182156101ee575f926101ab575b50905f8083856101889695519101845af4903d156101a2573d61016d816102fd565b9061017a885192836102a9565b81525f81943d92013e610318565b505b6080525161013c908161037c82396080518160180152f35b60609250610318565b90918382813d83116101e7575b6101c281836102a9565b810103126101e45750905f806101db61018895946102e0565b9394505061014b565b80fd5b503d6101b8565b85513d5f823e3d90fd5b935050505034610208575061018a565b63b398979f60e01b8152600490fd5b8751634c9c8ce360e01b81529116600482015260249150fd5b90918682813d8311610260575b61024781836102a9565b810103126101e45750610259906102e0565b905f6100f6565b503d61023d565b88513d5f823e3d90fd5b8351631933b43b60e21b81526001600160a01b0384166004820152602490fd5b81810183015185820184015285920161007c565b5f80fd5b601f909101601f19168101906001600160401b038211908210176102cc57604052565b634e487b7160e01b5f52604160045260245ffd5b516001600160a81b03811681036102a5576001600160a01b031690565b6001600160401b0381116102cc57601f01601f191660200190565b9061033f575080511561032d57805190602001fd5b604051630a12f52160e11b8152600490fd5b81511580610372575b610350575090565b604051639996b31560e01b81526001600160a01b039091166004820152602490fd5b50803b1561034856fe60806040819052635c60da1b60e01b81526020816004817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9081156100ae575f91610056575b506100e8565b6020903d82116100a6575b601f8201601f1916810167ffffffffffffffff8111828210176100925761008c9350604052016100b9565b5f610050565b634e487b7160e01b84526041600452602484fd5b3d9150610061565b6040513d5f823e3d90fd5b602090607f1901126100e4576080516001600160a81b03811681036100e4576001600160a01b031690565b5f80fd5b5f808092368280378136915af43d82803e15610102573d90f35b3d90fdfea26474726f6e58221220b3a0a0f4043f8fe355d62319dafed2ba5d611d7bb6dfe21d6d935af1510ce27964736f6c63430008140033';

export enum TRON_CHAIN_ID {
  MAINNET = Number('0x2b6653dc'),
  SHASTA = Number('0x94a9059e'),
  NILE = Number('0xcd8690dc'),
}

export const DefaultChainInfoMap: Record<TRON_CHAIN_ID, ChainInfo> = {
  [TRON_CHAIN_ID.MAINNET]: {
    chainId: TRON_CHAIN_ID.MAINNET,
    gasFreeController: 'TFFAMQLZybALaLb4uxHA9RBE7pxhUAjF3U',
    beacon: 'TSP9UW6FQhT76XD2jWA6ipGMx3yGbjDffP',
    creationCode: TRON_CREATION_CODE,
  },
  [TRON_CHAIN_ID.SHASTA]: {
    chainId: TRON_CHAIN_ID.SHASTA,
    gasFreeController: 'TQghdCeVDA6CnuNVTUhfaAyPfTetqZWNpm',
    beacon: 'TQ1jvA3nLDMDNbJoMPLzTPoqAg8NvZ5CCW',
    creationCode: TRON_SHASTA_CREATION_CODE,
  },
  [TRON_CHAIN_ID.NILE]: {
    chainId: TRON_CHAIN_ID.NILE,
    gasFreeController: 'THQGuFzL87ZqhxkgqYEryRAd7gqFqL5rdc',
    beacon: 'TLtCGmaxH3PbuaF6kbybwteZcHptEdgQGC',
    creationCode: TRON_NILE_CREATION_CODE,
  },
};

export const PermitTransfer = [
  {
    name: 'token',
    type: 'address',
  },
  {
    name: 'serviceProvider',
    type: 'address',
  },
  {
    name: 'user',
    type: 'address',
  },
  {
    name: 'receiver',
    type: 'address',
  },
  {
    name: 'value',
    type: 'uint256',
  },
  {
    name: 'maxFee',
    type: 'uint256',
  },
  {
    name: 'deadline',
    type: 'uint256',
  },
  {
    name: 'version',
    type: 'uint256',
  },
  {
    name: 'nonce',
    type: 'uint256',
  },
];

export const EIP712Domain = [
  {
    name: 'name',
    type: 'string',
  },
  {
    name: 'version',
    type: 'string',
  },
  {
    name: 'chainId',
    type: 'uint256',
  },
  {
    name: 'verifyingContract',
    type: 'address',
  },
];

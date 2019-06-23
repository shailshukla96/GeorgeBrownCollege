const bytecode = {
	"linkReferences": {},
	"object": "60806040526000805534801561001457600080fd5b5061014c806100246000396000f3fe608060405234801561001057600080fd5b5060043610610053576000357c010000000000000000000000000000000000000000000000000000000090048063a87d942c14610058578063d09de08a14610076575b600080fd5b610060610094565b6040518082815260200191505060405180910390f35b61007e61009d565b6040518082815260200191505060405180910390f35b60008054905090565b60006001600054016000819055507fc2351cc4884da57302c206449a24bc9e99a5e066d57d3b124c7392817e79a3de60005433604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a160005490509056fea165627a7a7230582084bc75c376aec34d7c29d242940002cd4915673a3aab39b11055bad6b33988ce0029",
	"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 SSTORE CALLVALUE DUP1 ISZERO PUSH2 0x14 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x14C DUP1 PUSH2 0x24 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x53 JUMPI PUSH1 0x0 CALLDATALOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 SWAP1 DIV DUP1 PUSH4 0xA87D942C EQ PUSH2 0x58 JUMPI DUP1 PUSH4 0xD09DE08A EQ PUSH2 0x76 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x60 PUSH2 0x94 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x7E PUSH2 0x9D JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 SLOAD ADD PUSH1 0x0 DUP2 SWAP1 SSTORE POP PUSH32 0xC2351CC4884DA57302C206449A24BC9E99A5E066D57D3B124C7392817E79A3DE PUSH1 0x0 SLOAD CALLER PUSH1 0x40 MLOAD DUP1 DUP4 DUP2 MSTORE PUSH1 0x20 ADD DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 PUSH1 0x0 SLOAD SWAP1 POP SWAP1 JUMP INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 DUP5 0xbc PUSH22 0xC376AEC34D7C29D242940002CD4915673A3AAB39B110 SSTORE 0xba 0xd6 0xb3 CODECOPY DUP9 0xce STOP 0x29 ",
	"sourceMap": "25:476:0:-;;;111:1;98:14;;25:476;8:9:-1;5:2;;;30:1;27;20:12;5:2;25:476:0;;;;;;;"
}

module.exports = bytecode;
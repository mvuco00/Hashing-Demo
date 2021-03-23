import crypto from "crypto";

export const mine = (req,res) => {
	let nonce = 1;
	let difficulty=4;
	let prev_hash='000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f';
	let block_number = 10;
	let data = 'A->B-10'
	let text='';

	for(let i=1; i<100000; i++){
		text = block_number.toString()+data+prev_hash+nonce.toString();
		let hash = crypto.createHash("sha256").update(text).digest("hex")
		let sequence = '0'.repeat(difficulty)
		if(hash.substring(0,difficulty)===sequence){			
			console.log('MINED BLOCK',nonce, hash)
			i=100000;
			return hash
		}else{
			nonce++;
			console.log(nonce)
		}
	}
	
}	



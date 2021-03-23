import crypto from "crypto";

export const mine = (req,res) => {
	let nonce = 1;
	let difficulty=4;
	let prev_hash='000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f';
	let block_number = req.body.blockNumber;
	let data = req.body.data.text;
	let text='';

	for(let i=1; i<200000; i++){
		text = block_number.toString()+data+prev_hash+nonce.toString();
		let hash = crypto.createHash("sha256").update(text).digest("hex")
		let sequence = '0'.repeat(difficulty)
		if(hash.substring(0,difficulty)===sequence){			
			console.log('MINED BLOCK',nonce, hash)
			i=200000;
			return res.status(200).send({ hash: hash, nonce:nonce });
		}else if(nonce===200000){
			return res.send({hash:'This puzzle is too complicated'})
		}
		else{
			nonce++;	
		}
	}	
}	



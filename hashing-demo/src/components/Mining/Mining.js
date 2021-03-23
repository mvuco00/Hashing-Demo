import React,{useState} from 'react'
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import axios from "axios";
import "./styles.css";
import { Button } from '@material-ui/core';
import Result from '../HashingComponent/Result/Result'

const url = "http://localhost:5000/mine";

const Mining = () => {
	const [blockNumber, setBlockNumber] = useState(1)
	const [data, setData] = useState('')
	const [hash, setHash] = useState('')
	const [nonce, setNonce] = useState('')
	const [loading, setLoading] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		axios
		.post(url,{data, blockNumber}).then((res) => {
			setHash(res.data.hash);
			setNonce(res.data.nonce);
			setLoading(false);
		})
		.catch((err) => {
			setLoading(false)
		  	console.log(err);
		  
		});
		
	}

	return (
		<div className='miningComponent'>
			 <Box width="80%">
			 <form autoComplete="off" onSubmit={handleSubmit}>
				<TextField   
					id="outlined-secondary"
					label="Enter block number"
					variant="outlined"
					color="primary"
					fullWidth
					value={blockNumber}
					onChange={(e)=>setBlockNumber(parseInt(e.target.value,10))}
					style={{			
						marginTop: "10px",					
					  }}
				/>
				<TextField
					id="outlined-secondary"
					label="Enter data"
					variant="outlined"
					color="primary"
					fullWidth				
					onChange={(e) => setData({ text: e.target.value })}
					style={{			
						marginTop: "10px",					
					  }}
				/>
				<Button type='submit' style={{
						backgroundColor:'darkseagreen', 
						marginTop: "10px", 
						fontWeight:'bold', 
						color:'black'}} 
					fullWidth>Mine</Button>
				</form>			
			</Box>

			{loading?<div>Calculating the puzzle...</div>:nonce!=='' && hash!==''? (
				<>
					<Result title={'nonce'} hash={nonce}/>
					<Result title={'hash'} hash={hash}/>
				</>) : <div></div>}
		</div>
	)
}

export default Mining

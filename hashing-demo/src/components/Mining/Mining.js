import React,{useState} from 'react'
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import axios from "axios";
import "./styles.css";
import { Button } from '@material-ui/core';

const url = "http://localhost:5000/mine";

const Mining = () => {
	const [blockNumber, setBlockNumber] = useState(1)
	const [data, setData] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(blockNumber, data)
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
					onChange={(e)=>setBlockNumber(e.target.value)}
				/>
				<TextField
					id="outlined-secondary"
					label="Enter data"
					variant="outlined"
					color="primary"
					fullWidth				
					onChange={(e) => setData({ text: e.target.value })}
				/>
				<Button type='submit'>Mine</Button>
				</form>			
			</Box>
		</div>
	)
}

export default Mining

import React from "react";
import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
	const [postda, setpostda] = useState({
		name: "",
		image: "",
	});

	function handlonSubmit(e) {
		e.preventDefault();
		
		const url = `https://629e71fe3dda090f3c19d701.mockapi.io/v1/meals`;

		const userObject = {
			name: postda.name,
			email: postda.image,
		};
		axios.post(url, userObject).then((res) => {
			console.log(res.data);
		});

		this.setpostda({ name: "", image: "" });
	}

	return (
		<div>
			<h1>fruits page</h1>

			<div className="form-group">
				<label>add fruits name </label>
				<input
					type="text"
					className="form-control"
					value={postda.name}
					onChange={(e) => setpostda({ name: e.target.value })}
				/>
			</div>
			<div className="form-group">
				<label>add fruits link image </label>
				<input
					type="text"
					value={postda.image}
					onChange={(e) => setpostda({ image: e.target.value })}
					className="form-control"
				/>
			</div>
			<div className="form-group">
				<input
					type="button"
					value="Create User"
					className="btn btn-success btn-block"
					onClick={handlonSubmit}
				/>
			</div>
		</div>
	);
}

export default App;

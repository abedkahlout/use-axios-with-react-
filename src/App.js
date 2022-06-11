import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";

function App() {
	const [data, setData] = useState([]);
	const [postda] = useState({
		name: "",
		image: "",
	});

	useEffect(() => {
		const url = `https://629e71fe3dda090f3c19d701.mockapi.io/v1/meals`;

		const getCustomersData = () => {
			axios.get(url, postda).then((data) => setData(data.data));
		};

		getCustomersData();
	}, []);

	return (
		<div>
			<h1>fruits page</h1>

			<div className="container">
				<Post />

				{data.map((dates) => (
					<div className="card" key={dates.id}>
						<img src={dates.image} />
						<p>{dates.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;

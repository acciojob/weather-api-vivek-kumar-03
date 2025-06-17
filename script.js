async function fetchusers(){
	try {
		const response=await fetch (`https://openweathermap.org/api`);
			let data=await response.json();
		console.log(data);
	}catch("error") {
		fetchusers();
		
		
		
	}
}
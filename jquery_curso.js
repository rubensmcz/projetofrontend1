let h2_resultado      = document.querySelector('#h2-resultado');

$.ajax({
		url: "https://jsonplaceholder.typicode.com/comments",
		method: "GET",
		success: function(data) {
			//console.log(data);
			//console.log(data.length);
			//console.log(data.length - 1);
			//console.log(data[0]);
			//console.log(data[data.length - 1]);
			console.log(data[0].email);			
			}
})


(function(window, document) {
	const URI_POSTS = "https://jsonplaceholder.typicode.com/posts";
	const URI_USERS = "https://jsonplaceholder.typicode.com/users";

	getPosts(URI_POSTS);
	getAuthors(URI_USERS);

})(window, document);


function getPosts(URI) {
   $.getJSON(URI, function(data) {
   	console.log ('getPosts: ' + data.length) ;
   	//console.log(data.length);
   });
}


function getAuthors(URI) {
   $.getJSON(URI, function(data) {
   	console.log ('getAuthors: ' + data.length);
   	//console.log(data.length);
   });
}
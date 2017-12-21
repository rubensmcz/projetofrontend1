(function(window, document) {
	const URI_POSTS = "https://jsonplaceholder.typicode.com/posts";
	const URI_USERS = "https://jsonplaceholder.typicode.com/users";

	getPosts(URI_POSTS);
	getAuthors(URI_USERS);

})(window, document);


function getPosts(URI) {
   $.getJSON(URI, function(data) {
   	let items = [];
      $.each( data, function(key, val) {
         items.push(postDom(key,val));
      });   

      

      $( "<ul/>", {
         "class": "Artigo_Pai",
         html: items.join("")
       }).appendTo(".Post_List");

      });


}


function postDom(key, value) {
   let now = Date();
   let post = '<li class="Artigo_Filho">' + 
              '<h3>' + value.title          + '</h3>' + 
              '<p>' + value.body           + '</p>'  +
              '<span>'                    + now + '</span>'
              '</li>';

            return post
}


function getAuthors(URI) {
   $.getJSON(URI, function(data) {
   	//console.log ('getAuthors: ' + data.length);
   	//console.log(data.length);
      let items = [];
      let el = document.querySelector('.Autores_Pai');

      for(let contador in data) {
         items.push(autorDom(data[contador]))
      }
      console.log(items);
      el.innerHTML = items.join("");

   });
}

function autorDom(item) {
     let autor = '<li class="Autores_Filho">' +
                 '<div class = "bola" >' + '</div>' +
                 '<div class = "Autores_lista">' +
                    '<span>' + item.username + '</span>' + '<br>' +
                    '<span>' + item.email + '</span>' +
                  '</div>' +                          
                 '</li>';
      return autor;
}
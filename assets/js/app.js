window.addEventListener('load', function(){
	var divContenerdorPost = document.getElementById("contenedor-posts");
	var publicar = document.getElementById("btn-form-publicar");

	publicar.addEventListener('click', function(event){
		event.preventDefault();
		var mensaje = document.getElementById("mensaje-post");
		var usuario = document.getElementById("usuario");

		console.log(divContenerdorPost.hasChildNodes());
		if(divContenerdorPost.hasChildNodes()){
			var firstChild = divContenerdorPost.firstElementChild;
			divContenerdorPost.insertBefore(crearPost(mensaje.value,usuario.value),firstChild);
		}else{
			divContenerdorPost.appendChild(crearPost(mensaje.value,usuario.value));
		}
	});
});

function crearPost(mensaje,usuario){
	var div = document.createElement("div");
	div.classList.add("div-post");
	var p = document.createElement("p");
	p.appendChild(document.createTextNode(mensaje));
	var span = document.createElement("span");
	span.classList.add("span-nombre-usuario");
	span.innerText = usuario;

	div.appendChild(p);
	div.appendChild(span);

	return div;
}
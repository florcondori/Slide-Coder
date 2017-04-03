window.addEventListener('load', function(){
	var divContenerdorPost = document.getElementById("contenedor-posts");
	var publicar = document.getElementById("btn-form-publicar");

	publicar.addEventListener('click', function(event){
		event.preventDefault();
		var mensaje = document.getElementById("mensaje-post").value;
		var usuario = document.getElementById("usuario").value;
		if(usuario.trim().length!=0 && mensaje.trim().length!=0){
			if(divContenerdorPost.hasChildNodes()){
				var firstChild = divContenerdorPost.firstElementChild;
				divContenerdorPost.insertBefore(crearPost(mensaje,usuario),firstChild);
			}else{
				divContenerdorPost.appendChild(crearPost(mensaje,usuario));
			}

			document.getElementById('form-publicar').reset();
		}else{
			alert("Los dos campos son obligatorio");
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
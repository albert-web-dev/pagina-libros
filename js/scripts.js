const url = "https://www.etnassoft.com/api/v1/get/";
var auxiliar = 0;

var libros = [];
function ConsultarLibros(){
    fetch('https://www.etnassoft.com/api/v1/get/?today')
    .then(results => results.json())
    .then(resultado => {
        libros = resultado;
        //console.log(libros);
        AsignarLibros(libros);
    });
}

function AsignarLibros(consulta){
    var contenedor = document.querySelectorAll('.container__libros');
    console.log(consulta);
    do{
        //console.log(libros);
        let card = document.createElement('div');
        card.className = 'container__card'+auxiliar + ' ' + 'container__card';

        let imagen = document.createElement('img');
        imagen.className = 'container__img'+auxiliar+ ' container__img';
        imagen.src=consulta[auxiliar].thumbnail;

        let div_txt = document.createElement('div');
        div_txt.className = 'container__info'
        

        let titulo = document.createElement('h3');
        titulo.className = 'container__tituloLibro'+auxiliar;
        titulo.innerHTML = 'Titulo: ';

        let spanTitulo = document.createElement('span');
        spanTitulo.className = 'container__span';
        spanTitulo.innerHTML = consulta[auxiliar].title;

        let autor = document.createElement('h3');
        autor.className = 'container__autorLibro'+auxiliar;
        autor.innerHTML = 'Autor: ';

        let spanAutor = document.createElement('span');
        spanAutor.className = 'container__span';
        spanAutor.innerHTML = consulta[auxiliar].author;

        let genero = document.createElement('h3');
        genero.innerHTML = 'Categoría: '

        let spanNombre = document.createElement('span');
        spanNombre.className = 'container__span';
        spanNombre.innerHTML = consulta[auxiliar].categories[0].name;

        //console.log(imagen);
        contenedor[0].appendChild(card);
        //console.log(card);
        card.appendChild(imagen);
        card.appendChild(div_txt);
        div_txt.appendChild(titulo);
        div_txt.appendChild(autor);
        div_txt.appendChild(genero);

        titulo.appendChild(spanTitulo);
        autor.appendChild(spanAutor);
        genero.appendChild(spanNombre);

        auxiliar++
    }while(auxiliar <= 8)
    auxiliar = 0;
}

window.addEventListener('load', ()=>{
    ConsultarLibros();
});
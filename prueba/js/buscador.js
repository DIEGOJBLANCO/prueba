console.log ('correcto');


document.querySelector ('#boton').addEventListener('click', traerDatos());


function traerDatos(){

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'data-1.json', true);
    
    xhttp.send ();

    xhttp.onreadystatechange = function(){

        if (this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            


            let res = document.querySelector('#res');
            res.innerHTML="";

            for(let item of datos){
             

              res.innerHTML += `

              '<tr><td>${item.Id}</td></tr>'+ 
              '<tr><td>${item.Direccion}</td></tr>'+
              '<tr><td>${item.Ciudad}</td></tr>'+
              '<tr><td>${item.Telefono}</td></tr>'+
              '<tr><td>${item.Codigo_Postal}</td></tr>'+
              '<tr><td>${item.Tipo}</td></tr>'+
              '<tr><td>${item.Precio}</td></tr>'

              `

              


              

            }
        }
    }
}
// Se crea el objeto

let listaDeContactos=[
    { 
        id: 0,
        Nombre: "Valentina",
        Apellido: "Pedroza",
        Edad: 19,
        Celular: 300300300,
        Email: "valentina@gmail.com",
    }
        ]

// Se crea la función Agregar

    function AgregarContactos (id,Nombre,Apellido,Edad,Celular,Email){
        let nuevo = {
            id:id,
            Nombre: Nombre,
            Apellido: Apellido,
            Edad: Edad,
            Celular: Celular,
            Email: Email,
        }
         listaDeContactos.push(nuevo);
         console.log (listaDeContactos);    
    }
    

// Se agrega contactos

    AgregarContactos(1,"Yovanni","Pedroza",44,300300400,"yovanni@gmail.com");
    AgregarContactos(2,"Nilsa","Torres",42,300300500,"nilsa@gmail.com");
    AgregarContactos(3,"Yovanni Matias","Pedroza",9,300300600,"yovannimatias@gmail.com");

    // Se crea funcion de eleminar

    let EliminarContacto = listaDeContactos.slice (0,4);
    console.log (EliminarContacto);

// Se crea la funcion imprimir

function ImprimirContactos (listaDeContactos){
    console.log (ImprimirContactos);
}


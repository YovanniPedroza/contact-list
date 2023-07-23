// Se crea el objeto

let listaDeContactos=[
    { 
        id: 0,
        Nombre: "Valentina",
        Apellido: "Pedroza",
        Edad: 19,
        Celular: 300300300,
        Email: "valentina@gmail.com",
        Ubicación: {
            Ciudad: "Tunja",
            Dirección: "Calle 130 Carrera 20",
        }
    }
        ]

// Se crea la función Agregar

    function AgregarContactos (id,Nombre,Apellido,Edad,Celular,Email,Ciudad, Dirección){
        let nuevo = {
            id:id,
            Nombre: Nombre,
            Apellido: Apellido,
            Edad: Edad,
            Celular: Celular,
            Email: Email,
            Ciudad: Ciudad,
            Dirección: Dirección,
        }
         listaDeContactos.push(nuevo);
         console.log (listaDeContactos);    
    }
    

// Se agrega contactos

    AgregarContactos(1,"Yovanni","Pedroza",44,300300400,"yovanni@gmail.com","Pereira",">Calle 130 con 13");
    AgregarContactos(2,"Nilsa","Torres",42,300300500,"nilsa@gmail.com","Cali", "Carrera 5 calle 12");
    AgregarContactos(3,"Yovanni Matias","Pedroza",9,300300600,"yovannimatias@gmail.com", "Bogotá", "Transversal 16 calle 30");

    // Se crea funcion de eleminar

    let EliminarContacto = listaDeContactos.slice (0,4);
    console.log (EliminarContacto);

// Se crea la funcion imprimir

function ImprimirContactos (listaDeContactos){
    console.log (ImprimirContactos);
}


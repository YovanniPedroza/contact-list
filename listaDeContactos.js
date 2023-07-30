// Se crea el objeto

let listaDeContactos=[{ 
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

    function agregarContactos (id,Nombre,Apellido,Edad,Celular,Email,Ciudad, Dirección){
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
    agregarContactos(1,"Yovanni","Pedroza",44,300300400,"yovanni@gmail.com","Pereira","Calle 130 con 13");
    agregarContactos(2,"Nilsa","Torres",42,300300500,"nilsa@gmail.com","Cali", "Carrera 5 calle 12");
    agregarContactos(3,"Yovanni Matias","Pedroza",9,300300600,"yovannimatias@gmail.com", "Bogotá", "Transversal 16 calle 30");
    agregarContactos(4,"Luz","Baron",25,400300600,"luzbaron@gmail.com", "Bogotá", "Transversal 80 calle 100");

// Imprimir contactos

function imprimirConctactos(listaDeContactos){
    console.log (imprimirConctactos);
}

// Mofidicar y eliminar contactos 

const eliminados = listaDeContactos.splice (1,1,{
    id: 1,
    Nombre: "Yovanni",
    Apellido: "Pedroza",
    Edad: 50,
    Celular: 300300400,
    Email: "yovannipedroza@gmail.com",
    Ciudad: "Bogotá",
    Dirección: "Calle 130 con 13"
}
    
     );
console.log ("eliminados:", eliminados);
console.log (listaDeContactos);


// Se termina la actividad

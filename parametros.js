// parametros por default en las funciones

const actividad = function (
 nombre = 'Walter White',
 actividad = 'Enseñar Química'
) {
 console.log(`La persona ${nombre}, esta realizando la actividad $ {actividad}`)
}

actividad('Valentina', 'Aprender JavaScript')
actividad('Juan', 'Creando un sitio web')
actividad('Antonio')

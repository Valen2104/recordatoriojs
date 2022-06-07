// metodos o funciones en un objeto

const persona = {
 nombre: 'Valentina',
 trabajo: 'Desarrollador Web',
 edad: 16,
 musicaRock: true,
 mostratInformacion() {
  console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
 },
}

persona.mostratInformacion()

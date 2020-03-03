export default class Booking {
    constructor( id, nome) {
      this.id = id
      this.nome = nome
    }
  
    toString() {
      return ( `id: ${ this.id } nome: ${ this.nome }` )
    }
  }
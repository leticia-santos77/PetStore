export default class Resource {
  constructor( id, name, numberOfSeats,hasTelevision,activeRoom, creationDate) {
    this.id = id
    this.name = name
    this.numberOfSeats = numberOfSeats
    this.hasTelevision = hasTelevision
    this.activeRoom = activeRoom
    this.creationDate = creationDate
  }
  toString() {
    return ( `id: ${ this.id } name: ${ this.name } numberOfSeats: ${ this.numberOfseats } hasTelevision: ${ this.hasTelevision } activeRoom: ${ this.activeRoom } creationDate: ${this.creationDate}` )
  }
}
  
export default class Booking {
    constructor( id,resourceId, nameResource, useTv,quantityOfPeople, creationDate,date,canceled) {
      this.id = id
      this.resourceId = resourceId
      this.nameResource = nameResource
      this.useTv = useTv
      this.quantityOfPeople = quantityOfPeople
      this.creationDate = creationDate
      this.date = date;
      this.canceled = canceled;
    }
    toString() {
      return ( `id: ${ this.id } resourceId: ${ this.resourceId } nameResource: ${ this.nameResource }  useTv: ${ this.useTv } quantityOfPeople: ${ this.quantityOfPeople } creationDate: ${this.creationDate} date: ${this.date} canceled: ${this.canceled}` )
    }
  }
    
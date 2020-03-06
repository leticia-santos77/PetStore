export default class Booking {
    constructor( id, nameResource, resourceId,useTv,quantityOfPeople, creationDate,date,canceled) {
      this.id = id
      this.name = nameResource
      this.resourceId = resourceId
      this.useTv = useTv
      this.quantityOfPeople = quantityOfPeople
      this.creationDate = creationDate
      this.date = date;
      this.canceled = canceled;
    }
    toString() {
      return ( `id: ${ this.id } nameResource: ${ this.nameResource } resourceId: ${ this.resourceId } useTv: ${ this.useTv } quantityOfPeople: ${ this.quantityOfPeople } creationDate: ${this.creationDate} date: ${this.date} canceled: ${this.canceled}` )
    }
  }
    
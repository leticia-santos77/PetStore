export default class Booking {
    constructor( id,resourceId, resourceName, useTv,quantityOfPeople, creationDate,date,canceled) {
      this.id = id
      this.resourceId = resourceId
      this.resourceName = resourceName
      this.useTv = useTv
      this.quantityOfPeople = quantityOfPeople
      this.creationDate = creationDate
      this.date = date;
      this.canceled = canceled;
    }
    toString() {
      return ( `id: ${ this.id } resourceId: ${ this.resourceId } resourceName: ${ this.resourceName }  useTv: ${ this.useTv } quantityOfPeople: ${ this.quantityOfPeople } creationDate: ${this.creationDate} date: ${this.date} canceled: ${this.canceled}` )
    }
  }
    
export class Book {
  constructor(public id: number,
              public name: string,
              public year: number,
              public description: string,
              public price: number) {}

  // public clone() {
  //   return new Book(this.id, this.name, this.year, this.description, this.price);
  // }
}

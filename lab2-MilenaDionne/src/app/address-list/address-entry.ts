export class AddressEntry {
  public firstName: string;
  public lastName: string;
  public phone?: string;
  public email?: string;
  public notes?: string;
  public streetadd?: string;
  public city: string;
  public country: string;
  public postalcode?: string;


  constructor(firstName?: string, lastName?: string, phone?: string, email?: string, notes?: string, streetadd?: string, city?: string, country?: string, postalcode?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.notes = notes;
    this.streetadd = streetadd;
    this.city = city;
    this.country = country;
    this.postalcode = postalcode;
  }
}

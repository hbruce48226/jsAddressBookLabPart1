class AddressBook {
    constructor(contacts) {
        this.contacts = contacts;
    }
    add(info) { //adds new contact to end of AddressBook
        this.contacts.push(info); //this pushes the item to the end of the array
    }
    print() { //logs all of the AddressBook's contacts to the console
        console.log(this.contacts);
    }
    deleteAt(index) { //removes the contact at the given array index in this AddressBook's contacts
        this.contacts.splice(index,1);
    }
}
class Contact {
    constructor(name,email,phone,relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}
const addressBookContacts = new AddressBook([new Contact('holden','holdenb5@gmail.com','781-296-7597','me')]) // initializing the AddressBook
console.log(addressBookContacts);


while(true) { //set up an inifnite loop with a way to quit
    const response = prompt('Would you like to add, delete, print, or quit?');
    if (response==='quit') {
        break;
    }
    if (response==='print') {
        addressBookContacts.print()
    }
    if (response==='add') {
        const addName = prompt('what is the name of the person you want to add?');
        const addEmail = prompt('what is the email of the person you want to add?');
        const addPhone = prompt('what is the phone number of the person you want to add?');
        const addRelation = prompt('what is the relation of the person you want to add?');
        addressBookContacts.add(new Contact(addName, addEmail, addPhone, addRelation));
    }
    if (response==='delete') {
        const index = prompt('what is the index of the contact you wish to delete?');
        const deleteIndex = parseInt(index); //converts string to integer
        addressBookContacts.deleteAt(deleteIndex);
    }
}
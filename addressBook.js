class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
        console.log(`Added: ${contact.firstName} ${contact.lastName}`);
    }

    removeContact(email) {
        this.contacts = this.contacts.filter(c => c.email !== email);
        console.log(`Removed contact with email: ${email}`);
    }

    listContacts() {
        console.log("Address Book:");
        this.contacts.forEach(c => console.log(`${c.firstName} ${c.lastName} - ${c.email}`));
    }
}

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

const myBook = new AddressBook();
myBook.addContact(new Contact("Shivam", "Goyal", "2612", "bata chowk", "faridabad", "258796", "788298008", "shivam@gmail.com"));
myBook.addContact(new Contact("Prince", "Sharma", "7895", "GK", "delhi", "110043", "9149293577", "sharmaji@gmail.com"));

myBook.listContacts();
myBook.removeContact("shivam@gmail.com");
myBook.listContacts();

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (!this.validateContact(contact)) throw new Error("Invalid contact details!");
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

    validateContact(contact) {
        const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
        const addressPattern = /^.{4,}$/;
        const zipPattern = /^\d{5,6}$/;
        const phonePattern = /^\d{10}$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
        return namePattern.test(contact.firstName) &&
            namePattern.test(contact.lastName) &&
            addressPattern.test(contact.address) &&
            addressPattern.test(contact.city) &&
            addressPattern.test(contact.state) &&
            zipPattern.test(contact.zip) &&
            phonePattern.test(contact.phoneNumber) &&
            emailPattern.test(contact.email);
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
try{
myBook.addContact(new Contact("Shivam", "Goyal", "2612", "bata chowk", "faridabad", "258796", "788298008", "shivam@gmail.com"));
myBook.addContact(new Contact("Prince", "Sharma", "7895", "GK", "delhi", "110043", "9149293577", "sharmajigmail.com"));

myBook.listContacts();
myBook.removeContact("shivam@gmail.com");
myBook.listContacts();
}
catch(error){
    console.log(error.message);
}

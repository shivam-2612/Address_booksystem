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
    findContactByName(name) {
        return this.contacts.find(c => 
            `${c.firstName} ${c.lastName}`.toLowerCase() === name.toLowerCase()
        );
    }

    editContact(name, newDetails) {
        let contact = this.findContactByName(name);
        if (!contact) throw new Error("Contact not found!");
        Object.assign(contact, newDetails);
        console.log(`Updated Contact: ${contact.firstName} ${contact.lastName}`);
        console.log(contact);
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

const addressBooks = [];

function createNewAddressBook() {
    const newBook = new AddressBook();
    addressBooks.push(newBook);
    console.log(`New Address Book created. Total Address Books: ${addressBooks.length}`);
    return newBook;
}

const myBook1 = createNewAddressBook();
try{
myBook1.addContact(new Contact("Shivam", "Goyal", "2612", "bata chowk", "faridabad", "258796", "7088298008", "shivam@gmail.com"));
myBook1.addContact(new Contact("Prince", "Sharma", "7895", "Greater Kailash", "delhi", "110043", "9149293577", "sharmaji@gmail.com"));

myBook1.listContacts();
myBook1.removeContact("shivam@gmail.com");
myBook1.editContact("Prince Sharma", { 
    phoneNumber: "1112223333", 
    city: "chennai", 
    address: "789 New St" 
});
myBook1.listContacts();
}
catch(error){
    console.log(error.message);
}

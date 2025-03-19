class AddressBook {
    constructor() {
        this.contacts = [];
        
    }    
        addContact(contact) {
        if (!this.validateContact(contact)) throw new Error("Invalid contact details!");

        // Check for duplicate contact using `.some()`
        const isDuplicate = this.contacts.some(c => 
            c.firstName.toLowerCase() === contact.firstName.toLowerCase() &&
            c.lastName.toLowerCase() === contact.lastName.toLowerCase()
        );

        if (isDuplicate) throw new Error("Duplicate entry! Contact already exists.");

        this.contacts.push(contact);
        console.log(`Added: ${contact.firstName} ${contact.lastName}`);
    }

    removeContactByName(name) {
        const originalSize = this.contacts.length;

        // Use `.filter()` to remove contacts with matching names
        this.contacts = this.contacts.filter(c => 
            `${c.firstName} ${c.lastName}`.toLowerCase() !== name.toLowerCase()
        );

        if (originalSize === this.contacts.length) {
            throw new Error("Contact not found!");
        }
        console.log(`Removed contact: ${name}`);
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

    countContacts() {
        console.log(`Total Contacts: ${this.contacts.length}`);
        return this.contacts.length;
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
myBook1.addContact(new Contact("Shivam", "Goyal", "4005", "Noida", "UP", "110055", "9876543210", "shivamgoyal@example.com"));

myBook1.listContacts();


myBook1.countContacts(); 
}
catch(error){
    console.log(error.message);
}

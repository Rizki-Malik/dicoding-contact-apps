let contacts = [
    {
      id: 1,
      name: 'Dimas Saputra',
      tag: 'dimasmds',
      imageUrl: 'https://source.unsplash.com/301x300/?avatars',
    //   imageUrl: '/images/dimasmds.jpeg',
    },
    {
      id: 2,
      name: 'Arif Faizin',
      tag: 'arifaizin',
      imageUrl: 'https://source.unsplash.com/302x300/?avatars',
    //   imageUrl: '/images/arifaizin.jpeg',
    },
    {
      id: 3,
      name: 'Rahmat Fajri',
      tag: 'rfajri27',
      imageUrl: 'https://source.unsplash.com/303x300/?avatars',
    //   imageUrl: '/images/rfajri27.jpeg',
    },
  ]
   
  function getContacts() {
    return contacts;
  }
   
  function addContact(contact) {
    contacts = [...contacts, { id: +new Date(), imageUrl: 'https://source.unsplash.com/300x300/?avatars', ...contact }];
    // imageUrl: '/images/default.jpg'
  }
   
  function deleteContact(id) {
    contacts = contacts.filter((contact) => contact.id !== id);
  }
   
  export { getContacts, addContact, deleteContact };
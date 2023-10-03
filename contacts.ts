// let contact_number={ name:"sara", phone:"09135648974"}, { name:"ali", phone:"09125648796"},{ name:"hesam", phone:"09215649874"},
// { name:"mahsa", phone:"09102568794"}, {name:"fati", phone:"09135648974"},{name:"hasan", phone:"09135648974"},{name:"maman", phone:"09135648974"};
const contact_number= { name:"", phone:""};
const contact_list=[];


function addContact(name:string, phone:string){
    const contactList=Object.create(contact_number);
    contactList.name=name;
    contactList.phone=phone;
  contact_list.push(contactList);
}

addContact("asha", "09115648454");
addContact("arad", "02168568451");
console.log(contact_list);

function SearchContact(s){
    
    let g = contact_list.find(o => o.name === s);
    let i=g;
    
    if(i==undefined){
        console.log("does not exist");
    }
    else{
        console.log(g);
    }
    }

   
const searchBox=prompt("plz enter name of contact...");
SearchContact(searchBox);
    

import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";

import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdate from "./components/AddAndUpdate";
import useDisclouse from "./hooks/useDisclouse";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [contacts, setContacts] = useState([]);
  const {isOpen, onOpen, onClose} = useDisclouse();


  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        // const contactsSnapshot = await getDocs(contactsRef);
        onSnapshot(contactsRef, (snapshot)=>{
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactList);
          return contactList;

        })
        
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e)=>{
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef, (snapshot)=>{
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });

          const filteredContacts = contactList.filter((contact)=>
          contact.name.toLowerCase().includes(value));
          
          setContacts(filteredContacts);
          return filteredContacts;

        });
  }



  return (
    <>
    <div className=" max-w-[370px] mx-auto">
      <Navbar />
      <div className="flex items-center">
        <div className="flex relative items-center flex-grow">
          <FiSearch className="absolute text-white ml-2  text-3xl" />
          <input
          onChange={filterContacts}
            type="text"
            className="flex-grow h-10 bg-transparent border border-white rounded-md m-1 text-white pl-9 outline-none"
          />
        </div>
        <FaCirclePlus onClick={onOpen} className=" text-4xl text-white ml-1 mr-1 cursor-pointer" />
      </div>

      <div>
        {
          contacts.map((contact)=>{
            return(
              <ContactCard key={contact.id} contact={contact} />
            )
          })
        }
      </div>
      
    </div>
    <AddAndUpdate isOpen={isOpen} onClose={onClose}/>
    <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;

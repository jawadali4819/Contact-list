import React from "react";

import { FaRegUserCircle } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import useDisclouse from "../hooks/useDisclouse";
import AddAndUpdate from "./AddAndUpdate";
import { toast } from "react-toastify";


const ContactCard = ({contact}) => {
    const {isOpen, onOpen, onClose} = useDisclouse();

    const deleteContact = async (id)=>{
        try {
            await deleteDoc(doc(db, "contacts", id));
            toast.success("Contact deleted successfully");
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <>
    <div
      key={contact.id}
      className="flex items-center justify-between rounded-lg bg-yellow p-2 mt-2 m-1"
    >
      <div className="flex gap-1">
        <FaRegUserCircle className="text-4xl text-orange self-center" />
        <div className="ml-1">
          <h2 className=" font-medium">{contact.name}</h2>
          <p className=" text-sm"> {contact.email} </p>
        </div>
      </div>

      <div className="flex">
        <CiEdit className="text-black text-2xl cursor-pointer" onClick={onOpen} />
        <FaRegTrashCan className="text-orange text-2xl cursor-pointer" onClick={()=>deleteContact(contact.id)} />
      </div>
    </div>
    <AddAndUpdate isUpdate isOpen={isOpen} onClose={onClose} contact={contact} />
    
    </>
  );
};

export default ContactCard;

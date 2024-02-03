import React from 'react'
import Modal from './Modal';
import {Field, Form , Formik} from "formik";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

const AddAndUpdate = ({isOpen, onClose, isUpdate}) => {

    const addContact = async (contact)=>{
        try{
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);
        }

        catch(error){
            console.log(error);
        }
           
        
    }




  return (
    <div className="z-50">
    <Modal isOpen={isOpen} onClose={onClose} >
        <Formik 
        initialValues={{
            name: "",
            email: "",
        }}
        onSubmit={
            (values)=>{addContact(values)}}>

            <Form>
                <div className=" flex flex-col gap-1 mb-3">
                    <label htmlFor='name' className="text-black">Name</label>
                    <Field type="text" name="name" className="text-black border border-black h-[30px] rounded-md pl-3" />
                </div>

                <div className=" flex flex-col gap-1">
                    <label htmlFor='email' className="text-black">Email</label>
                    <Field type="email" name="email" className="text-black border border-black h-[30px] rounded-md pl-3" />
                </div>

                <div className="flex justify-end">
                <button type="submit" className="bg-orange opacity-90 mt-4 px-4 py-2 rounded-lg text-black cursor-pointer hover:opacity-100" onClick={onClose}>
                    { isUpdate? "Update" : "Add"} Contact
                </button>
                </div>
                
            </Form>
        </Formik>
      </Modal>
      
    </div>
  )
}

export default AddAndUpdate

import React from 'react'
import Modal from './Modal';
import {ErrorMessage, Field, Form , Formik} from "formik";
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';
import * as Yup from "yup";


const contactSchemaValidation = Yup.object().shape({
    name : Yup.string().required("Name is required"),
    email : Yup.string().email("Invalid email").required("Email is required"),
});

const AddAndUpdate = ({isOpen, onClose, isUpdate, contact}) => {

    const addContact = async (contact)=>{
        try{
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);
            onClose();
            toast.success("Contact Added successfully");
        }
        catch(error){
            console.log(error);
        }    
    }

    const updateContact = async (contact, id)=>{
        try{
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contact);
            onClose();
            toast.success("Contact deleted successfully");
        }

        catch(error){
            console.log(error);
        }    
    }




  return (
    <div className="z-50">
    <Modal isOpen={isOpen} onClose={onClose} >
        <Formik 
        validationSchema={contactSchemaValidation}
        initialValues={
            isUpdate
            ?{
            name: contact.name,
            email: contact.email,
        }:{
            name: "",
            email: "",
        }
    }
        onSubmit={
            (values)=>{
                isUpdate ? updateContact(values, contact.id) : addContact(values)}}>

            <Form>
                <div className=" flex flex-col gap-1 mb-3">
                    <label htmlFor='name' className="text-black">Name</label>
                    <Field type="text" name="name" className="text-black border border-black h-[30px] rounded-md pl-3" />
                    <div className=" text-red-500 text-xs">
                        <ErrorMessage name="name"/>
                    </div>
                </div>

                <div className=" flex flex-col gap-1">
                    <label htmlFor='email' className="text-black">Email</label>
                    <Field type="email" name="email" className="text-black border border-black h-[30px] rounded-md pl-3" />
                    <div className=" text-red-500 text-xs">
                        <ErrorMessage name="email"/>
                    </div>
                </div>

                <div className="flex justify-end">
                <button type="submit" className="bg-orange opacity-90 mt-4 px-4 py-2 rounded-lg text-black cursor-pointer hover:opacity-100">
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

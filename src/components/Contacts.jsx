import React, {useState, useEffect} from 'react';
import ContactForm from './ContactForm';
import firebaseDb from '../firebase';

const Contacts = () => {

    let [contactObjects, setContactObjects] = useState({});
    useEffect(() => {
        firebaseDb.child('contacts').on('value', snapshot => {
            if (snapshot.val() != null) {
                setContactObjects({
                    ...snapshot.val()
                })
            }
        })
    });


    const addOrEdit = obj => {
        firebaseDb.child('contacts').push(
            obj, 
            err => {
                if (err)
                console.log(err);
            }
        )
    }

    return ( 
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Contact Register</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContactForm addOrEdit={addOrEdit} />
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map(id => {
                                    return <tr>
                                        <td>{contactObjects[id].fullName}</td>
                                        <td>{contactObjects[id].mobile}</td>
                                        <td>{contactObjects[id].email}</td>
                                        <td>
                                            <a className="btn text-primary">
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger">
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>

     );
}
 
export default Contacts;
import React, {useState} from 'react';


const ContactForm = (props) => {
    const initialFieldValues = {
        fullName: '',
        mobile: '',
        email: '',
        address: ''
    }

    let [values, setValues] = useState(initialFieldValues);

    const handleInputChange = e => {
        let {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values);
    }

    return ( 
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-grou-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Full Name" 
                    name="fullName" value={values.fullName} onChange={handleInputChange} />
            </div>
            <div className="form-row">
                <div className="form-group input-group">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Mobile" 
                        name="mobile" value={values.mobile} onChange={handleInputChange} />
                </div>
                <div className="form-group input-group">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Email" 
                        name="email" value={values.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <textarea placeholder="Address" name="address" id="" cols="30" rows="10" className="form-control" onChange={handleInputChange}></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value="Save" className="btn btn-primary btn-block" />
                </div>
            </div>
        </form>
     );
}
 
export default ContactForm;
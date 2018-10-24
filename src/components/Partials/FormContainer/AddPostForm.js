import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './Forms.scss';

const AddPostForm = (props) => {
    return (
        <div className="form-container">
            <Form className="add-guest-form" inline>
                <p>I am add post form</p>
            </Form>
        </div>
    );
}

export default AddPostForm;

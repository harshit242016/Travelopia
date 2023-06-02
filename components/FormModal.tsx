import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { useState, useEffect } from "react";

const FormModal = (props : any) => {
    const {visible,closeHandler}= props;
    const [formData, setFormData] = useState({});
    const handleInputChange = (event : any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        setFormData({
          ...formData,
          [name]: value
        });
    };
    const handleSubmit = async () => {
        const response = await fetch('/api/sendFormData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log(response);
    };
    return (
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
        >
            <Modal.Header>
            <Text id="modal-title" size={18}>
                Welcome to
                <Text b size={18}>
                Travelopia
                </Text>
            </Text>
            </Modal.Header>
            <Modal.Body>
            <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                type="text" 
                name="name"
                placeholder="Full Name"
                onChange = {handleInputChange}
            />
            <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Email"
                type="email" 
                name="email"
                onChange = {handleInputChange}
            />
            <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Phone No."
                type="text"
                name="phone"
                onChange = {handleInputChange}
            />
            <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                type="date"
                name="startAt"
                placeholder="Start At"
                onChange = {handleInputChange}
            />
            <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                type="text"
                name="trip_duration"
                placeholder="Trip Duration"
                onChange = {handleInputChange}
            />
             <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                type="text"
                name="description"
                placeholder="Description"
                onChange = {handleInputChange}
            />
            </Modal.Body>
            <Modal.Footer>
            <Button auto flat color="error" onPress={closeHandler}>
                Close
            </Button>
            <Button auto onPress={handleSubmit}>
                Submit
            </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default FormModal;
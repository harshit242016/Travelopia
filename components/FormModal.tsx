import React, { useState } from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";

interface Props {
  visible: boolean;
  closeHandler: any;
}

const FormModal = ({ visible, closeHandler } : Props) => {
  const [formData, setFormData] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (event : any) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/sendFormData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Form submitted successfully!");
        setShowSuccessModal(true);
      } else {
        console.error("Error submitting form data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    closeHandler();
  };

  return (
    <>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to{" "}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
      <Modal open={showSuccessModal} onClose={handleCloseSuccessModal}>
        <Modal.Header>
          <Text b size={18}>
            Success!
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text>{successMessage}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto onPress={handleCloseSuccessModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormModal;
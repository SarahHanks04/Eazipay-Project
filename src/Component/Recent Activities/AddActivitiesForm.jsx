import React, { useState } from "react";
import Modal from "react-modal";

// Set app element for accessibility
Modal.setAppElement("#root");

const AddActivityForm = ({ onAddActivity }) => {
  const [employee, setEmployee] = useState("");
  const [activity, setActivity] = useState("");
  const [id, setId] = useState("");
  const [bonusName, setBonusName] = useState("");
  const [amount, setAmount] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employee || !activity) {
      setModalIsOpen(true); // show error if employee or activity is missing
      return;
    }

    const currentDate = new Date();
    const day = currentDate.toLocaleString("en-us", { weekday: "long" });
    const month = currentDate.toLocaleString("en-us", { month: "long" });
    const date = `${day}, ${month} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
    const time = currentDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newActivity = {
      employee,
      activity,
      time,
      id,
      bonusName,
      amount,
    };

    // Pass the new activity to the parent component
    onAddActivity(date, newActivity);

    // Clear form inputs
    setEmployee("");
    setActivity("");
    setId("");
    setBonusName("");
    setAmount("");

    // Show success modal
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee Name"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Employee ID (optional)"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Bonus Name (optional)"
          value={bonusName}
          onChange={(e) => setBonusName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount (optional)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Activity</button>
      </form>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Activity Added Successfully!</h2>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default AddActivityForm;

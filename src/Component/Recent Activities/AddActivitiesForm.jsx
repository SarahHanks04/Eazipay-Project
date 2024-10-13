import React, { useState } from "react";
import Modal from "react-modal";
import "../Recent Activities/AddActivitiesModal.css";

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
      setModalIsOpen(true);
      return;
    }

    // Add New Activity Functionality
    const handleAddActivity = (date, newActivity) => {
      const existingDateIndex = filteredActivities.findIndex(
        (day) => day.date === date
      );

      if (existingDateIndex !== -1) {
        const updatedActivities = [...filteredActivities];
        updatedActivities[existingDateIndex].records.push(newActivity);
        setFilteredActivities(updatedActivities);
      } else {
        const newDay = {
          date,
          records: [newActivity],
        };
        setFilteredActivities([...filteredActivities, newDay]);
      }
    };
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

    onAddActivity(date, newActivity);

    // Clear input fields
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
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Employee Name"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
          className="border rounded px-4 py-2 mr-2"
          required
        />
        <input
          type="text"
          placeholder="Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="border rounded px-4 py-2 mr-2"
          required
        />
        <input
          type="number"
          placeholder="Employee ID(optional)"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border rounded px-4 py-2 mr-2"
        />
        <input
          type="text"
          placeholder="Bonus Name(optional)"
          value={bonusName}
          onChange={(e) => setBonusName(e.target.value)}
          className="border rounded px-4 py-2 mr-2"
        />
        <input
          type="text"
          placeholder="Amount(optional)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded px-4 py-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Activity
        </button>
      </form>

      {/* React Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Activity Added"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2 className="text-xl font-bold mb-4">Activity Added Successfully!</h2>
        <button
          onClick={closeModal}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default AddActivityForm;
import React, { useState } from "react";
import Modal from "react-modal";

// Set app element for accessibility
Modal.setAppElement("#root");

const AddActivityForm = ({ onAddActivity, modalIsOpen, closeModal }) => {
  const [employee, setEmployee] = useState("");
  const [activity, setActivity] = useState("");
  const [id, setId] = useState("");
  const [bonusName, setBonusName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employee || !activity) {
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

    // Close the modal
    closeModal();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="bg-white p-4 rounded-md shadow-lg w-[90%] max-w-[500px] mx-auto my-8"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <h2 className="text-xl font-bold mb-4">Add New Activity</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Employee Name"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
          required
          className="w-full border p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          required
          className="w-full border p-2 rounded-md"
        />
        <input
          type="number"
          placeholder="Employee ID (optional)"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full border p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Bonus Name (optional)"
          value={bonusName}
          onChange={(e) => setBonusName(e.target.value)}
          className="w-full border p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Amount (optional)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border p-2 rounded-md"
        />
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={closeModal}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add Activity
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddActivityForm;

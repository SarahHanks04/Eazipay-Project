import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
  departments: [],
  searchQuery: "",
  selectedEmployees: [],
  isAllSelected: false,
  departmentView: false,
  addEmployee: false,
  archivedEmployees: [],
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    searchEmployee: (state, action) => {
      state.searchQuery = action.payload;
      state.employees = state.employees.filter((employee) =>
        employee.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    selectAll: (state) => {
      state.isAllSelected = !state.isAllSelected;
      state.selectedEmployees = state.isAllSelected
        ? state.employees.map((employee) => employee.id)
        : [];
    },
    archiveSelected: (state) => {
      state.employees = state.employees.filter(
        (employee) => !state.selectedEmployees.includes(employee)
      );
      state.selectedEmployees = [];
      state.isAllSelected = false;
    },
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    setDepartments: (state, action) => {
      state.departments = action.payload;
    },
    addEmployee: (state, action) => {
      const newEmployee = { ...action.payload, id: state.employees.length + 1 };
      state.employees = [...state.employees, newEmployee];
    },
    archiveEmployees(state, action) {
      const selectedEmployees = action.payload;
      state.archivedEmployees = [
        ...state.archivedEmployees,
        ...selectedEmployees,
      ];
      state.employees = state.employees.filter(
        (employee) => !selectedEmployees.includes(employee.id)
      );
    },
    toggleEmployeeSelection: (state, action) => {
      const employeeId = action.payload;
      // state.selectedEmployees = state.selectedEmployees.includes(employeeId)
      state.selectedEmployees = state.selectedEmployees.includes(employeeId)
        ? state.selectedEmployees.filter((id) => id !== employeeId)
        : [...state.selectedEmployees, employeeId];
      state.isAllSelected =
        state.selectedEmployees.length === state.employees.length;
    },
  },
});

export const {
  searchEmployee,
  selectAll,
  archiveSelected,
  setEmployees,
  setDepartments,
  toggleView,
  addEmployee,
  archiveEmployees,
  toggleEmployeeSelection,
} = teamSlice.actions;

export default teamSlice.reducer;

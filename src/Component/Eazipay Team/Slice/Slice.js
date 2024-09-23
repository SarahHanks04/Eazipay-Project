import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [], // Populate from API
  departments: [],
  searchQuery: "",
  selectedEmployees: [],
  isAllSelected: false,
  departmentView: false,
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
      state.selectedEmployees = state.isAllSelected ? state.employees : [];
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
    toggleView: (state) => {
      state.departmentView = !state.departmentView; // Toggle between employees and departments view
    },

  },
});

export const { searchEmployee, selectAll, archiveSelected, setEmployees, setDepartments, toggleView } =
  teamSlice.actions;

export default teamSlice.reducer;

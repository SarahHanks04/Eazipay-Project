import { Link } from "react-router-dom";

const BottomNavbarComponent = () => {
  return (
    <nav className="bg-white fixed bottom-0 left-0 right-0 shadow-lg p-4 mt-[5rem]">
      <ul className="flex justify-around text-sm">
        <li>
          <Link to="/" className="flex flex-col items-center">
            <span>🏠</span>
            Home
          </Link>
        </li>
        <li>
          <Link to="/employee" className="flex flex-col items-center">
            <span>👨‍💼</span>
            Employee
          </Link>
        </li>
        <li>
          <Link to="/payroll" className="flex flex-col items-center">
            <span>💼</span>
            Payroll
          </Link>
        </li>
        <li>
          <Link to="/loans" className="flex flex-col items-center">
            <span>💳</span>
            Loans
          </Link>
        </li>
        <li>
          <Link to="/more" className="flex flex-col items-center">
            <span>⋯</span>
            More
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavbarComponent;

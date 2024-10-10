const SearchBar = ({ onSearch }) => {
    return (
      <input
        type="text"
        placeholder="Search employee"
        className="border rounded px-4 py-2"
        onChange={(e) => onSearch(e.target.value)}
      />
    );
  };
export default SearchBar;
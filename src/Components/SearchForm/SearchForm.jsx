import toast from "react-hot-toast";
import css from "./SearchForm.module.css";

const SearchForm = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.query.value.trim() === "") {
      toast.error("EMPTY STRING!");
      return;
    }
    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="query"
          placeholder="Enter keyword"
          className={css.input}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchForm;

import { useState } from "react";
import searchIcon from "../..//assets/search.svg";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { searched } from "../../features/filter/FilterSlice";
import { useMatch, useNavigate } from "react-router-dom";
const Search = () => {
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);
  const dispatch = useDispatch();
  const match = useMatch("/");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));
    if (!match) navigate("/");
  };
  return (
    <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
        />
      </form>
      <img
        className="inline h-4 cursor-pointer"
        src={searchIcon}
        alt="Search"
      />
    </div>
  );
};

export default Search;

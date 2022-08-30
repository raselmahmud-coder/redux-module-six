import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { tagRemoved, tagSelected } from "../../features/filter/FilterSlice";

const Tag = ({ tag }) => {
  const dispatch = useDispatch();
  const { tags: selectedTags } = useSelector((state) => state.filter);
  const isSelected = selectedTags.includes(tag.title) ? true : false;
  const handleSelect = () => {
    if (isSelected) dispatch(tagRemoved(tag.title));
    else dispatch(tagSelected(tag.title));
  };
  return (
    <>
      <div
        onClick={handleSelect}
        className={`${
          isSelected ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
        } px-4 py-1 rounded-full cursor-pointer`}>
        {tag.title}
      </div>
      
    </>
  );
};

export default Tag;

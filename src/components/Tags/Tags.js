import Tag from "./Tag";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { fetchTags } from "../../features/Tags/TagsSlice";

const Tags = () => {
  const { tags } = useSelector((state) => state.tags);
  // console.log(tags);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);
  return (
    tags.length > 0 && (
      <section>
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
          {tags.map((tag) => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </div>
      </section>
    )
  );
};

export default Tags;

import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="ml-5 w-1/3">
      <div className="bg-[#6047EC19] border-2 border-[#6047EC] rounded-md flex justify-center py-3 my-3">
        <p className="text-[#6047EC] font-bold">
          Spent time on read : {readingTime} min
        </p>
      </div>
      <div className="bg-[#1111110C] rounded-md p-5">
        <p className="font-bold">Bookmarked Blogs : {bookmarks.length}</p>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;

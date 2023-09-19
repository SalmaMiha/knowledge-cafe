import PropTypes from "prop-types";
import { BsBookmark } from "react-icons/bs";

const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    img,
    reading_time,
    author,
    author_img,
    release_date,
    hashtags,
  } = blog;

  return (
    <div className="mb-16">
      <img src={img} alt="" />
      <div className="flex justify-between my-2">
        <div className="flex">
          <img className="h-12 mr-2" src={author_img} alt="" />
          <div>
            <p className="font-bold">{author}</p>
            <p className="text-xs text-[#11111199]">{release_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-[#11111199] font-medium text-sm mr-2">
            {reading_time} min read
          </p>
          <button onClick={() => handleBookmark(blog)}>
            <BsBookmark></BsBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      {hashtags.map((hashtag, idx) => (
        <span key={idx}>
          <a href="">#{hashtag} </a>
        </span>
      ))}
      <br />
      <button
        onClick={() => handleMarkAsRead(reading_time, id)}
        className="text-[#6047EC] font-semibold text-sm underline underline-offset-1"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  handleBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;

import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = (bookmarkedBlog) => {
    let checkBookmarked = false;

    bookmarks.forEach((element) => {
      if (element.id === bookmarkedBlog.id) {
        checkBookmarked = !checkBookmarked;
      }
    });

    if (!checkBookmarked) {
      const newBookmarks = [...bookmarks, bookmarkedBlog];
      setBookmarks(newBookmarks);
    } else {
      toast.info("Already Bookmarked");
    }
  };

  const handleMarkAsRead = (MarkedReadingTime, id) => {
    setReadingTime(readingTime + MarkedReadingTime);
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <Header></Header>
      <div className="mx-40 my-3">
        <hr />
      </div>
      <div className="flex mx-40">
        <Blogs
          handleBookmark={handleBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <ToastContainer></ToastContainer>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;

import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    return (
        <div>
            <p>title: {blog.title}</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object
}

export default Blog;
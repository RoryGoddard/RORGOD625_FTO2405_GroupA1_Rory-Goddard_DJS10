import PropTypes from "prop-types";

const BlogPosts = (props) => {
    return (
        <>
            <h1>{"Rory's Blog of Lorum Ipsum"}</h1>
            {props.blogData.map((post) => {
                return (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
                )
            })}
        </>
        )
}

BlogPosts.propTypes = {
    blogData: PropTypes.arrayOf(
        PropTypes.shape({
            userId: PropTypes.number.isRequired,
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired
        })
    ).isRequired
}

export default BlogPosts
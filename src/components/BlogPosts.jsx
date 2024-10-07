const BlogPosts = (props) => {
    return (
        <>
            {props.blogData.map((post) => {
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            })}
        </>
        )
}

export default BlogPosts
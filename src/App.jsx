import React from "react";
import './App.css'

const URL = "https://jsonplaceholder.typicode.com/posts"

function App() {

  const [blogData, setBlogData] = React.useState([{body: "I really hope this works"}])
  
  React.useEffect(() => {
    const fetchBlogPosts = async () => {
      const result = await fetch(URL)
      result.json()
      .then(result => {
        setBlogData(result)
      }).catch((error) => {
        console.log(`Something went wrong. Error: ${error}`)
      })
    }
    fetchBlogPosts()
  }, [])
  

  return (
    <>
      <h1>DJS10 - Asynchrony</h1>
      <p>{blogData[0].body}</p>
    </>
  )
}

export default App

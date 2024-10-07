import React from "react";
import './App.css'

const URL = "https://jsonplaceholder.typicode.com/posts"

function App() {

  const [blogData, setBlogData] = React.useState([{body: "I really hope this works"}])
  const [isLoading, setIsLoading] = React.useState(false)
  const [errorExists, setErrorExists] = React.useState(false)
  
  React.useEffect(() => {
    const fetchBlogPosts = async () => {

      try {
        // Set is loading to true so we can activate the loading spinner
        setIsLoading(true)

        const response = await fetch(URL)
        if (!response.ok) {
          // If there is an error, set the error state to true
          setErrorExists(true)

          // Switch isLoading to false
          setIsLoading(false)
          return
        }
        const data = await response.json()
        setBlogData(data)
        setIsLoading(false)
      }
      catch (error) {
        // If there is an error, set the error state to true
        setErrorExists(true)

        // Switch isLoading to false
        setIsLoading(false)
        console.log(`Something went wrong. Error: ${error}`)
      }
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

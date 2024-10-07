## DJS10 - Asynchrony

#### How to install and run
Open a terminal in the projects root directory and run
`npm install`
`npm run dev`

#### Project Description
Your task is to build a React application that makes HTTP GET requests to the JSONPlaceholder API to retrieve a list of dummy blog posts. The application should render the titles and bodies of these posts on the screen. You'll also implement error handling to manage unsuccessful API calls.

#### About
This is a single page application created in React that will asynchronously fetch blog post data from [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts). This website serves a JSON object of blog data which our application will iterate over with the map function, dynamically rendering each post as its own component.

Upon opening the application will within useEffect try to fetch data from the aforementioned endpoint, if at any stage there is an error, it will load the error component, informing the user. While loading, a loading wheel component is loaded, and finally, upon successful fetching of the blog data, each post will be dynamically rendered as its own component.








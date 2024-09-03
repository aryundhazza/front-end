import Navbar from "./components/navbar"

function App() {
  return (
    <>
      <Navbar />
      <div>
        Hello World!
      </div>    
      <button className="
          bg-orange-600
          p-1 rounded-md 
          ml-10 border
          border-black 
          hover:bg-orange-200 
          animate-bounce
      ">
          Submit
      </button>  
    </>
  )
}

export default App

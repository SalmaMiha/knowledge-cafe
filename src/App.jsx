import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className="mx-40 my-3">
        <hr />
      </div>
      <div className="flex mx-40">
      <Blogs></Blogs>
      </div>
    </>
  )
}

export default App

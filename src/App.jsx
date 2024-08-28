import AllRoutes from "./Routes/AllRoutes"
import FadeUpAnimation from "./Routes/FadeUp"
import ScrollToTop from "./Routes/ScrolltoTop"
import SmoothScroll from "./Routes/SmoothScroll"

// src/App.jsx
function App() {
  return (
    <div className="">
      <SmoothScroll>
       
      <ScrollToTop/>
      <AllRoutes/>
      
      </SmoothScroll>
    </div>
  )
}

export default App

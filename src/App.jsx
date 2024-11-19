// import { Skeleton } from "@/components/ui/skeleton"

import { Login } from "./Pages/Login";

import './App.css'


// import { Button } from './components/ui/button'
// import { CarouselDemo } from './components/demo/CarouselDemo'
// import { Skeleton } from "./components/ui/skeleton"
// import { SkeletonCard } from './components/skeletonCard'
// import { SearchBar } from './components/Searchbar'

function App() {
  return (
    <div className="grid grid-cols-1 justify-content-center">
      <div className="flex items-center justify-center">
        <Login />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { Navbar } from "./components/Navbar";
import { Archive } from "./components/Archive";
import { SinglePost } from "./components/SinglePost";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Navbar className="navbar" />
        <div>
          <Routes>
            <Route path="/" element={<Archive />} />
            <Route path="/posts/:postId" element={<SinglePost />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;

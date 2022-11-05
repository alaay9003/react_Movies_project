import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MoviesDetails from "./components/MovieDetails";
function App() {
  const [movies,setData]=useState([]); 
  const [pageCount,setPageCount]=useState(0);

  const getAllData =async()=>{
    const res =await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4aa79dfada98f645455a37d7e282c76d&language=ar');
    setData(res.data.results);
    setPageCount(res.data.total_pages);
  }

  const getPage =async(page)=>{
    const res =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=4aa79dfada98f645455a37d7e282c76d&language=ar&page=${page}`);
    setData(res.data.results);
    setPageCount(res.data.total_pages);
  }
useEffect(()=>{
  getAllData();
},[])


const search=async(word)=>{
  if(word=='')
  {
    getAllData()
  }
  else{
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4aa79dfada98f645455a37d7e282c76d&query=${word}&language=ar`)
    setData(res.data.results);
    setPageCount(res.data.total_pages);
  }
}
  return (
    <div className="font color-body ">
      <NavBar search={search}/>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList movies={movies} getPage={getPage} pageCount={pageCount}/>}/>
            <Route path="/movie/:id" element={<MoviesDetails />}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;

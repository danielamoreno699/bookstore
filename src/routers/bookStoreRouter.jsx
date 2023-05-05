import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '@/components/navbar';
import Books from '@/components/booksList';
import Categories from '@/components/categories';



const BookstoreRouter = () =>  (
    <>
      <Navbar />
  
      <div className="container">
        <Routes>
          
          <Route path="Books" element={<Books />} />
          <Route path="Categories" element={<Categories/>} />

          <Route path="/" element={<Navigate to="/Books" />} />
        </Routes>
  
      </div>
  
    </>
  
  );

export default BookstoreRouter
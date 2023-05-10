import { Navigate, Route, Routes } from 'react-router-dom';
import Books from '../components/bookList';
import Categories from '../components/categories';
import Navbar from '../components/navbar';

const BookstoreRouter = () => (
  <>
    <Navbar />

    <div className="container">
      <Routes>

        <Route path="Books" element={<Books />} />
        <Route path="Categories" element={<Categories />} />

        <Route path="/" element={<Navigate to="/Books" />} />
      </Routes>

    </div>

  </>

);

export default BookstoreRouter;

import logo from "./logo.svg";
import "./App.css";
import { BooksProvider } from "./BooksContext";
import Books from "./components/Books";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import BookDetails from "./components/BookDetails";
import NotFound from "./components/NotFound";
import SecretBooks from "./components/SecretBooks";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Navigate to="/" />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/secret"
            element={<PrivateRoute Component={<SecretBooks />} />}
          />
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;

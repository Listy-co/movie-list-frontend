import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Index from "../pages/index";
import Show from '../pages/Show';

const Home = (props) => {
    const [movies, setMovies] = useState([]);

    const URL = 'http://localhost:4000/movies/';

    const getMovies = () => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setMovies(data.data))
            .catch(error => console.error('Error:', error));
    };

    const createMovies = (movie) => {
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        })
            .then(response => response.json())
            .then(data => {
                setMovies([...movies, data.data]);
            })
            .catch(error => console.error('Error:', error));
    };

    const updateMovies = (movie, id) => {
        fetch(URL + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        })
            .then(response => response.json())
            .then(data => {
                const updatedMovies = movies.map(m => m._id === id ? data.data : m);
                setMovies(updatedMovies);
            })
            .catch(error => console.error('Error:', error));
    };

    const deleteMovies = (id) => {
        fetch(URL + id, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(() => {
                const filteredMovies = movies.filter(m => m._id !== id);
                setMovies(filteredMovies);
            })
            .catch(error => console.error('Error:', error));
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <main>
            <Routes>
                <Route path="/" element={<Index movies={movies} createMovies={createMovies} />} />
                <Route path="/movies/:id" element={<Show movies={movies} updateMovies={updateMovies} deleteMovies={deleteMovies} />} />
            </Routes>
        </main>
    );
};

export default Home;

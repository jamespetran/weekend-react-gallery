import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [galleryThings, setGalleryThings] = useState([]);

  const fetchGallery = () => {
    axios.get('/gallery')
      .then((res) => {
        console.log('GET /gallery', res.data);
        setGalleryThings(res.data);
      })
      .catch((err) => {
        console.error('error in get /gallery', err);
      })
  }

  const likePut = (id) => {
    axios.put(`/gallery/like/${id}`)
      .then((res) => {
        console.log('like put complete', res);
        fetchGallery();
      })
      .catch(err => {
        console.error('error in like put', err);
      })
  }

  useEffect(() => {
    console.log('in use effect');
    fetchGallery();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">My Gallery</h1>
      </header>
      <GalleryList
        galleryThings={galleryThings}
        likePut={likePut}
      />
    </div>
  );
}

export default App;

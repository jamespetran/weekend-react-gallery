import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({ galleryThings, likePut }) {
  return (
    <div id="galleryList" className="container row">
      {galleryThings.map(photo => (
        <div key={photo.id} className="container col col-panel">
          {/* <p>gallery item</p> */}
          <GalleryItem
            photo={photo}
            likePut={likePut}
          />
        </div>
      ))}
    </div>
  )
}

export default GalleryList;
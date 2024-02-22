import SearchBar from './components/SearchBar';
import ImageList from "./components/ImageList";
import searchImages from "./api";
function App() {
  const handleSubmit = async (term) => {
    const imageResults = await searchImages(term);

    console.log(imageResults); // debug - remove
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </div>
  );
}

export default App;

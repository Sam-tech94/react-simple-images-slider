import hills from "./assets/hills.jpg";
import mountainLake from "./assets/mountain-lake.jpg";
import seaside from "./assets/seaside.jpg";
import stream from "./assets/stream.jpg";
import valley from  "./assets/valley.jpg";
import Slider from "./components/Slider";

function App() {
  const images = [hills, mountainLake, seaside, stream, valley];

  return (
    <div>
      <Slider 
        images={images}
        title="Our Nature Trips"
      />
    </div>
  );
}

export default App;

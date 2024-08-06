import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/card";
import Map from "../../components/map/Map";
import { useLoaderData } from "react-router-dom";

function ListPage() {
  const data = useLoaderData();

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data ? (
            data.map((post) => <Card key={post.id} item={post} />)
          ) : (
            <p>Error loading posts!</p>
          )}
        </div>
      </div>
      <div className="mapContainer">
        {data ? <Map items={data} /> : <p>Error loading posts!</p>}
      </div>
    </div>
  );
}

export default ListPage;

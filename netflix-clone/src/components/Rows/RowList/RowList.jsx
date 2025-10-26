import Row from "../Row/Row"
import requests from "../../../utils/Request"
const RowList = () => {
  return (
    <>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.getNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.getTrending}
        // isLargeRow={true}
      />
      <Row
        title="Top Rated Movies"
        fetchUrl={requests.getTopRatedMovies}
        // isLargeRow={true}
      />
      <Row
        title="Upcoming Movies"
        fetchUrl={requests.getUpcommingMovies}
        // isLargeRow={true}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.getActionMovies}
        // isLargeRow={true}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.getComedyMovies}
        // isLargeRow={true}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.getHorrorMovies}
        // isLargeRow={true}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.getRomanceMovies}
        // isLargeRow={true}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.getDocumentaries}
        // isLargeRow={true}
      />
      <Row
        title="TV Shows"
        fetchUrl={requests.getTvShow}
        // isLargeRow={true}
      />
    </>
  );
}

export default RowList;

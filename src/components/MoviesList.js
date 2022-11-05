import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from "./Pagination";
const MoviesList = ({ movies, getPage ,pageCount}) => {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <CardMovie key={movies.id} mov={movie} />;
        })
      ) : (
        <p2 className="text-center p-5">لا يوجد افلام </p2>
      )}
      <PaginationComponent getPage={getPage} pageCount={pageCount}/>
    </Row>
  );
};

export default MoviesList;

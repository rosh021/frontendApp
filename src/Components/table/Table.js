import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavourite, setFavourite } from "../../redux/spellsSlice";
import "./Table.css";
export const CustomTable = ({ tableHeaders, func, isSpinning }) => {
  const dispatch = useDispatch();
  const { spells, favourite } = useSelector((state) => state.spells);

  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem("favourites"));

    storedFav?.length > 0 &&
      favourite?.length < 1 &&
      dispatch(setFavourite(storedFav));
  }, []);

  const handelOnDelete = (_id, name) => {
    if (
      window.confirm(
        `Are you sure you want to delete <strong>${name}</strong> from your favourite list ??`
      )
    )
      dispatch(removeFavourite(_id));
  };

  return (
    <Container className=" mt-5">
      <div className="row py-2">{spells?.length} Total Spells Found!</div>
      <Table striped bordered hover>
        {isSpinning === true && (
          <Spinner animation="border" variant="success" />
        )}
        <thead>
          <tr>
            <th>#</th>
            {tableHeaders.map((item, i) => (
              <th key={i}>{item}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {func === true
            ? favourite.map(({ index, name, _id }, i) => (
                <tr key={i} className="text-center">
                  <td>{i + 1}</td>
                  <td>{index}</td>
                  <td>{name}</td>
                  <td>
                    <Link className="grow" to={`/${index}`}>
                      Read More
                    </Link>
                  </td>
                  <td>
                    <button
                      className="main__button"
                      onClick={() => handelOnDelete(_id, name)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : spells.map(({ index, name }, i) => (
                <tr key={i} className="text-center">
                  <td>{i + 1}</td>
                  <td>{index}</td>
                  <td>{name}</td>
                  <td>
                    <Link className="grow" to={`/${index}`}>
                      Read More
                    </Link>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </Container>
  );
};

import { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavourite, setFavourite } from "../../redux/spellsSlice";
import "./Table.css";
export const CustomTable = ({ isClicked, isSpinning }) => {
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
    <Container>
      <Table
        striped
        bordered
        hover
        variant="dark"
        className="mt-5 ms-auto table"
      >
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Index</th>
            <th className="text-center">Name</th>
            <th className="text-center">Visit</th>
            {isClicked === true && <th className="text-center">Delete</th>}
          </tr>
        </thead>
        {isSpinning === true && (
          <Spinner animation="border" variant="success" />
        )}
        <tbody>
          {isClicked === true
            ? favourite.map(({ index, name, _id }, i) => (
                <tr key={i}>
                  <td className="text-center">{i > 0 ? 1 + i : 1}</td>
                  <td className="text-center">{index}</td>
                  <td className="text-center">{name}</td>
                  <td className="text-center">
                    <Link to={`/${index}`}>Read More</Link>
                  </td>
                  <td className="text-center">
                    <Button onClick={() => handelOnDelete(_id, name)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            : spells.map(({ index, name }, i) => (
                <tr key={i}>
                  <td className="text-center">{i > 0 ? 1 + i : 1}</td>
                  <td className="text-center">{index}</td>
                  <td className="text-center">{name}</td>
                  <td className="text-center">
                    <Link to={`/${index}`}>Read More</Link>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </Container>
  );
};

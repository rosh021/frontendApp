import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavourite, setFavourite } from "../../redux/spellsSlice";
import "./Table.css";
import { CustomPagination } from "../pagination/Pagination";

const spellsPerTable = 20;

export const CustomTable = ({ tableHeaders, func, isSpinning }) => {
  const dispatch = useDispatch();

  const [active, setActive] = useState(1);
  const { spells, favourite } = useSelector((state) => state.spells);
  const [displaySpells, setDisplaySpells] = useState([]);

  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem("favourites"));

    storedFav?.length > 0 &&
      favourite?.length < 1 &&
      dispatch(setFavourite(storedFav));

    setDisplaySpells(spells);
  }, [spells]);

  const handelOnDelete = (_id, name) => {
    if (
      window.confirm(
        `Are you sure you want to delete <strong>${name}</strong> from your favourite list ??`
      )
    )
      dispatch(removeFavourite(_id));
  };

  const handleOnPaginationClick = (page) => {
    setActive(page);
  };

  const page = Math.ceil(spells.length / spellsPerTable);
  const spellStartAt = (active - 1) * spellsPerTable;
  const spellEndAt = spellStartAt + spellsPerTable;

  return (
    <Container className=" mt-5">
      {func === true ? (
        ""
      ) : (
        <div className="row py-2">{spells?.length} Total Spells Found!</div>
      )}
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
            : displaySpells.map(
                ({ index, name }, i) =>
                  i >= spellStartAt &&
                  i < spellEndAt && (
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
                  )
              )}
        </tbody>
      </Table>
      <CustomPagination
        page={page}
        active={active}
        handleOnPaginationClick={handleOnPaginationClick}
      />
    </Container>
  );
};

import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setFavourite } from "../../redux/spellsSlice";
export const CustomTable = () => {
  const dispatch = useDispatch();
  const { spells, favourite } = useSelector((state) => state.spells);

  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem("favourites"));

    storedFav?.length > 0 &&
      favourite?.length < 1 &&
      dispatch(setFavourite(storedFav));
  }, []);

  return (
    <Table striped bordered hover variant="dark" className="mt-5">
      <thead>
        <tr>
          <th className="text-center">#</th>
          <th className="text-center">Index</th>
          <th className="text-center">Name</th>
          <th className="text-center">Visit</th>
        </tr>
      </thead>
      <tbody>
        {spells.map(({ index, name, url }, i) => (
          <tr>
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
  );
};

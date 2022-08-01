import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const CustomTable = () => {
  const { spells } = useSelector((state) => state.spells);

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

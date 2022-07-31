import Table from "react-bootstrap/Table";

export const CustomTable = () => {
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
        <tr>
          <td className="text-center">1</td>
          <td className="text-center">Mark</td>
          <td className="text-center">Otto</td>
          <td className="text-center">@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
};

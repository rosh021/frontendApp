import Pagination from "react-bootstrap/Pagination";

export const CustomPagination = ({
  page,
  active = 1,
  handleOnPaginationClick,
}) => {
  let items = [];
  for (let number = 1; number <= page; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleOnPaginationClick(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="d-flex justify-content-center">
      <Pagination>{items}</Pagination>
      <br />
    </div>
  );
};

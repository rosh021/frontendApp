import React, { useState } from "react";
import { CustomNavbar } from "../../Components/navbar/CustomNavbar";
import { CustomTable } from "../../Components/table/Table";
import { useSelector } from "react-redux";
export const Favourite = () => {
  const [isClicked, isSetClicked] = useState(true);

  const { favourite } = useSelector((state) => state.spells);
  const tableHeaders = ["Index", "Name", "Visit", "Delete"];
  return (
    <div>
      <CustomNavbar />
      {favourite.length > 0 ? (
        <h1 className="text-center mt-3 favourite_h1">
          {favourite?.length} Favourite Spells Found
        </h1>
      ) : (
        <h1 className="text-center mt-3 favourite_h1">
          You haven't added any spells in your favourite list
        </h1>
      )}
      <CustomTable func={isClicked} tableHeaders={tableHeaders} />
    </div>
  );
};

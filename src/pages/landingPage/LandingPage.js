import React, { useEffect } from "react";
import { CustomNavbar } from "../../Components/navbar/CustomNavbar";
import { CustomTable } from "../../Components/table/Table";
import { spellsAction } from "../../redux/spellsAction";

export const LandingPage = () => {
  useEffect(() => {
    spellsAction();
  });
  return (
    <div>
      <CustomNavbar />
      LandingPage
      <CustomTable />
    </div>
  );
};

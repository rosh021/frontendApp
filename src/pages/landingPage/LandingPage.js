import React, { useEffect } from "react";
import { CustomNavbar } from "../../Components/navbar/CustomNavbar";
import { CustomTable } from "../../Components/table/Table";
import { spellsAction } from "../../redux/spellsAction";
import { useDispatch } from "react-redux";

export const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(spellsAction());
  }, []);
  return (
    <div>
      <CustomNavbar />
      LandingPage
      <CustomTable />
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { CustomNavbar } from "../../Components/navbar/CustomNavbar";
import { CustomTable } from "../../Components/table/Table";

import { spellsAction } from "../../redux/spellsAction";
import { useDispatch, useSelector } from "react-redux";

export const LandingPage = () => {
  const dispatch = useDispatch();
  const [isSpinning, setIsSpinning] = useState(false);
  const { spells } = useSelector((state) => state.spells);

  useEffect(() => {
    fetchAllSpell();

    setIsSpinning(false);
  }, []);

  const fetchAllSpell = async () => {
    setIsSpinning(true);
    await dispatch(spellsAction());
  };
  return (
    <div>
      <CustomNavbar />
      <h1 className="text-center mt-3">{spells?.length} Total Spells Found</h1>

      <CustomTable isSpinning={isSpinning} />
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CustomNavbar } from "../../Components/navbar/CustomNavbar";
import { useParams, Link } from "react-router-dom";
import { singleSpellAction } from "../../redux/spellsAction";
import { useDispatch, useSelector } from "react-redux";
import "./Main.css";
import { CustomModel } from "../../Components/model/Model";
import { setFavourite, setShowModal } from "../../redux/spellsSlice";
import { fetchOnlyParticularSpells } from "../../helper/axiosHelper";
import { toast } from "react-toastify";

export const Main = () => {
  const dispatch = useDispatch();
  const { index } = useParams("index");
  const { selectedSpell, showModal, favourite } = useSelector(
    (state) => state.spells
  );

  useEffect(() => {
    dispatch(singleSpellAction(index));
  }, [index, showModal]);
  const [modelData, setModelData] = useState({});

  const moreInfo = [
    { Range: selectedSpell.range },
    { Components: selectedSpell.components },
    { Material: selectedSpell.material },
    { Ritual: selectedSpell.ritual },
    { Duration: selectedSpell.duration },
    { Concentration: selectedSpell.concentration },
    { CastingTime: selectedSpell.casting_time },
    { Level: selectedSpell.level },
    { AttackType: selectedSpell.attack_type },
  ];

  const showInfo = async (str) => {
    const result = await fetchOnlyParticularSpells(str);
    setModelData(result);
    dispatch(setShowModal(true));
  };

  const addToFav = (selectedSpell) => {
    const objExist = favourite.filter((item) => item._id === selectedSpell._id);
    if (objExist.length) {
      return toast.error("OOPS !! Already Added to Favourite");
    }
    dispatch(setFavourite(selectedSpell));
    toast.success("Added to your Favourite");
  };

  return (
    <div>
      <CustomNavbar />
      <CustomModel show={showModal} modelData={modelData}></CustomModel>
      <div>
        <div className="main__header">
          <h1 className=" fw-bold spell__heading text-center mt-4">
            {selectedSpell.name}
          </h1>

          <button
            className="main__button"
            onClick={() => addToFav(selectedSpell)}
          >
            Add to Favourite 💕
          </button>
        </div>

        <div className="desc container">
          <h3 className="text-center fw-bold mt-2 my-3">Description</h3>

          {selectedSpell.desc}
        </div>

        {selectedSpell.higher_level?.length > 0 && (
          <div className="higher__level container">
            <h3 className="text-center fw-bold mt-2 my-3">Higher Level</h3>
            {selectedSpell.higher_level}
          </div>
        )}

        <Container className="mt-5 more__details">
          <h3 className="text-center fw-bold mt-2 my-3">More Details</h3>
          <Row>
            <Col>
              {moreInfo.map(
                (item, index) =>
                  Object.values(item).toString() !== "" && (
                    <div key={index}>
                      {console.log(Object.values(item).toString())}
                      <span className="fw-bold">{Object.keys(item)}: </span>
                      {Object.values(item).toString()}
                    </div>
                  )
              )}
            </Col>
            <Col>
              {selectedSpell.damage && (
                <div>
                  <span className="fw-bold">DamageType: </span>
                  <span
                    className="spell_info"
                    onClick={() =>
                      showInfo(selectedSpell.damage.damage_type.url)
                    }
                  >
                    {selectedSpell.damage.damage_type.name}
                  </span>
                </div>
              )}
              {selectedSpell.dc && (
                <div>
                  <span className="fw-bold">DCType: </span>
                  <span
                    className="spell_info"
                    onClick={() => showInfo(selectedSpell.dc.dc_type.url)}
                  >
                    {selectedSpell.dc.dc_type.name}
                  </span>
                </div>
              )}
              {selectedSpell.school && (
                <div>
                  <span className="fw-bold">School: </span>
                  <span
                    className="spell_info"
                    onClick={() => showInfo(selectedSpell.school.url)}
                  >
                    {selectedSpell.school.name}
                  </span>
                </div>
              )}

              <div>
                {selectedSpell.classes?.length > 0 && (
                  <span className="fw-bold">Classes: </span>
                )}
                {selectedSpell.classes &&
                  selectedSpell.classes.map((item, index) => (
                    <span
                      key={index}
                      className="spell_info"
                      onClick={() => showInfo(item.url)}
                    >
                      <li> {item.name}</li>
                    </span>
                  ))}
              </div>

              <div>
                {selectedSpell.subclasses?.length > 0 && (
                  <span className="fw-bold">SubClasses: </span>
                )}
                {selectedSpell.subclasses &&
                  selectedSpell.subclasses.map((item, index) => (
                    <span
                      key={index}
                      className="spell_info"
                      onClick={() => showInfo(item.url)}
                    >
                      <li>{item.name}</li>
                    </span>
                  ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

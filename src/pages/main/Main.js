import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CustomNavbar } from "../../Components/navbar/CustomNavbar";
import { useParams } from "react-router-dom";
import { singleSpellAction } from "../../redux/spellsAction";
import { useDispatch, useSelector } from "react-redux";
import "./Main.css";

export const Main = () => {
  const dispatch = useDispatch();
  const { index } = useParams("index");

  const { selectedSpell } = useSelector((state) => state.spells);
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

  // const linkInfo = [
  //   { Damage: selectedSpell?.damage?.damage_type?.name },
  //   { Dex: selectedSpell?.name },
  //   { School: selectedSpell?.school?.name },
  //   { Classes: selectedSpell?.classes},
  //   { SubClasses: selectedSpell?.subclasses},
  // ];
  // console.log(linkInfo);

  useEffect(() => {
    dispatch(singleSpellAction(index));
  }, [index]);

  return (
    <div>
      <CustomNavbar />
      <div>
        <h1 className="spell__heading text-center mt-4">
          {selectedSpell.name}
        </h1>

        <div className="desc container mt-4">
          <h3>Description</h3>

          {selectedSpell.desc}
        </div>

        {selectedSpell.higher_level.length > 0 && (
          <div className="higher__level container mt-4">
            <h3>Higher Level</h3>
            {selectedSpell.higher_level}
          </div>
        )}

        <Container className="mt-5">
          <h1 className="text-center">More Details</h1>
          <Row>
            <Col>
              {moreInfo.map(
                (item, indx) =>
                  Object.values(item) && (
                    <div key={index}>
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
                  {selectedSpell.damage.damage_type.name}
                </div>
              )}
              {selectedSpell.dc && (
                <div>
                  <span className="fw-bold">DCType: </span>
                  {selectedSpell.dc.dc_type.name}
                </div>
              )}
              {selectedSpell.school && (
                <div>
                  <span className="fw-bold">School: </span>
                  {selectedSpell.school.name}
                </div>
              )}
              {selectedSpell.classes &&
                selectedSpell.classes.map((item, index) => (
                  <div key={index}>
                    <span className="fw-bold">Classes: </span>
                    {item.name}
                  </div>
                ))}
              {selectedSpell.subclasses &&
                selectedSpell.subclasses.map((item, index) => (
                  <div key={index}>
                    <span className="fw-bold">SubClasses: </span>
                    <li>{item.name}</li>
                    {/* <ul>
                      <li>{item.name}</li>
                    </ul> */}
                  </div>
                ))}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

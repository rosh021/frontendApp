import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../redux/spellsSlice";
export const CustomModel = ({ modelData, ...rest }) => {
  const dispatch = useDispatch();
  return (
    <Modal
      {...rest}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {modelData.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modelData?.desc} {modelData?.spellcasting?.info[0].name}
        {modelData?.spellcasting?.info[0].desc}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => dispatch(setShowModal(false))}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

import "./App.css";
import CustomModal from "./components/custom_modal";
import { useModal } from "./components/custom_modal/useModal";
const App = () => {
  const { show, openModal, closeModal } = useModal();
  return (
    <div className="App">
      <button onClick={openModal}>Click</button>
      <CustomModal
        show={show}
        heading={"Title"}
        desc={"This is just a dummy description of a random modal"}
        yesCallback={() => {
          alert("Yes callback");
          closeModal()
        }}
        noCallback={() => {
          alert("No callback");
          closeModal()
        }}
      >
        This is a place holder here we can send any custom component
      </CustomModal>
    </div>
  );
};
export default App;

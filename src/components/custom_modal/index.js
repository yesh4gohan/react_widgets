// 𝐏𝐫𝐨𝐛𝐥𝐞𝐦 𝐒𝐭𝐚𝐭𝐞𝐦𝐞𝐧𝐭 ...
// 1️⃣  Create a shared / common modal component that can be used in      by other components .
// 2️⃣  Parent comp should be able to pass dynamic content like ( Modal header / message) .

// 🔥 𝐁𝐨𝐧𝐮𝐬 / 𝐀𝐝𝐝 𝐨𝐧 : Bind the modal  with key bindings ( like esc and click outside the modal )

// PS: There can be multiple variations as well .
import "./custom_modal.css";
const CustomModal = (props) => {
  const { heading, desc, yesCallback, noCallback, show } = props;

  return (
    <div
      className={["modal-window", show && "opened"].filter(Boolean).join(" ")}
    >
      <div className="modal-container">
        {heading ? <div className="modal-heading">{heading}</div> : null}
        {desc ? <div className="modal-desc">{desc}</div> : null}
        {props.children}
        <div className="btns-container">
          <button className="btn yes-btn" onClick={()=>{
            yesCallback?.()
          }}>
            Accept
          </button>
          <button className="btn no-btn" onClick ={()=>{
            noCallback?.()
          }}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};
export default CustomModal;

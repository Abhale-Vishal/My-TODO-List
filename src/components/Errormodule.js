import "./ErrorModule.css";

function ErrorModule(props) {
  const errorHideHandler = function () {
    props.onError();
  };
  return (
    <div className="backdrop">
      <li className="error-css color">{props.title}</li>
      <footer>
        <button onClick={errorHideHandler} className="okay-btn">
          OKAY
        </button>
      </footer>
    </div>
  );
}
export default ErrorModule;

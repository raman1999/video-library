export default function ErrorText({ errorName }) {
  return (
    <div
      style={{
        display: errorName ? "inline-block" : "none",
      }}
      className="txt-left error-text"
    >
      <span className="">
        <i className="fas fa-exclamation-circle"></i>
      </span>
      {errorName}
    </div>
  );
}

export default function Button(props) {
    return (
      <button
        className={`Button ${
          props.type === "primary" ? "ButtonPrimary" : "ButtonSecondary"
        }`}
      >
        {props.text}
      </button>
    );
  }
  
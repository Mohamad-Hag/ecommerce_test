export default function Logo(props) {
    return (
      <div className="Logo">
        <span>X</span>
        {!props.isShortcut ? " BRAND" : "B"}
      </div>
    );
  }
  
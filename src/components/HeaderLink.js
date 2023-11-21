export default function HeaderLink(props) {
    return (
      <a className="HeaderLink" href={props.href}>
        {props.text}
      </a>
    );
  }
  
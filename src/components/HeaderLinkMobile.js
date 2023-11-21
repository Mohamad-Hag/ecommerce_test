export default function HeaderLinkMobile(props) {
    return (
      <a className="HeaderLinkMobile" href={props.href}>
        {props.text}
      </a>
    );
  }
  
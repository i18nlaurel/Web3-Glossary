import { Link } from "./Link";
import "./Breadcrumbs.css";
import { Fragment } from "react";

export function Breadcrumbs({ segments }) {
  let path = "";
  const result = [
    <p className="split" key={`/`}>
      /
    </p>,
  ];
  for (let i = 0; i < segments.length; i++) {
    const v = segments[i];
    if (i === segments.length - 1) {
      result.push(<Fragment key={"last"}>{v}</Fragment>);
    } else {
      path += v;
      result.push(
        <Link here={path} key={path}>
          {v}
        </Link>
      );
      result.push(
        <p className="split" key={`${path}/`}>
          /
        </p>
      );
      path += "/";
    }
  }
  console.log(result);
  return <div className="Breadcrumbs">{result}</div>;
}

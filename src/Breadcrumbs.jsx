import { Link } from "./Link";
import "./Breadcrumbs.css";

export function Breadcrumbs({ segments }) {
  const homeLink = (
    <Link here="/" key="home">
      Home
    </Link>
  );

  let path = "";
  const result = [homeLink];
  
  for (let i = 0; i < segments.length; i++) {
    const v = segments[i];
    path += v;
    const isLast = i === segments.length - 1;

    // Render regular text instead of a link for the current page
    const breadcrumb = isLast ? (
      <span key={path}>{v}</span>
    ) : (
      <Link here={path} key={path}>
        {v}
      </Link>
    );

    result.push(breadcrumb);

    // Add a "/" separator after each segment except for the last one
    if (!isLast) {
      result.push(
        <span className="split" key={`${path}/`}>
          /
        </span>
      );
    }
    path += "/";
  }

  return <div className="Breadcrumbs">{result}</div>;
}

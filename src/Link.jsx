import { useMemo } from "react";

export function Link({ to, here, children }) {
  if (to && here) {
    throw new Error("Link component should receive either 'to' or 'here' prop, not both.");
  }
  
  const loc = useMemo(() => {
    let location;
    if (here) {
      location = `/${here}`;
    } else {
      location = urlToPath();
      location.push(to);
      location = `/${location.join("/")}`;
    }
    return location;
  }, [to, here]);

  const preventReload = (event) => {
    event.preventDefault();
    console.log(loc);
    window.history.pushState({}, "", loc);
    const navigationEvent = new PopStateEvent("navigate");
    window.dispatchEvent(navigationEvent);
  };
  return (
    <a href={loc} onClick={preventReload}>
      {children}
    </a>
  );
}

export function urlToPath() {
  return window.location.pathname
    .slice(1)
    .split("/")
    .filter((v) => v.length)
    .map((v) => decodeURIComponent(v));
}

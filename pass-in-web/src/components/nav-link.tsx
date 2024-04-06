import { ComponentProps } from "react";

interface NaviLinkProps extends ComponentProps<'a'> {
  children: string
}

export function NavLink(props: NaviLinkProps) {
  props.children
  return (
    <a {...props} className="font-madeium text-sm">{props.children}</a>
  );
}
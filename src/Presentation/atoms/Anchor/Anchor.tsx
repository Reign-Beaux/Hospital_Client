import "./styles.css";

export interface AnchorProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

export const Anchor = ({ children, className, ...props }: AnchorProps) => {
  return (
    <a className={`anchor ${className}`} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

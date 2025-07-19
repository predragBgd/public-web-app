interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}

function Label({ children, htmlFor, className }: LabelProps) {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
export default Label;

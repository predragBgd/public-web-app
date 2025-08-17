import React from "react";
import { useFormStatus } from "react-dom";

// interface ButtonProps {
//   type?: "button" | "submit" | "reset";
//   buttonClassName?: string;
//   labelText?: string;
//   onClick?: () => void;
//   children?: React.ReactNode;
// }

// const Button: React.FC<ButtonProps> = ({
//   buttonClassName,
//   children,
//   onClick,
// }) => {
//   const { pending } = useFormStatus();
//   console.log("Button pending state:", pending);
//   return (
//     <button className={buttonClassName} disabled={pending} onClick={onClick}>
//       {pending ? "Processing..." : children}
//     </button>
//   );
// };

// export default Button;
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      loadingText = "Processing…",
      isLoading: isLoadingProp,
      disabled,
      type = "button",
      ...nativeProps
    },
    ref
  ) => {
    /**
     * When the button lives inside a <form>, useFormStatus() tells us
     * whether that form is currently submitting. Outside a form the
     * hook simply returns `undefined`, so we fall back to { pending: false }.
     */
    const { pending = false } = (useFormStatus() as
      | { pending: boolean }
      | undefined) ?? { pending: false };

    // Final "is loading" decision:
    const isLoading = isLoadingProp ?? pending;

    return (
      <button
        ref={ref}
        type={type}
        className={className}
        disabled={disabled || isLoading}
        {...nativeProps}
      >
        {isLoading ? loadingText : children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;

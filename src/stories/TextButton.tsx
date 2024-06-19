import React from "react";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  textColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Button after icon
   */
  icon?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const TextButton = ({
  primary = false,
  size = "medium",
  textColor,
  label,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button type="button" className="text-black" {...props}>
      {label} {icon}
      <style jsx>{`
        button {
          color: ${textColor};
        }
      `}</style>
    </button>
  );
};

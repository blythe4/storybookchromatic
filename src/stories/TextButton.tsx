import React from "react";
import { FaArrowRight } from "react-icons/fa";

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
  size?: "sm" | "base" | "lg";
  /**
   * Button contents
   */
  label: string;
  /**
   * Button after icon
   */
  icon?: boolean;
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
  textColor = "#666",
  label,
  icon = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`flex items-center gap-2 text-black text-${size}`}
      {...props}
    >
      {label} {icon && <FaArrowRight />}
      <style jsx>{`
        button {
          color: ${textColor};
        }
      `}</style>
    </button>
  );
};

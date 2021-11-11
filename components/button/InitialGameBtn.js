import { forwardRef } from "react";

export const InitialGameBtn = forwardRef(
  ({ onClick, href, text, name }, ref) => {
    return (
      <button
        ref={ref}
        name={name}
        href={href}
        onClick={onClick}
        className="shadow-2xl border-gray-500 bg-yellow-400 hover:bg-yellow-500 text-white rounded-3xl p-4 text-3xl lg:text-5xl mt-4"
      >
        {text}
      </button>
    );
  }
);

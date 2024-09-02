import { px } from "framer-motion";
import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { name, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {name && (
        <name style={{ display: 'inline-block', marginBottom: '0.25rem', paddingLeft: '0.25rem' }}htmlFor={id}>
          {name}
        </name>

      )}

      <input
        type={type}
        style={{
          padding: '0.5rem 0.75rem',
          borderRadius: '0.5rem',
          backgroundColor: 'white',
          color: 'black',
          outline: 'none',
          transition: 'background-color 0.2s',
          border: '1px solid #e5e7eb',
          width: '100%'
        }}
        // className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;

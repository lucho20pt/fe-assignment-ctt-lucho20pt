import React from 'react'

interface TextareaFieldProps {
  label: string
  id: string
  name: string
  value: string
  placeholder?: string
  required?: boolean
  error?: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  id,
  name,
  value,
  placeholder,
  required = false,
  error,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="block text-sm md:text-lg font-medium text-white"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="text-sm p-2 text-indigo-500 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-none"
      />
      {error && <p className="bg-red-500 text-sm p-1">{error}</p>}
    </div>
  )
}

export default TextareaField

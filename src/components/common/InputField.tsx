import React from 'react'

interface InputFieldProps {
  label: string
  id: string
  name: string
  type: string
  value: string | number
  placeholder?: string
  required?: boolean
  error?: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  name,
  type,
  value,
  placeholder,
  required = false,
  error,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="block text-sm md:text-lg font-medium text-white">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="p-2 text-indigo-500 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
      {error && <p className="bg-red-500 text-sm p-1">{error}</p>}
    </div>
  )
}

export default InputField

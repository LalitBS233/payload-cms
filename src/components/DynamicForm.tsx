'use client'

import { useEffect, useState, type ChangeEvent } from 'react'

type Field = {
  id: string
  name: string
  label: string
  blockType: string
  defaultValue?: string | boolean
  options?: Array<{ label: string; value: string }>
}

type Props = {
  fields: Field[]
}

const getInitialState = (fields: Field[]) =>
  Object.fromEntries(
    fields.map((field) => [
      field.name,
      field.defaultValue ?? (field.blockType === 'checkbox' ? false : ''),
    ]),
  ) as Record<string, string | boolean>

export const DynamicForm = ({ fields }: Props) => {
  const [formState, setFormState] = useState<Record<string, string | boolean>>(
    () => getInitialState(fields),
  )

  useEffect(() => {
    setFormState(getInitialState(fields))
  }, [fields])

  const handleChange = (name: string, value: string | boolean) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const renderField = (field: Field) => {
    const value = String(formState[field.name] ?? '')
    const base = {
      name: field.name,
      className: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all',
    }

    if (field.blockType === 'checkbox') {
      return (
        <label key={field.id} className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            name={field.name}
            checked={Boolean(formState[field.name])}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChange(field.name, event.target.checked)
            }
            className="w-5 h-5 rounded border border-gray-300 cursor-pointer focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-gray-700 font-medium">{field.label}</span>
        </label>
      )
    }

    if (['select', 'country', 'state'].includes(field.blockType)) {
      return (
        <div key={field.id}>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {field.label}
          </label>
          <select
            {...base}
            value={value}
            onChange={(event) => handleChange(field.name, event.target.value)}
          >
            <option value="">Select {field.label}</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )
    }

    if (['textarea', 'message'].includes(field.blockType)) {
      return (
        <div key={field.id}>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {field.label}
          </label>
          <textarea
            {...base}
            placeholder={field.label}
            value={value}
            rows={4}
            onChange={(event) => handleChange(field.name, event.target.value)}
          />
        </div>
      )
    }

    return (
      <div key={field.id}>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {field.label}
        </label>
        <input
          {...base}
          type={field.blockType === 'number' ? 'number' : field.blockType === 'email' ? 'email' : 'text'}
          placeholder={field.label}
          value={value}
          onChange={(event) => handleChange(field.name, event.target.value)}
        />
      </div>
    )
  }

  return (
    <form className="w-full max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
      <p className="text-gray-600 mb-8">We'd love to hear from you. Please fill out the form below.</p>
      
      <div className="space-y-6">
        {fields.map(renderField)}
      </div>

      <button 
        type="submit" 
        className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  )
}
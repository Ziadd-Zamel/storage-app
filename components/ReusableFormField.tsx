/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { UseFormReturn } from 'react-hook-form';

interface ReusableFormFieldProps {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  className?: string;
  required?: boolean;
}

const ReusableFormField = ({
  form,
  name,
  label,
  placeholder,
  type = 'text',
  className = '',
  required = false
}: ReusableFormFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="shad-form-item">
            <FormLabel className="shad-form-label">
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                type={type}
                placeholder={placeholder || `Enter your ${label.toLowerCase()}`}
                className={`shad-input ${className}`}
              />
            </FormControl>
          </div>
          <FormMessage className="shad-form-message" />
        </FormItem>
      )}
    />
  );
};

export default ReusableFormField;
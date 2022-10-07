import React from 'react';
import { FormContainer } from './';

export type UserFormData = {
  firstName: string;
  lastName: string;
  age: string;
};

export type UserFormProps = UserFormData & {
  updateFields: (fields: Partial<UserFormData>) => void;
};

const UserForm: React.FC = (props: UserFormProps) => {
  const { firstName, lastName, age, updateFields } = props;
  return (
    <FormContainer title='User Form'>
      <label htmlFor='firstName'>First Name</label>
      <input
        autoFocus
        required
        type='text'
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />

      <label htmlFor='lastName'>Last Name</label>
      <input
        required
        type='text'
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />

      <label htmlFor='age'>Age</label>
      <input
        required
        min={1}
        type='number'
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormContainer>
  );
};

export { UserForm };

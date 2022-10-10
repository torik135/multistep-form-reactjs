import React from 'react';
import { FormContainer } from './';

export type AccountFormData = {
  email: string;
  password: string;
};

export type AccountFormProps = AccountFormData & {
  updateFields: (fields: Partial<AccountFormData>) => void;
};

function AccountForm(props: AccountFormProps) {
  const { email, password, updateFields } = props;
  return (
    <FormContainer title='Account Form'>
      <label htmlFor='email'>Email</label>
      <input
        autoFocus
        required
        type='email'
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />

      <label htmlFor='password'>Password</label>
      <input
        required
        type='password'
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormContainer>
  );
}

export { AccountForm };

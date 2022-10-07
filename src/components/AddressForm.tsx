import React from 'react';
import { FormContainer } from './';

export type AddressFormData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

export type AddressFormProps = AddressFormData & {
  updateFields: (fields: Partial<AddressFormData>) => void;
};

const AddressForm: React.FC = (props: AddressFormProps) => {
  const { street, city, state, zip, updateFields } = props;
  return (
    <FormContainer title='Address Form'>
      <label htmlFor='street'>Street</label>
      <input
        autoFocus
        required
        type='text'
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />

      <label htmlFor='city'>City</label>
      <input
        required
        type='text'
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />

      <label htmlFor='state'>State</label>
      <input
        required
        type='text'
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />

      <label htmlFor='zipCode'>ZIP code</label>
      <input
        required
        type='text'
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormContainer>
  );
};

export { AddressForm };

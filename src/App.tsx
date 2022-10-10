import { useState, FormEvent } from 'react';
import { AccountForm, AddressForm, UserForm } from './components';
import { useMultiStepForm } from './hooks';

const btnStyle: string = 'px-[1rem] py-[.5rem]';

type formDataType = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INIT_DATA: formDataType = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
};

function App() {
  const [data, setData] = useState(INIT_DATA);
  function updateFields(fields: Partial<formDataType>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currStepIdx, step, firstStep, lastStep, back, next } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  function submitHandle(e: FormEvent) {
    e.preventDefault();
    if (!lastStep) return next();
    alert('Data Figuratively Submitted!');
  }

  return (
    <div className='relative bg-white border-2 border-black p-[2rem] mx-auto my-[5rem]  font-[Arial] max-w-max shadow-[0_35px_0px_-15px_rgba(0,0,0,1)]'>
      <form onSubmit={submitHandle}>
        <div className='absolute top-[.5rem] right-[.5rem] bg-black text-white px-[.5rem] rounded-full'>
          {currStepIdx + 1}/ {steps.length}
        </div>
        {step}
        <div className='mt-[1rem] flex gap-[.5rem] justify-end'>
          {!firstStep && (
            <button
              type='button'
              onClick={back}
              className={`${btnStyle} bg-gray-500 text-white hover:shadow-[0_15px_0px_-5px_rgba(0,0,0,1)]`}
            >
              Back
            </button>
          )}

          <button
            type='submit'
            className={`${btnStyle} bg-green-500 text-white hover:shadow-[0_15px_0px_-5px_rgba(0,0,0,1)]`}
          >
            {lastStep ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;

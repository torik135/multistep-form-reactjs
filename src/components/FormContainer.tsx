import React from 'react';

export type FormContainerProps = {
  title: string;
  children: React.ReactNode;
};

function FormContainer(props: FormContainerProps) {
  const { title, children } = props;

  return (
    <>
      <h2 className='text-center font-bold m-0 mb-[2rem] bg-black text-white w-[50%] mx-[auto] p-[.7rem] shadow-[0_15px_0px_-5px_lightGreen]'>
        {title}
      </h2>
      <div className='grid grid-cols-[minmax(auto,_400px)] gap-x-[1rem] gap-y-[.5rem] justify-start'>
        {children}
      </div>
    </>
  );
}

export { FormContainer };

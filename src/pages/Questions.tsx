import React from 'react'
import { Progress } from 'antd'
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
const Questions = () => {
    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };
  return (
    <>
    <div className='w-[80%] mx-auto flex flex-col gap-6'>
    <section className='flex justify-start gap-10 items-center mt-4'>
        <div>
          <h1 className='text-md font-semibold'>MCQ Mock Test</h1>
          <h3 className='text-sm font-semibold text-gray-500'>Topic : Javascript</h3>
        </div>
        <div className=''>
          <Progress
            percent={40}
            percentPosition={{ align: 'center', type: 'inner' }}
           size={[950,15]}
            className='font-semibold'
          />
        </div>
      </section>

      <section className='bg-gray-50 p-16 rounded-sm flex flex-col gap-11'>
        <div>
            <h1 className='text-gray-500 font-semibold text-sm mb-3'>Question 1</h1>
            <h1 className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eius accusamus dolorum rem! Quisquam tenetur sed accusamus dignissimos. Adipisci vel mollitia ad praesentium.</h1>
        </div>
        <div>
            <div className='flex flex-col gap-4'>
            <Checkbox onChange={onChange} className='border border-2 p-2 w-full hover:border-blue-400 rounded-md font-semibold'>Option 1</Checkbox>
            <Checkbox onChange={onChange} className='border border-2 p-2 w-full hover:border-blue-400 rounded-md font-semibold'>Option 1</Checkbox>
            <Checkbox onChange={onChange} className='border border-2 p-2 w-full hover:border-blue-400 rounded-md font-semibold'>Option 1</Checkbox>
            <Checkbox onChange={onChange} className='border border-2 p-2 w-full hover:border-blue-400 rounded-md font-semibold'>Option 1</Checkbox>
            
            </div>
        </div>
      </section>

      <section>
        <div>
            
        </div>
      </section>

    </div>
    
    </>
  )
}

export default Questions

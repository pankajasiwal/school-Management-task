import React from 'react';
import Table from './Table';
import Button from '../Button';

export default function Main(props) {
  return (
    <div className='mt-4'>
      <div className='flex justify-between'>
        <h2 className='border-2 border-solid border-stone-800 px-6 py-1'>Exam Name</h2> {/* // get prop from page 1. */}
        <Button type='DELETE'>Delete Exam</Button>
      </div>

      <div className='mt-8 w-full'>
        <Table />
      </div>

      <div className='space-x-5 text-right mt-8 w-full'>
        <Button type='ADD'>Add Scedule</Button>
        <Button type='BACK'>Back</Button>
      </div>
    </div>
  );
}

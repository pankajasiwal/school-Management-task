import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import Button from '../Button';
import EditableRow from './EditableRow';
import TableBody from './TableBody';

// const DUMMY_SUBJECTS = [
//   { id: 1, subject: 'math', date: '2023-12-11', startingTime: '10:00 ' },
//   { id: 2, subject: 'english', date: '2023-11-10', startingTime: '11:00 ' },
// ];

const Modal = forwardRef(function Modal({ selectedClass, setData }, ref) {
  // const [selectedSubjects, setSelectedSubjects] = useState(selectedClass.subjects);

  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });
  console.log('popup ke ander ', selectedClass);
  return (
    <dialog id='modal' ref={dialog} className='w-full md:w-4/5 md:max-w-screen-lg'>
      <div className='px-4 py-2 md:px-8 md:py-4'>
        <div className='inline-block my-5'>
          <h1 className='border-2 border-solid px-8 py-1'>Class: {selectedClass.className}</h1>
        </div>
        <div>
          <table className='w-full table-fixed border-separate border-spacing-y-3'>
            <thead>
              <th className='bg-background-table-header-popup/80 font-medium'>Subject</th>
              <th className='bg-background-table-header-popup/80 font-medium'>Dates</th>
              <th className='bg-background-table-header-popup/80 font-medium'>Srarting Time</th>
              <th></th>
            </thead>
            <TableBody
              subjects={selectedClass.subjects}
              // setSubjects={setSelectedSubjects}
              selectedClassID={selectedClass.selectedClassID}
              setData={setData}
            />
          </table>
        </div>

        <form method='dialog' id='modal-actions'>
          <div className='flex justify-around mt-[2.5rem]'>
            <Button type='UPDATE'>Update</Button>
            <Button type='BACK'>Back</Button>
          </div>
        </form>
      </div>
    </dialog>
  );
});

export default Modal;

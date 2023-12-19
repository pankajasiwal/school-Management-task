import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import Button from '../Button';
import ScedulerTableBody from './scedulerTableBody/ScedulerTableBody';

const Sceduler = forwardRef(function Sceduler({ Data, setData }, ref) {
  const [scedules, setScedules] = useState([]);
  const dialog = useRef();
  const [classNameAndSection, setClassNameAndSection] = useState('10A');

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  function updateHandler() {
    const newData = {
      id: Data.length + 1,
      class: classNameAndSection,
      startingDate: scedules[0].date,
      totalPapers: scedules.length,
      subjects: scedules.map((data) => {
        return {
          id: `${Data.length + 1}.${data.id}`,
          ...data,
        };
      }),
    };
    setData((prevData) => {
      return [...prevData, newData];
    });
    setScedules([]);
    dialog.current.close();
  }

  return (
    <dialog id='modal' ref={dialog} className='w-full md:w-4/5 md:max-w-screen-lg'>
      <div className='px-4 py-2 md:px-8 md:py-4'>
        <div className='inline-block my-5 border-2 border-solid border-stone-800 px-4 py-1'>
          <label htmlFor='class'>Class: </label>
          <select
            id='class'
            className='outline-none'
            value={classNameAndSection}
            onChange={(e) => setClassNameAndSection(e.target.value)}
          >
            <option value='10A'>10A</option>
            <option value='10B'>10B</option>
            <option value='11A'>11A</option>
            <option value='11B'>11B</option>
            <option value='12A'>12A</option>
            <option value='12B'>12B</option>
          </select>
        </div>
        <div>
          <table className='w-full table-fixed border-separate border-spacing-y-3'>
            <thead>
              <tr>
                <th className='bg-background-table-header/60 font-medium'>subject</th>
                <th className='bg-background-table-header/60 font-medium'>Date</th>
                <th className='bg-background-table-header/60 font-medium'>Starting Time</th>
                <th></th>
              </tr>
            </thead>
            <ScedulerTableBody scedules={scedules} setScedules={setScedules} />
          </table>
        </div>
        <div className='flex justify-around mt-9'>
          <Button type='UPDATE' onClick={updateHandler}>
            Update
          </Button>
          <form method='dialog' id='modal-actions'>
            <Button type='BACK'>Back</Button>
          </form>
        </div>
      </div>
    </dialog>
  );
});

export default Sceduler;
{
  /* <tr key={id}>
                <td className='text-center py-3'>{className}</td>
                <td className='text-center py-3'>{startingDate}</td>
                <td className='text-center py-3'>{totalPapers}</td>
                <td className='text-center flex justify-center py-3'>
                  <button
                    className='bg-background-btn-primary px-2 py-1 mr-4'
                    onClick={() => individualClassHandler(id)}
                  >
                    <IoMdEye size={20} />
                  </button>
                  <button className='bg-background-btn-secondry px-2 py-1' onClick={() => deleteHandler(id)}>
                    <IoIosClose size={20} />
                  </button>
                </td>
              </tr>
               */
}

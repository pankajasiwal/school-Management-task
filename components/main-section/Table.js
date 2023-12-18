import React, { useRef, useState } from 'react';
import { IoMdEye, IoIosClose } from 'react-icons/io';
import Modal from '../modal/Modal';

const DUMMY_DATA = [
  {
    id: 1,
    class: '10A',
    startingDate: '20.9.2024',
    totalPapers: 2,
    subjects: [
      { id: 1.1, subject: 'math', date: '2023-12-11', startingTime: '10:00 ' },
      { id: 1.2, subject: 'english', date: '2023-11-10', startingTime: '11:00 ' },
    ],
  },
  {
    id: 2,
    class: '10B',
    startingDate: '21.9.2024',
    totalPapers: 2,
    subjects: [
      { id: 2.1, subject: 'math', date: '2023-12-11', startingTime: '10:00 ' },
      { id: 2.2, subject: 'english', date: '2023-11-10', startingTime: '11:00 ' },
    ],
  },
  {
    id: 3,
    class: '11A',
    startingDate: '20.9.2024',
    totalPapers: 3,
    subjects: [
      { id: 3.1, subject: 'math', date: '2023-12-11', startingTime: '10:00 ' },
      { id: 3.2, subject: 'english', date: '2023-11-10', startingTime: '11:00 ' },
    ],
  },
  {
    id: 4,
    class: '11B',
    startingDate: '21.9.2024',
    totalPapers: 3,
    subjects: [
      { id: 4.1, subject: 'math', date: '2023-12-11', startingTime: '10:00 ' },
      { id: 4.2, subject: 'english', date: '2023-11-10', startingTime: '11:00 ' },
    ],
  },
  {
    id: 5,
    class: '12A',
    startingDate: '20.9.2024',
    totalPapers: 4,
    subjects: [
      { id: 5.1, subject: 'math', date: '2023-12-11', startingTime: '10:00 ' },
      { id: 5.2, subject: 'english', date: '2023-11-10', startingTime: '11:00 ' },
    ],
  },
  {
    id: 6,
    class: '12B',
    startingDate: '21.9.2024',
    totalPapers: 4,
    subjects: [
      { id: 6.1, subject: 'math', date: '2023-12-11', startingTime: '10:00 ' },
      { id: 6.2, subject: 'english', date: '2023-11-10', startingTime: '11:00 ' },
    ],
  },
];

export default function Table() {
  const modal = useRef();
  const [Data, setData] = useState(DUMMY_DATA);

  const [popupData, setPopupData] = useState({
    selectedClassID: undefined,
    className: '',
    subjects: [],
  });

  function deleteHandler(id) {
    const data = [...Data];
    const indexOfDataToRemove = data.findIndex((row) => row.id == id);
    data.splice(indexOfDataToRemove, 1);
    setData(data);
  }

  function individualClassHandler(id) {
    const selectedClass = DUMMY_DATA.find((obj) => obj.id == id);
    if (selectedClass !== undefined) {
      setPopupData({
        selectedClassID: selectedClass.id,
        className: selectedClass.class,
        subjects: selectedClass.subjects,
      });
    }
    modal.current.open();
  }
  console.log('popup ka data ', popupData);
  return (
    <>
      <Modal ref={modal} selectedClass={popupData} setData={setData} />
      <table className='w-full table-auto border-separate'>
        <thead>
          <th className='bg-background-table-header/60 font-medium'>Class</th>
          <th className='bg-background-table-header/60 font-medium'>Starting date</th>
          <th className='bg-background-table-header/60 font-medium'>Total Papers</th>
          <th></th>
        </thead>
        <tbody>
          {Data.map(({ id, class: className, startingDate, totalPapers }) => {
            return (
              <tr key={id}>
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
            );
          })}
        </tbody>
      </table>
    </>
  );
}

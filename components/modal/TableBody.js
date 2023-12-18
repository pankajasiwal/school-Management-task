import React from 'react';
import EditableRow from './EditableRow';

export default function TableBody({ subjects, selectedClassID, setData }) {
  function addNewRowHandler() {
    const updateSubjects = [...subjects];
    const newRow = {
      id: +`${selectedClassID}.${subjects.length + 1}`,
      subject: '',
      date: '',
      startingTime: '',
    };
    updateSubjects.push(newRow);
    // setData((prevData) => {
    //   return prevData.map((data) => {
    //     if (data.id === selectedClassID) {
    //       return {
    //         ...data,
    //         subjects: updateSubjects,
    //       };
    //     }
    //     return data;
    //   });
    // });

    console.log('new row add krne pr ', updateSubjects);
  }
  console.log('popup ke subjects: ', subjects);
  return (
    <tbody>
      {subjects.map(({ id, subject, date, startingTime }) => {
        return (
          <EditableRow
            id={id}
            initialSubject={subject}
            initialDate={date}
            initialStartingTime={startingTime}
            key={id}
            subjects={subjects}
            setData={setData}
          />
        );
      })}
      <tr>
        <td colSpan={3} className='text-center tabel-add-btn'>
          <button className='w-full text-lg' onClick={addNewRowHandler}>
            +
          </button>
        </td>
      </tr>
    </tbody>
  );
}

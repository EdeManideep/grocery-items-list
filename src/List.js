import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ items, removeItem, editItem, toggleComplete }) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, title, completed } = item;
        return (
          <article key={id} className={`grocery-item ${completed ? 'completed' : ''}`}>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleComplete(id)}
                className="item-checkbox"
                name="dummy"  // You can change this name as needed
              />
              <span className="checkmark"></span>
            </label>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button type='button' className='edit-btn' onClick={() => editItem(id)}>
                <FaEdit />
              </button>
              <button type='button' className='delete-btn' onClick={() => removeItem(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
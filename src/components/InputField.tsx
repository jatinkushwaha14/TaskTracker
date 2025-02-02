import React from 'react'
import './InputField.css'

interface InputFieldProps {
    todo: string;
    settodo: React.Dispatch<React.SetStateAction<string | number>>;
    handleSubmit: (e: React.FormEvent) => void;
}

const InputField = ({ todo, settodo, handleSubmit }: InputFieldProps) => {
  return (
    <div className='inputField'>
      <form className="messageBox" onSubmit={handleSubmit}>
        <input 
          required={true} 
          placeholder="Add your task..." 
          type="text" 
          id="messageInput" 
          value={todo} 
          onChange={(e) => settodo(e.target.value)} 
        />
        <button className="sendButton" type='submit'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
            <path
              fill="none"
              d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
            ></path>
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="33.67"
              stroke="#6c6c6c"
              d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  )
}

export default InputField
import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;
  
  return (
    <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
      {message}
    </div>
  );
};

export default ErrorMessage;
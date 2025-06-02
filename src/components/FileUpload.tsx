
import React, { useState, useRef } from 'react';
import { Upload, Check, X } from 'lucide-react';

interface FileUploadProps {
  label: string;
  id: string;
  accept?: string;
  required?: boolean;
  onChange: (file: File | null) => void;
}

const FileUpload = ({ label, id, accept = '.pdf,.doc,.docx', required = false, onChange }: FileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    
    if (selectedFile) {
      // Check file size (5MB limit)
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError('File size exceeds 5MB limit');
        setFile(null);
        onChange(null);
        return;
      }
      
      // Check file type
      const fileType = selectedFile.name.split('.').pop()?.toLowerCase();
      const acceptedTypes = accept.split(',').map(type => type.replace('.', '').trim());
      
      if (fileType && !acceptedTypes.includes(fileType)) {
        setError(`File type not accepted. Please upload: ${accept}`);
        setFile(null);
        onChange(null);
        return;
      }
      
      setFile(selectedFile);
      setError(null);
      onChange(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
    setError(null);
    onChange(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <label htmlFor={id} className="block text-destiny-darkGray mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {!file ? (
        <div 
          className="border-2 border-dashed border-destiny-gray/30 rounded-sm p-6 text-center cursor-pointer hover:border-destiny-gold/50 transition-colors"
          onClick={() => inputRef.current?.click()}
        >
          <Upload className="mx-auto mb-2 text-destiny-brown" />
          <p className="text-destiny-darkGray">Click to upload or drag and drop</p>
          <p className="text-sm text-destiny-gray mt-1">Accepted formats: {accept}</p>
          <p className="text-sm text-destiny-gray">Max file size: 5MB</p>
          <input
            ref={inputRef}
            id={id}
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className="hidden"
            required={required}
          />
        </div>
      ) : (
        <div className="flex items-center justify-between bg-destiny-lightGray p-3 rounded-sm">
          <div className="flex items-center">
            <Check className="text-green-500 mr-2" size={20} />
            <div>
              <p className="text-destiny-darkGray font-medium truncate max-w-[200px] md:max-w-xs">
                {file.name}
              </p>
              <p className="text-xs text-destiny-gray">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
          <button 
            type="button"
            onClick={removeFile} 
            className="p-1 hover:bg-destiny-gray/20 rounded-full"
            aria-label="Remove file"
          >
            <X size={18} className="text-destiny-darkGray" />
          </button>
        </div>
      )}
      
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FileUpload;

import { Upload, File, X } from 'lucide-react';
import { useState } from 'react';

interface FileUploadProps {
  label: string;
  accept?: string;
  onChange?: (file: File | null) => void;
  helpText?: string;
  required?: boolean;
}

export function FileUpload({ label, accept, onChange, helpText, required }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    onChange?.(selectedFile);
  };

  const handleRemove = () => {
    setFile(null);
    onChange?.(null);
  };

  return (
    <div className="space-y-2">
      <label className="block text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {!file ? (
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="size-8 text-gray-400 mb-2" />
            <p className="text-sm text-gray-600">
              Click to upload or drag and drop
            </p>
            {helpText && (
              <p className="text-xs text-gray-500 mt-1">{helpText}</p>
            )}
          </div>
          <input 
            type="file" 
            className="hidden" 
            accept={accept}
            onChange={handleFileChange}
          />
        </label>
      ) : (
        <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-3">
            <File className="size-5 text-green-600" />
            <div>
              <p className="text-sm text-gray-900">{file.name}</p>
              <p className="text-xs text-gray-500">
                {(file.size / 1024).toFixed(2)} KB
              </p>
            </div>
          </div>
          <button
            onClick={handleRemove}
            className="text-gray-500 hover:text-red-600 transition-colors"
            type="button"
          >
            <X className="size-5" />
          </button>
        </div>
      )}
    </div>
  );
}

import { FileInput, Label } from 'flowbite-react'
import { Spinner } from 'flowbite-react'
import { useEffect, useState } from 'react'

type Props = {
  isLoading: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onDrop: (e) => void
}

const FileDropUpload = ({ isLoading, onChange, onDrop }: Props) => {
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState([])

  useEffect(() => {
    if (files.length === 0) {
      return
    }

    onDrop(files)
  }, [files])

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragEnter = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const newFiles = [...e.dataTransfer.files]
    setFiles(newFiles)
    setIsDragging(false)
  }

  if (isLoading) {
    return (
      <div className="flex h-64 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
        <Spinner />
      </div>
    )
  }

  return (
    <>
      <div
        className="flex w-full items-center justify-center z-50 relative"
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Label
          htmlFor="dropzone-file"
          className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
          </div>
          <FileInput id="dropzone-file" className="hidden" onChange={onChange} />
        </Label>
      </div>
      {isDragging && <div className="h-screen w-screen bg-black/50 fixed top-0 left-0 z-40"></div>}
    </>
  )
}

export default FileDropUpload

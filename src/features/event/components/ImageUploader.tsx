import { useRef, useState } from "react"

import { uploadImageWithProgress } from "@/shared/services/uploadImage"
import { Button } from "@/shared/components/button/Button"

interface ImageUploaderProps {
  onUploadComplete: (url: string | null) => void
}

export const ImageUploader = ({ onUploadComplete }: ImageUploaderProps) => {
  const [progress, setProgress] = useState(0)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleUpload = async (file: File) => {
    setIsUploading(true)
    try {
      const url = await uploadImageWithProgress(file, setProgress)
      setImageUrl(url)
      onUploadComplete(url)
    } catch (err) {
      console.error("Upload error:", err)
    } finally {
      setIsUploading(false)
    }
  }

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file) handleUpload(file)
  }

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleUpload(file)
  }

  const handleRemove = () => {
    setImageUrl(null)
    setProgress(0)
    onUploadComplete(null)
  }

  return (
    <div
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
      className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer"
      onClick={() => inputRef.current?.click()}
    >
      {isUploading && (
        <div
          className="absolute top-0 left-0 right-0 h-1 bg-blue-500 rounded-t transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      )}

      {imageUrl ? (
        <div className="space-y-2">
          <img
            src={imageUrl}
            alt="Uploaded"
            className="w-full rounded-md object-cover max-h-52"
          />
          <Button
            onClick={handleRemove}
            size="icon"
            variant="tonal"
            color="danger"
          >
            <i className="ri-close-line"></i>
          </Button>
        </div>
      ) : (
        <div className="text-gray-500">
          <p>Click or drag & drop to upload image</p>
          <p className="text-xs mt-1">Supported: .jpg, .png, .webp</p>
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        hidden
        ref={inputRef}
        onChange={onFileChange}
      />
    </div>
  )
}

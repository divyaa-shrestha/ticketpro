import { supabase } from "./supabaseClient"

export const uploadImageWithProgress = async (
  file: File,
  onProgress: (progress: number) => void
): Promise<string> => {
  const filePath = `events/${Date.now()}-${file.name}`
  const bucket = "event-images"

  // Step 1: Generate a signed URL for uploading the file
  const { data: signedUploadUrlData, error: signedUrlError } =
    await supabase.storage.from(bucket).createSignedUploadUrl(filePath)

  if (signedUrlError || !signedUploadUrlData) {
    throw signedUrlError || new Error("Failed to create signed upload URL")
  }

  // Step 2: Upload the file using XMLHttpRequest for progress tracking
  await new Promise<void>((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open("PUT", signedUploadUrlData.signedUrl)

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100
        onProgress(Math.round(progress))
      }
    }

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve()
      } else {
        reject(new Error("Failed to upload file"))
      }
    }

    xhr.onerror = () => reject(new Error("Upload failed"))
    xhr.send(file)
  })

  // Step 3: Get the public URL after upload
  const { data } = supabase.storage.from(bucket).getPublicUrl(filePath)

  if (!data?.publicUrl) {
    throw new Error("Failed to get public URL")
  }

  return data.publicUrl
}

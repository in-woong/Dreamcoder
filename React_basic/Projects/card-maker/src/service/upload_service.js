class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'rzplgnvp');
    const result = fetch('https://api.cloudinary.com/v1_1/diyujlwce/image/upload', {
      method: 'POST',
      body: data,
    });
    return (await result).json();
  }
}
export default ImageUploader;

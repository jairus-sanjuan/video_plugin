import React, { useState } from 'react'
import axios from '../../../utils/req'

const VideoForm = () => {
  const [data, setData] = useState({
    title: '',
    description: '',
    thumbnail: null,
    file: null,
  })

  const handleFileChange = (e) => {
    e.preventDefault()

    setData({ ...data, [e.target.name]: e.target.files[0] })
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleUpload = (e) => {
    e.preventDefault()
    const { title, description, thumbnail, file } = data

    if (
      title === null ||
      description === null ||
      thumbnail === null ||
      file === null
    )
      return console.log('Data : ', data)

    const form = new FormData()
    form.append('file', file)
    form.append('thumbnail', thumbnail)
    form.append('title', title)
    form.append('description', description)

    axios
      .post(`/api/v1/users/${sessionStorage.getItem('id')}/videos`, form)
      .then((resp) => {
        console.log('Video Upload : ', resp)
      })
  }
  return (
    <>
      <div className="text-center block">
        <h2>Video Form</h2>
      </div>
      <form className="p-3">
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="formGroupExampleInput"
            placeholder="Example input"
            onChange={handleChange}
            value={data.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input"
            onChange={handleChange}
            value={data.description}
          />
        </div>
        <div className="form-group">
          <div className="custom-file">
            <input
              type="file"
              name="file"
              className="custom-file-input"
              id="validatedCustomFile"
              required
              accept="video/*"
              onChange={handleFileChange}
              // value={data.file}
            />
            <label className="custom-file-label" htmlFor="validatedCustomFile">
              Choose Video...
            </label>
          </div>
        </div>
        <div className="form-group">
          <div className="custom-file">
            <input
              name="thumbnail"
              type="file"
              className="custom-file-input"
              id="validatedCustomFile"
              required
              accept="image/*"
              onChange={handleFileChange}
              // value={data.thumbnail}
            />
            <label className="custom-file-label" htmlFor="validatedCustomFile">
              Choose Thumbnail...
            </label>
          </div>
        </div>

        <button className="btn btn-secondary w-100" onClick={handleUpload}>
          Upload Video
        </button>
      </form>
    </>
  )
}
export default VideoForm

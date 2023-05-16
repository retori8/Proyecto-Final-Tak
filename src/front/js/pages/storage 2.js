import React, { useEffect, useState } from 'react'

export const Storage = () => {

  const [archivo, setArchivo] = useState(null);
  const [title, setTitle] = useState("");
  const [uploads, setUploads] = useState(null);

  const [result, setResult] = useState(null);

  useEffect(() => {
    getUploads('https://5000-ljavierrodr-uploadingim-c7tumx0fh0o.ws-us95.gitpod.io/uploads');
  }, [])

  const handleUploadArchivos = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);

    formData.append('archivo', archivo);
    formData.append('type_upload', "video")

    fetchUploadArchivos('http://127.0.0.1:3001/api/upload', formData);

  }

  const fetchUploadArchivos = (url, data) => {
    fetch(url, {
      method: 'POST',
      body: data,
      /* headers: {
        'Authorization': 'Bearer <token>'
      } */
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.msg) {
          console.log(data.msg);
        } else {
          setResult(data)
        }
      })
  }

  const getUploads = (url) => {
    fetch(url).then(resp => resp.json()).then(data => setUploads(data));
  }

  return (
    <>
      <form onSubmit={handleUploadArchivos}>
        <input  type="file" name="archivo" id="archivo" onChange={(e) => setArchivo(e.target.files[0])} />
        <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} placeholder='Ingrese titulo' />
        <button>Upload</button>
      </form>

      {
        !!result && (
          <>
            <img src={result.image} width={200} height={200} />
            <h3>{result.title}</h3>
          </>
        )
      }

      <ul>
        {
          !!uploads &&
          uploads.length > 0 &&
          uploads.map((item) => {
            console.log(item.type_upload)
            return (
              <li key={item.id}>
                {
                  item.type_upload === 'archivo' ?
                    (
                      <>
                        <img src={item.image} width={100} height={100} />
                        <h4>{item.title}</h4>
                      </>
                    ) : (
                      <>
                        <audio src={item.image} controls />
                        <h4>{item.title}</h4>
                      </>
                    )
                }
              </li>
            )
          })
        }
      </ul>

    </>
  )
}

import React, { useEffect, useState } from 'react'
import Item from './Item'
import axios from '../../../../utils/req'

const Table = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios
      .get(`/api/v1/users/${sessionStorage.getItem('id')}/videos`)
      .then((resp) => {
        const data = resp['data']['data']

        if (data.length === 0) return console.log('No videos found.')

        setItems(data)
      })
      .catch((error) => console.log('Error : ', error))
  }, [])

  return (
    <div className="py-3">
      <div className="container">
        <div className="text-center">
          <h2 className="py-2">Videos Section.</h2>
        </div>

        {/* {items.length > 0 &&
          } */}

        {items.length > 0 ? (
          items.map((item) => {
            const { id, title, description, file, thumbnail } = item[
              'attributes'
            ]

            return (
              <Item
                key={id}
                title={title}
                description={description}
                thumbnail={thumbnail}
                file={file}
              />
            )
          })
        ) : (
          <div className="text-center font-weight-bold">No videos found.</div>
        )}
      </div>
    </div>
  )
}

export default Table

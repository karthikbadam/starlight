import type { NextApiRequest, NextApiResponse } from 'next'
import {
  ReflectanceElement,
  ReflectanceElementType,
} from '../../schema/reflectanceSchema'
import path from 'path'
import fs from 'fs'
import zlib from 'zlib'
import csv from 'csv-parser'

type Data = Array<ReflectanceElementType>

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    query: { id },
  } = req

  const fileContents: Data = []
  const dataPath = path.join(process.cwd(), 'data')

  return new Promise((resolve) => {
    fs.createReadStream(`${dataPath}/SsoReflectanceSpectrum_${id}.csv.gz`)
      .pipe(zlib.createUnzip())
      .pipe(
        csv({
          skipComments: true,
        })
      )
      .on('data', (value) => {
        const result = ReflectanceElement.parse(value)
        fileContents.push(result)
      })
      .on('end', () => {
        res.status(200).json(fileContents)
        resolve(1)
      })
      .on('error', () => {
        res.status(400).end()
        resolve(0)
      })
  })
}

export const config = {
  api: {
    responseLimit: '14mb',
  },
}

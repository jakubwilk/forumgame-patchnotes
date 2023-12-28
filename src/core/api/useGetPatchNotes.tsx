import { useQuery } from 'react-query'
import axios from 'axios'
import { GET_PATCH_NOTES_KEY } from '../utils/api.utils'
import { IPatch } from '../models/api.model'

const getPatchNotes = async (fileName: string) => {
  const { data } = await axios.get<IPatch>(`/${fileName}.json`, { withCredentials: true })

  return data
}

export function useGetPatchNotes(fileName: string) {
  return useQuery(`${GET_PATCH_NOTES_KEY}_${fileName}`, () => getPatchNotes(fileName))
}

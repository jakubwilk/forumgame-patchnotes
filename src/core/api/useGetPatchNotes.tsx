import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { GET_PATCH_NOTES_KEY } from '../utils/api.utils'
import { TPatch } from '../models/api.model'

const getPatchNotes = async (fileName: string) => {
  const { data } = await axios.get<TPatch>(`/${fileName}.json`, { withCredentials: true })

  return data
}

export function useGetPatchNotes(fileName: string) {
  return useQuery<TPatch>({
    queryKey: [`${GET_PATCH_NOTES_KEY}_${fileName}`],
    queryFn: () => getPatchNotes(fileName),
  })
}

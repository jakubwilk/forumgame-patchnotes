import axios from 'axios'
import { useQuery } from 'react-query'
import { IConfig } from '../models/api.model'
import { GET_CONFIG_KEY } from '../utils/api.utils'

const getConfig = async () => {
  const { data } = await axios.get<IConfig>('/config.json', { withCredentials: true })

  return data
}

export function useGetConfig() {
  return useQuery(GET_CONFIG_KEY, getConfig)
}

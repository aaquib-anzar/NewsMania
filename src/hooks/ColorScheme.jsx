import { useContext } from 'react'
import NewsContext from '../store/NewsContext'
export const useTheme = () => useContext(NewsContext)
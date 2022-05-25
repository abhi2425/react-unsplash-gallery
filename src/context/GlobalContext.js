import React, { createContext, useCallback, useContext, useState } from 'react'
import request from '../data/request'
import { getColumns } from '../utils/column'
import { modelData } from '../utils/data-model'

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const [searchData, setSearchData] = useState(new Array(20).fill(0))
  const [searchLoading, setSearchLoading] = useState(false)
  const [pageLoading, setPageLoading] = useState(true)
  const [columns, setColumns] = useState(getColumns(window.innerWidth))
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light-theme',
  )

  const getRandomPics = useCallback(async () => {
    const page = Math.floor(Math.random() * 10 ** 2)
    const url = `photos?page=${page}&per_page=40&orientation=landscape`

    setPageLoading(true)
    const { response, status } = await request(url, 'GET')
    setTimeout(() => setPageLoading(false), 500)

    if (status === 'success') {
      const searchData = modelData(response.data)
      setSearchData(searchData)
    }
    if (status === 'failure') {
    }
  }, [])

  const getSearchResult = useCallback(async ({ searchTerm = '' }) => {
    const page = Math.floor(Math.random() * 10 ** 2)
    const url = `search/photos?page=${page}&query=${searchTerm}&per_page=50&orientation=landscape`

    setSearchLoading(true)
    const { response, status } = await request(url, 'GET')
    setSearchLoading(false)

    if (status === 'success') {
      const searchData = modelData(response.data?.results)
      setSearchData(searchData)
    }
    if (status === 'failure') {
    }
  }, [])

  const values = {
    theme,
    searchData,
    searchLoading,
    pageLoading,
    columns,
    setTheme,
    setSearchData,
    getRandomPics,
    getSearchResult,
    setColumns,
  }

  return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
}

export const useGlobalContext = () => useContext(GlobalContext)
export default GlobalContextProvider

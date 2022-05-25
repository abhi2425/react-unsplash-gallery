import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { IoSearch } from 'react-icons/io5'
import { MdCancel } from 'react-icons/md'
import { useGlobalContext } from '../../context/GlobalContext'
import FormInput from '../UI/FormInput/FormInput'
import Spinner from '../UI/Loading/Spinner'
import './style.css'

const SearchInput = () => {
  const { register, watch, setValue, handleSubmit } = useFormContext()
  const searchTerm = watch('search')?.toLowerCase()

  const { searchLoading, setSearchData, searchedData, getSearchResult, getRandomPics } =
    useGlobalContext()

  useEffect(() => {
    if (searchTerm?.length > 0) {
      let clear = setTimeout(() => getSearchResult({ searchTerm }), 650)
      return () => clearTimeout(clear)
    }
  }, [getSearchResult, searchTerm])

  return (
    <form
      style={{ position: 'relative' }}
      onSubmit={handleSubmit((data) => getSearchResult({ searchTerm: data?.search }))}>
      <i className='search-icon'>
        <IoSearch size={20} color='var(--color-dark-grey)' />
      </i>

      <FormInput
        type='text'
        name='search'
        placeholder='Search high resolution Images, categories, wallpapers...'
        reference={register}
        inputStyle={{
          padding: '1.5rem',
          paddingLeft: '5rem',
          paddingRight: '2.5rem',
        }}
      />
      {searchLoading ? (
        <i className='search-reset'>
          <Spinner styles='spinner-small' />
        </i>
      ) : (
        searchTerm && (
          <i
            className='search-reset'
            onClick={() => {
              setValue('search', '')
              !searchedData?.length && getRandomPics()
            }}>
            <MdCancel size={20} color='var(--color-dark-grey)' />
          </i>
        )
      )}
    </form>
  )
}

export default SearchInput

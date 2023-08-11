import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/store'

const useTypedDispatch = () => useDispatch<AppDispatch>()
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export { useTypedDispatch, useTypedSelector }

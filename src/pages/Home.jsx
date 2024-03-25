import React from 'react'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const {t} = useTranslation(["home", "common"])
  return (
    <div className='text-3xl font-bold underline text-red-800'>{t("home")}</div>
  )
}

export default Home
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Biens from '../components/Biens/Biens'
import City from '../components/city/City'
import Layout from '../components/Layout'
import { useAuth } from '../hooks/useAuth'
import { useUserMutation } from '../services/authApi'
import { setUser } from '../store/reducers/authSlice'

const Home: NextPage = () => {
  const router = useRouter();
  const { isAuth } = useAuth();
  const dispatch = useDispatch();
  const [user, { isLoading }] = useUserMutation();

  useEffect(() => {
    !isAuth ? router.push("/login") : getUser();
  }, [isAuth]);

  const getUser = async () => {
    const userData = await user().unwrap();
    dispatch(setUser({ user: userData }));
  };
  return (
    <Layout title="Accueil">
      <div className="max-w-[1000px] sm:mx-5 md:mx-5 mx-auto">
        <City />
        <Biens/>
      </div>
    </Layout>
  )
}

export default Home

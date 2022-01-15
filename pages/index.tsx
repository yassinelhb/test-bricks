import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import City from '../components/city/city'
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
      <div className="max-w-[1000px] md:mx-5 mx-auto">
        <City />
      </div>
    </Layout>
  )
}

export default Home

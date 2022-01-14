import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";
import { LoginRequest, RequestError } from "../types";
import { useLoginMutation } from "../services/authApi";
import { setCredentials } from "../store/reducers/authSlice";

const schema = yup.object().shape({ email: yup.string().required("Email est obligatoire"), password: yup.string().required("Mot de passe est obligatoire") });

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuth } = useAuth();

  isAuth && router.push("/");

  const { register, handleSubmit, formState: {
    errors
  } } = useForm<LoginRequest>({ resolver: yupResolver(schema) });

  const [login, {
    isLoading,
    isError,
    error
  }
  ] = useLoginMutation();

  const loginForm = async (data: LoginRequest) => {
    const user = await login({
      ...data
    }).unwrap();
    dispatch(setCredentials(user));
    localStorage.setItem("token", user.token);
    router.push("/");
  };

  return (<Layout title="Se connecter">
    <div className="md:bg-none bg-[url('/images/background.png')] bg-no-repeat bg-right h-screen">
      <div className="max-w-[1200px] mx-auto flex justify-between lg:justify-center">
        <div className="xs:w-full w-103.75">
          <div className="flex items-center justify-between py-7.5 mb-12.5 xs:bg-white xs:px-4">
            <Image src="/images/logo.png" alt="" width={176} height={24} />
            <div className="flex items-center justify-between w-13 h-7.5 rounded border border-[#e5e5e5] px-1.25">
              <Image src="/icons/Flag_of_France.png" alt="flag" width={20} height={13.33} />
              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.3137 0.656854L6.65686 6.31371L1.00001 0.656854" stroke="#889EB0" />
              </svg>
            </div>
          </div>
          <div className="xs:px-5 px-0">
            <form onSubmit={handleSubmit(loginForm)}>
              <p className="xs:text-[15px] text-[17px] leading-[20.72px] font-semibold xs:leading-[18.29px] text-dark mb-3.5">
                Connexion via les réseaux sociaux :
              </p>
              <div className="flex xs:mb-10 mb-15 space-x-2">
                <a href={""} className="flex h-10.5 bg-white items-center justify-center text-[15px] rounded flex-1 hover:shadow-md transition ease-in-out delay-50 hover:-translate-y-1">
                  <Image src="/icons/google.png" alt="google" width={18} height={18} />
                  <span className="ml-1.5 xs:hidden">Google</span>
                </a>
                <a href={""} className="flex h-10.5 bg-white items-center justify-center text-[15px] rounded flex-1 hover:shadow-md transition ease-in-out delay-50 hover:-translate-y-1">
                  <Image src="/icons/linkedin.png" alt="linkedin" width={18} height={18} />
                  <span className="ml-1.5 xs:hidden">Linkedin</span>
                </a>
                <a href={""} className="flex h-[42px] bg-white items-center justify-center text-[15px] rounded flex-1 hover:shadow-md transition ease-in-out delay-50 hover:-translate-y-1">
                  <Image src="/icons/facebook.png" alt="facebook" width={18} height={18} />
                  <span className="ml-1.5 xs:hidden">Facebook</span>
                </a>
              </div>
              {isError && (
                <div className="bg-red-100 text-sm text-red-700 rounded h-[42px] flex items-center justify-center mb-5">
                  {(error as RequestError).data?.message}
                </div>
              )}

              <p className="xs:text-[15px] text-[17px] leading-[20.72px] font-semibold xs:leading-[18.29px] text-dark mb-3.5">
                Ou via votre adresse mail:
              </p>
              <div className="mb-3">
                <input type="text" placeholder="Adresse e-mail" defaultValue="nebostic@gmail.com" className={`w-full h-10.5 bg-white border-2 border-white rounded text-[15px] font-medium pl-3.5 outline-none hover:shadow-md transition ease-in-out delay-50 hover:-translate-y-1 ${errors.email ? "border-red-700" : ""
                  }`}
                  {...register("email")}
                />
                {errors.email && errors.email?.message && (
                  <p className="text-red-700 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="relative mb-[12px]">
                <input type="password" placeholder="Mot de passe" defaultValue="Toto1234" className={`w-full h-10.5 bg-white border-2 border-white rounded text-[15px] font-medium pl-3.5 outline-none hover:shadow-md transition ease-in-out delay-50 hover:-translate-y-1 ${errors.password ? "border-red-700" : ""
                  }`}
                  {...register("password")}
                />
                <Link href={""}>
                  <a className="absolute right-3.25 top-3.25 text-dark text-[13px] leading-[15.85px] underline">
                    Oublié?
                  </a>
                </Link>
                {errors.password && errors.password?.message && (
                  <p className="text-red-700 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <button className={`w-full bg-[#ed5d3b] font-semibold rounded-[5px] h-10.5 mb-15 text-white flex items-center justify-center hover:shadow-md transition ease-in-out delay-50 ${!isLoading
                  ? " hover:-translate-y-1"
                  : ""}`} type="submit" disabled={isLoading}>
                {
                  isLoading && (<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>)
                }
                Se connecter
              </button>
              <p className="xs:text-[15px] text-[17px] leading-[20.72px] font-semibold xs:leading-[18.29px] text-dark mb-3.5">
                Pas encore de compte ?{" "}
                <Link href="/">
                  <a className="text-primary underline">Créer un compte</a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>);
};

export default Login;

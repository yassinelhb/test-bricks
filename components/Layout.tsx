import {NextPage} from "next";
import Head from "next/head";
import {TLayout} from "../types";

const Layout: NextPage<TLayout> = ({title, children}) => {
  return (<div>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      <title>{title}</title>
    </Head>
    <main>{children}</main>
  </div>);
};

export default Layout;

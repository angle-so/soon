import React from 'react';
import Head from 'next/head';
import styles from "../styles/Index.module.css";

export default function Home() {
 
  const [isSaving, setIsSaving] = React.useState(false);
  const [submitLabel, setSubmitLabel] = React.useState('Notify Me');
  
  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsSaving(true);
      setSubmitLabel('Done!');

      const isProd = process.env.NODE_ENV === 'production';
      const base = isProd ? 'https://angle.so' : 'http://localhost:3000';

      await fetch(`${base}/api/save`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email_address: e.target.email.value
        }),
      });
    }
    catch(e) {
      alert('Something went wrong, try again later.');
    }
    finally {
      e.target.reset();
      setIsSaving(false);
    }
  }

  const title = 'Angle Mail';
  const description = 'Next-gen email client .';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://angle.so" property="og:url" />
      </Head>
      <main>
        <div>
          <div className="absolute w-full">
            <nav className="max-w-6xl mx-auto px-6 mt-12 mb-4 flex-col items-center justify-center text-center">
              <a href="/">
                <div className="flex flex-row justify-center">
                  <img src="/static/icons/logo.svg" alt="React Email" className="h-10" />
                </div>
              </a>
            </nav>
          </div>
        </div>
        <div className="flex min-h-screen flex-col justify-center relative">
          <div className='absolute h-screen w-screen'>
            <img src='/static/icons/violet_blur.svg' alt="Backdrop" className='block h-full w-full' /> 
          </div>
          <div className="mx-auto max-w-5xl items-center justify-center">
            <div className="flex flex-col text-center px-4">
              <h1 className="text-gray-12 text-7xl font-extrabold mb-1">
                Join the Waitlist.
              </h1>
              <p className="text-gray-11 text-2xl mb-8 font-medium">
              Be one of the first ones to try the next-gen email experience.
              </p>
              <form className="flex flex-row justify-center items-center" onSubmit={onFormSubmit}>
                <input type="email" name="email" placeholder="Email" className={["w-2/5 outline-none bg-gray-3 hover:bg-gray-4 focus:bg-gray-4 text-sm px-4 h-10 rounded-2xl", styles.email].join(" ")} required />
                <button className="ml-3 rounded-2xl outline-none flex items-center justify-center bg-gray-3 hover:bg-gray-4 p-2" disabled={isSaving}>
                    <img src="/static/icons/submit.svg" className='block scale-75' alt="Submit Icon" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

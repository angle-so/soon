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
  const description = 'Next-gen email client';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="/static/images/og.png" property="og:url" />
      </Head>
      <main>
      <img src='/static/icons/violet_blur.svg' alt="Backdrop" className='absolute h-screen w-screen' /> 

        <div>
          <div className="absolute w-full">
            <nav className="max-w-6xl mx-auto px-6 mt-12 mb-4 flex-col items-center justify-center text-center">
              <a href="/">
                <div className="flex flex-row justify-center">
                  <img src="/static/icons/logo.svg" alt="Angle Email" className="h-10" />
                </div>
              </a>
            </nav>
          </div>
        </div>
        <div className="flex min-h-screen flex-col justify-center relative">
          <div className="mx-auto max-w-5xl items-center justify-center">
            <div className="flex flex-col text-center px-4">
              <h1 className="text-gray-12 text-7xl font-extrabold mb-1">
                Join the Waitlist.
              </h1>
              <p className="text-gray-11 text-2xl mb-8 font-medium">
              Be one of the first ones to try the next-gen email experience.
              </p>
              <form className="flex flex-row justify-center items-center relative">
                <svg className="text-gray-600 relative w-6 h-6 left-10" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"/></svg>
                <input type="email" name="email" placeholder="Email" className=" pl-11 w-4/6 text-lg outline-none bg-neutral-800  hover:bg-gray-4 focus:bg-gray-4 px-4 h-10 rounded-2xl placeholder:text-gray-500 text-white left-16" required autoComplete="off"/>
                <button className="ml-2 rounded-2xl bg-neutral-800 text-gray-600 outline-none flex items-center justify-center hover:bg-gray-4 p-2">
                    <svg className="w-6 h-6  " width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8l-8-8z"/></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

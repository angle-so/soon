import React from 'react';
import Head from 'next/head';


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
      <div>
        <div className="absolute w-full">
          <nav className="max-w-6xl mx-auto px-6 flex-col items-center justify-between mt-6 mb-4">
            <a href="/">
            <img src="/static/logo.svg" alt="React Email" className="h-8" />

            </a>
            
          </nav>
        </div>
      </div>
      <div className="flex min-h-screen flex-col justify-center">
        <div className="mx-auto max-w-5xl items-center justify-center">
          <div className="flex flex-col text-center px-4">
            <p className="text-gray-10 text-sm font-medium uppercase mb-4">
              Coming Soon
            </p>
            <h1 className="text-gray-12 text-5xl font-bold mb-6">
              Join the Waitlist.
            </h1>
            <p className="text-gray-11 text-lg mb-6">
            Be one of the first ones to try the next-gen email experience.
            </p>
            <form className="flex gap-2 mx-auto" onSubmit={onFormSubmit}>
              <input type="email" name="email" placeholder="you@example.com" className="outline-none bg-gray-3 hover:bg-gray-4 focus:bg-gray-4 w-44 text-sm px-4 h-10 rounded-xl " required />
              <button className="box-border outline-none self-center relative w-32 inline-flex items-center justify-center rounded-xl transition hover:scale-110 hover:-rotate-2 active:bg-indigo-500 focus:outline-none focus:ring" disabled={isSaving}>
                <img src="/static/submit.svg" alt="submit Icon" className="absolute left-0 ml-4" />
                
  
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

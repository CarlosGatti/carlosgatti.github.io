// pages/contact.js

import Layout from "../components/Layout";
import styles from '../styles/Home.module.css'
import Head from 'next/head'

const Contact = () => <Layout>

 
<div className={styles.container}>
            <Head>
                <title>Contact - Carlos Gatti</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>

                <div class="min-h-screen bg-white-100 py-6 flex flex-col justify-center sm:py-12">
                <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div class="max-w-md mx-auto">
                        <div>
                        <img src="/gatti-foto.png" alt="gatti-foto" className={styles.gattismall} />
                        </div>
                        <div class="divide-y divide-gray-200">
                        <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <p>If you need to talk to me there are many ways. </p>
                            <ul class="list-disc space-y-2">
                            <li class="flex items-start">
                                <span class="h-6 flex items-center sm:h-7">
                                <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                </span>
                                <p class="ml-2">
                                Email: 
                                <code class="text-sm font-bold text-gray-900"> eduardo.gf@hotmail.com</code>
                                </p>
                            </li>
                            <li class="flex items-start">
                                <span class="h-6 flex items-center sm:h-7">
                                <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                </span>
                                <p class="ml-2">
                                Phone:
                                <code class="text-sm font-bold text-gray-900"> +1(857)350-7504</code>
                                </p>
                            </li>
                            <li class="flex items-start">
                                <span class="h-6 flex items-center sm:h-7">
                                <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                </span>
                                <p class="ml-2">Social Media: <code class="text-sm font-bold text-gray-900"> @carloseduardogatti</code></p>
                            </li>
                            </ul>
                            <p>I usually reply in 24 hours, if you need me urgently it is better to call your cell phone.</p>
                        </div>
                        <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                            <p>Do you want to know more about my projects?</p>
                            <p>
                            <a href="https://github.com/CarlosGatti" class="text-cyan-600 hover:text-cyan-700"> Click here or call me &rarr; </a>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

            </main>
        </div>
</Layout>;

export default Contact;




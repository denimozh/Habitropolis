import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'

const page = () => {
  return (
    <div className='px-80 flex flex-col w-full h-full bg-white'>
        <Link href={"/"} className='flex flex-row gap-5 bg-slate-200 w-fit p-2 rounded-lg items-center'>
            <FaArrowLeft />
            BACK
        </Link>
        <p className='text-4xl px-80'>Terms and Conditions</p>
        <p className='px-80'>
        Your privacy is important to us. It is habitropolis.com&#39;s policy to respect your privacy regarding any information we may collect from you across our website, https://habitropolis.com, and other sites we own and operate.

We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we&apos;re collecting it and how it will be used.

We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we&apos;ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.

We don&apos;t share any personally identifying information publicly or with third-parties, except when required to by law.

We act in the capacity of a data controller and a data processor with regard to the personal data processed through habitropolis.com and the services in terms of the applicable data protection laws, including the EU General Data Protection Regulation (GDPR).

Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.

You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.

Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.


        This policy is effective as of 18 Dec 2024.
        </p>
    </div>
  )
}

export default page
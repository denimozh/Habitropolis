import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
    const session = await auth();
    if (!session) redirect("/sign-in");

    return (
        <div>{session.user?.email}</div>
    )
}

export default page
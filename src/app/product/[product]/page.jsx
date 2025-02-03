import axios from 'axios';
import { cookies } from 'next/headers';
import React from 'react';
import DyanamicProduct from '@/components/Product/DyanamicProduct';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';
import MenuFour from '@/components/Header/MenuFour';
import Footer from '@/components/Footer/Footer';

export default async function page({ params }) {
    try {
        const slug = (await params)?.product;

        const cookieStore = cookies();
        const accessToken = cookieStore.get('accessToken')?.value;
        console.log(accessToken, 'product dyanamic page');

        if (!accessToken) {
            toast.error('Login First');
            redirect('/login'); // Redirects to the login page
            return null; // Stop further execution
        }

        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/product/get?businessType=${process.env.NEXT_PUBLIC_BUSINESS_NAME}&slug=${slug}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        const product = response?.data?.data?.items[0];

        return (
            <section>
                <div id="header" className='relative w-full text-purple'>
                    <MenuFour props="bg-white" />
                </div>
                <DyanamicProduct productMain={product} />
                <Footer />
            </section>
        );
    } catch (error) {
        redirect('/login');
        return null;
    }
}

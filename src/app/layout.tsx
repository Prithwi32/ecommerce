import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import '@/styles/styles.scss';
import GlobalProvider from './GlobalProvider';
import ModalCart from '@/components/Modal/ModalCart';
import ModalWishlist from '@/components/Modal/ModalWishlist';
import ModalSearch from '@/components/Modal/ModalSearch';
import ModalQuickview from '@/components/Modal/ModalQuickview';
import ModalCompare from '@/components/Modal/ModalCompare';
import CountdownTimeType from '@/type/CountdownType';
import { countdownTime } from '@/store/countdownTime';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const serverTimeLeft: CountdownTimeType = countdownTime();

const instrument = Instrument_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Ribbon Pack',
  description: 'Multipurpose eCommerce Template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalProvider>
      <html lang="en">
        <body className={instrument.className}>
          {children}
          <ModalCart/>
          <ModalWishlist />
          <ModalSearch />
          <ModalQuickview />
          <ModalCompare />
          {/* Add ToastContainer for notifications */}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            draggable
            theme="colored"
          />
        </body>
      </html>
    </GlobalProvider>
  );
}

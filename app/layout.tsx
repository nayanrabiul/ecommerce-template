import theme from '@/components/ThemeChange';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Ecommerce-Template',
    description: 'This is a template for an ecommerce website.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    //read from local storage in order to set the theme. only run on client side

    return (
        <html lang='en' data-theme={theme}>
            <body className={inter.className}>{children}</body>
        </html>
    );
}

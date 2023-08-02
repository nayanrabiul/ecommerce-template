'use client';
import AdminNav from '@/components/admin/Nav';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BiAperture, BiArch, BiAtom, BiBath, BiBomb, BiBookReader } from 'react-icons/bi';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className='flex h-screen w-full justify-between  ' data-theme='night'>
                {/* side menu */}
                <div className='w-72 text-neutral '>
                    <h1 className='mb-6 mt-2 p-3 text-center text-2xl font-bold'>🧁 LOGO</h1>
                    <Sidemenu menu={menu} />
                </div>
                {/* body */}
                <div className=' w-full bg-[#f8f8fb]' data-theme='light'>
                    <AdminNav />
                    <div className='p-6'>{children}</div>
                </div>
            </div>
        </>
    );
}

const Sidemenu = ({ menu }) => {
    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState(pathname);

    const renderMenuItem = (item) => {
        let isOpen = false;
        if (item.items) {
            // Check if any child item is active or has an active child
            item.items.forEach((childItem) => {
                if (childItem.items) {
                    childItem.items.forEach((subChildItem) => {
                        if (subChildItem.to === activeLink) {
                            isOpen = true;
                        }
                    });
                }
                if (childItem.to === activeLink) {
                    isOpen = true;
                }
            });
            return (
                <li key={item.label}>
                    <details open={isOpen}>
                        <summary>
                            {item.icon}
                            {item.label}
                        </summary>
                        <ul>{item.items.map((childItem) => renderMenuItem(childItem))}</ul>
                    </details>
                </li>
            );
        } else {
            return (
                <>
                    <li key={item.label}>
                        <Link
                            href={item.to}
                            className={item.to === activeLink ? 'active' : ''}
                            onClick={() => setActiveLink(item.to)}
                        >
                            {item.icon}
                            {item.label}
                        </Link>
                    </li>
                </>
            );
        }
    };

    return <ul className='menu h-full w-full'>{menu.map((item) => renderMenuItem(item))}</ul>;
};

let menu = [
    {
        label: 'Admin',
        icon: <BiAperture />,
        to: '/admin',
    },
    {
        label: 'Demo-1',
        icon: <BiArch />,
        items: [
            {
                label: 'Demo-1',
                to: '/admin/demo1',
            },
            {
                label: 'Demo-2',
                items: [
                    {
                        label: 'Sub-1',
                        to: '/admin/demo1/sub1',
                    },
                    {
                        label: 'Sub-2',
                        to: '/admin/demo1/sub2',
                    },
                ],
            },
        ],
    },
    {
        label: 'Demo-2',
        icon: <BiAtom />,
        items: [
            {
                label: 'Demo-2',
                icon: <BiBath />,
                to: '/admin/demo2',
            },
            {
                label: 'Demo-2',
                icon: <BiAperture />,
                items: [
                    {
                        label: 'Sub-1',
                        icon: <BiBomb />,
                        to: '/admin/demo2/sub1',
                    },
                    {
                        label: 'Sub-2',
                        icon: <BiBookReader />,
                        to: '/admin/demo2/sub2',
                    },
                ],
            },
        ],
    },
];

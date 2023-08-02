'use client';

import { useEffect } from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { themeChange } from 'theme-change';

export const theme = localStorage.getItem('theme');

export default function ThemeDropdown() {
    useEffect(() => {
        themeChange(false);
        // 👆 false parameter is required for react project
    }, []);

    return (
        <div className='rounded-box grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            <div className='dropdown'>
                <label tabIndex={0} className='btn btn-primary m-1'>
                    Change Theme
                    <MdOutlineArrowDropDown />
                </label>
                <ul
                    tabIndex={0}
                    className='menu dropdown-content rounded-box z-[1] w-52 space-y-3 bg-base-100 p-2 shadow'
                >
                    {themes.map((theme) => (
                        <li>
                            <div
                                className='overflow-hidden rounded-lg border border-base-content/20 outline outline-2 outline-offset-2 outline-transparent hover:border-base-content/40'
                                data-set-theme={theme.id}
                                data-theme={theme.id}
                                data-act-class='!outline-base-content'
                            >
                                <div className='w-full  cursor-pointer  font-sans text-base-content'>
                                    <div className='grid grid-cols-5 grid-rows-3'>
                                        <div className='col-start-1 row-span-2 row-start-1 bg-base-200' />
                                        <div className='col-start-1 row-start-3 bg-base-300' />

                                        <div className='col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1  p-2'>
                                            <div className='font-bold'> {theme.id} </div>

                                            <div className='flex flex-wrap gap-1'>
                                                <div className='h-3 w-3 rounded-full bg-primary' />
                                                <div className='h-3 w-3 rounded-full bg-secondary' />
                                                <div className='h-3 w-3 rounded-full bg-neutral' />
                                                <div className='h-3 w-3 rounded-full bg-neutral-focus' />
                                                <div className='h-3 w-3 rounded-full bg-neutral-content' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export let themes = [
    {
        name: '🌝  light',
        id: 'light',
    },
    {
        name: '🌚  dark',
        id: 'dark',
    },
    {
        name: '🧁 halloween',
        id: 'halloween',
    },
];

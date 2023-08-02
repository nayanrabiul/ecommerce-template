import Image from 'next/image';
import { AiFillUnlock, AiOutlineDown, AiOutlineSetting } from 'react-icons/ai';
import { BiWallet } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { GrNotification } from 'react-icons/gr';
import '/node_modules/flag-icons/css/flag-icons.min.css';

export default function AdminNav() {
    return (
        <div className=' w-full bg-white px-3 py-1 text-base-content shadow-md'>
            <div className='flex h-14 items-center justify-between'>
                <div className='flex items-center justify-center'>
                    {/* search box */}
                    <div className='join'>
                        <div>
                            <div>
                                <input
                                    className='input  join-item input-bordered rounded-2xl'
                                    placeholder='Search'
                                />
                            </div>
                        </div>

                        <div className='indicator'>
                            <button className='btn btn-neutral join-item  rounded-2xl'>
                                Search
                            </button>
                        </div>
                    </div>
                    {/* mega menu */}
                    <div className='dropdown dropdown-hover'>
                        <label tabIndex={0} className='btn btn-ghost   m-1'>
                            Mega Menu <AiOutlineDown />
                        </label>
                        <div
                            tabIndex={0}
                            className='card dropdown-content card-compact z-[1] w-64 bg-primary p-2  shadow'
                        >
                            <ul className='menu rounded-box bg-base-200 xl:menu-horizontal lg:min-w-max'>
                                <li>
                                    <a>Solutions</a>
                                    <ul>
                                        <li>
                                            <a>Design</a>
                                        </li>
                                        <li>
                                            <a>Development</a>
                                        </li>
                                        <li>
                                            <a>Hosting</a>
                                        </li>
                                        <li>
                                            <a>Domain register</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Enterprise</a>
                                    <ul>
                                        <li>
                                            <a>CRM software</a>
                                        </li>
                                        <li>
                                            <a>Marketing management</a>
                                        </li>
                                        <li>
                                            <a>Security</a>
                                        </li>
                                        <li>
                                            <a>Consulting</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Products</a>
                                    <ul>
                                        <li>
                                            <a>UI Kit</a>
                                        </li>
                                        <li>
                                            <a>Wordpress themes</a>
                                        </li>
                                        <li>
                                            <a>Wordpress plugins</a>
                                        </li>
                                        <li>
                                            <a>Open source</a>
                                            <ul>
                                                <li>
                                                    <a>Auth management system</a>
                                                </li>
                                                <li>
                                                    <a>VScode theme</a>
                                                </li>
                                                <li>
                                                    <a>Color picker app</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Company</a>
                                    <ul>
                                        <li>
                                            <a>About us</a>
                                        </li>
                                        <li>
                                            <a>Contact us</a>
                                        </li>
                                        <li>
                                            <a>Privacy policy</a>
                                        </li>
                                        <li>
                                            <a>Press kit</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='justify-left items-right flex'>
                    {/* language dropdown */}
                    <div className=' dropdown-hover dropdown dropdown-end dropdown-bottom mr-2'>
                        <label tabIndex={0} className=' m-1 flex items-center justify-center'>
                            <span className='fi fi-gr mr-1 mt-3 text-center text-xl' />
                        </label>
                        <ul
                            tabIndex={0}
                            className='menu dropdown-content rounded-box z-[1] bg-base-100 p-2 shadow '
                        >
                            <li>
                                <div className='flex items-center justify-start'>
                                    <div>
                                        <span className='fi fi-gr mr-1  text-center text-xl' />
                                    </div>
                                    <div>English</div>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center justify-start'>
                                    <div>
                                        <span className='fi fi-us mr-1  text-center text-xl' />
                                    </div>
                                    <div>Use</div>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center justify-start'>
                                    <div>
                                        <span className='fi fi-bn mr-1  text-center text-xl' />
                                    </div>
                                    <div>Bn</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* notications */}
                    <div className=' dropdown-hover dropdown dropdown-end dropdown-bottom '>
                        <label tabIndex={0} className=' m-2 flex items-center'>
                            <div className='relative mr-2 rounded'>
                                <div className='badge absolute -top-3 left-2 rounded-full bg-red-500'>
                                    11
                                </div>
                                <GrNotification className={'mt-2 h-5 w-5'} />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className='menu dropdown-content rounded-box z-[1] w-64 bg-base-100 p-2 shadow '
                        >
                            <li>
                                <a>
                                    {' '}
                                    <CgProfile className={'h-5 w-5'} /> Profile
                                </a>
                            </li>
                            <li>
                                <a>
                                    {' '}
                                    <BiWallet className={'h-5 w-5'} /> Mi Billitera
                                </a>
                            </li>
                            <li>
                                <a>
                                    {' '}
                                    <AiOutlineSetting className={'h-5 w-5'} /> Settings
                                    <div className='badge badge-primary'>11</div>
                                </a>
                            </li>

                            <li>
                                <a>
                                    {' '}
                                    <AiFillUnlock className={'h-5 w-5'} /> Boloquera Batarita
                                </a>
                            </li>
                            <div className='divider my-1' />
                            <li>
                                <a className='text-red-400'>
                                    <AiFillUnlock className={'h-5 w-5'} /> Power Off
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Profile dropdown */}
                    <div className=' dropdown-hover dropdown dropdown-end dropdown-bottom '>
                        <label tabIndex={0} className=' m-2 flex items-center'>
                            <div className='avatar'>
                                <div className='mr-2 w-8 rounded'>
                                    <Image
                                        src='/avatar.jpg'
                                        alt='Tailwind-CSS-Avatar-component'
                                        width={64}
                                        height={64}
                                        className='rounded-full'
                                    />
                                </div>
                            </div>
                            <span className='mr-1'>Henry</span> <AiOutlineDown />
                        </label>
                        <ul
                            tabIndex={0}
                            className='menu dropdown-content rounded-box z-[1] w-64 bg-base-100 p-2 shadow '
                        >
                            <li>
                                <a>
                                    {' '}
                                    <CgProfile className={'h-5 w-5'} /> Profile
                                </a>
                            </li>
                            <li>
                                <a>
                                    {' '}
                                    <BiWallet className={'h-5 w-5'} /> Mi Billitera
                                </a>
                            </li>
                            <li>
                                <a>
                                    {' '}
                                    <AiOutlineSetting className={'h-5 w-5'} /> Settings
                                    <div className='badge badge-primary'>11</div>
                                </a>
                            </li>

                            <li>
                                <a>
                                    {' '}
                                    <AiFillUnlock className={'h-5 w-5'} /> Boloquera Batarita
                                </a>
                            </li>
                            <div className='divider my-1' />
                            <li>
                                <a className='text-red-400'>
                                    <AiFillUnlock className={'h-5 w-5'} /> Power Off
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

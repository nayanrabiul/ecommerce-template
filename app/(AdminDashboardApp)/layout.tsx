'use client';
import ThemeDropdown from '@/components/ThemeChange';
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='p-1'>
            {/* nav */}
            <div className='my-1 w-full bg-base-200 text-base-content shadow-lg'>
                <ThemeDropdown />
            </div>

            <div className='grid grid-cols-12 gap-6'>
                {/* side menu */}
                <div className='col-span-2'>
                    <Sidemenu menu={menu} />
                </div>
                {/* body */}
                <div className='col-span-9'>{children}</div>
            </div>
        </div>
    );
}

const Sidemenu = ({ menu }) => {
    const renderMenuItem = (item) => {
        if (item.items) {
            return (
                <li key={item.label}>
                    <details>
                        <summary>
                            {item.icon && <i className={item.icon}></i>}
                            {item.label}
                        </summary>
                        <ul>{item.items.map(renderMenuItem)}</ul>
                    </details>
                </li>
            );
        } else {
            return (
                <li key={item.label}>
                    <a href={item.to}>
                        {item.icon && <i className={item.icon}></i>}
                        {item.label}
                    </a>
                </li>
            );
        }
    };

    return (
        <ul className='menu h-full w-full rounded-lg bg-base-200'>{menu.map(renderMenuItem)}</ul>
    );
};

let menu = [
    {
        label: 'resume.pdf',
        icon: 'pi pi-fw pi-home',
        to: '/',
    },

    {
        label: 'My Files',
        icon: 'pi pi-fw pi-id-card',
        items: [
            {
                label: 'Project-final.psd',
                icon: 'pi pi-fw pi-id-card',
                to: '/uikit/formlayout',
            },
            {
                label: 'Images',
                icon: 'pi pi-fw pi-id-card',
                items: [
                    {
                        label: 'Screenshot1.png',
                        icon: 'pi pi-fw pi-id-card',
                        to: '/uikit/formlayout',
                    },
                    {
                        label: 'Screenshot3.png',
                        icon: 'pi pi-fw pi-id-card',
                        to: '/uikit/formlayout',
                    },
                ],
            },
        ],
    },
];

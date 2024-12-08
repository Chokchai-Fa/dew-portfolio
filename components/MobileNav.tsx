"use client";

import React from 'react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { CiMenuFries } from 'react-icons/ci'
import { usePathname } from 'next/navigation';
import { LinkUrl } from './type';

const links: LinkUrl[] = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "profile",
        path: "/profile"
    },
    {
        name: "project",
        path: "/project"
    },
    {
        name: "certificate",
        path: "/certificate"
    },
    {
        name: "activity",
        path: "/activity"
    },
    {
        name: "contact",
        path: "/contact"
    },
];

const MobileNav = (): JSX.Element => {
    const pathName: string = usePathname();
    return <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text-[32px] text-accent' />
            <SheetContent className='flex flex-col'>
                <div className='mt-32 mb-40 text-center text-2xl'>
                    <Link href="/">
                        <h1 className='text-4xl font-semibold'>
                            Chayapa<span className='text-accent'>.</span></h1>
                    </Link>
                </div>

                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`${link.path === pathName &&
                                    "text-accent border-b-2 border-accent"}text-xl 
                                    capitalize hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        )

                    })}
                </nav>
            </SheetContent>

        </SheetTrigger>

    </Sheet>
}

export default MobileNav;
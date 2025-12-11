import React from 'react'
import Link from 'next/link'
import { NavbarConfig } from '@/config/Navbar'
import Container from '../ui/Container'
import Image from 'next/image'
import { ThemeToggleButton } from '../ThemeSwitch'

const Navbar = () => {
    return (
        <Container className='sticky top-0 z-50 rounded-md py-6 backdrop-blur-sm'>
            <div className='flex items-center justify-between px-6'>
                <div className='flex items-baseline gap-4'>
                    <Link href="/">
                        <Image
                            className='h-12 w-12 rounded-md border border-gray-200 bg-blue-300 transition-all duration-300 hover:scale-90 dark:bg-yellow-300'
                            src={NavbarConfig.logo.src}
                            alt={NavbarConfig.logo.alt}
                            width={NavbarConfig.logo.width}
                            height={NavbarConfig.logo.height}
                        />
                    </Link>
                    <div className='flex items-center justify-center gap-4'>
                        {NavbarConfig.navItem.map((item) => (
                            <Link
                                className='transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4'
                                key={item.label}
                                href={item.href}>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <ThemeToggleButton variant="circle" start="top-right" blur />
                </div>
            </div>
        </Container>
    )
}

export default Navbar

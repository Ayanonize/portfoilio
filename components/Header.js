import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header>
            <div className="header-area header-transparent">
                <div className="main-header header-sticky">
                    <div className="container-fluid">
                        <div className="menu-wrapper d-flex align-items-center justify-content-between">

                            <div className="logo">
                                <Link href="index.html"><div className='hero__caption'><h1>Ayanonize</h1></div></Link>
                            </div>

                            <div className="main-menu f-right d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><Link href="#main">Home</Link></li>
                                        <li><Link href="#about">About</Link></li>
                                        <li><Link href="#Expertise">Expertise</Link></li>
                                        <li><Link href="#Portfolio">Portfolio</Link></li>
                                        <li><Link href="#blog">Blog</Link>
                                            <ul className="submenu">
                                                <li><Link href="blog.html">Blog</Link></li>
                                                <li><Link href="blog_details.html">Blog Details</Link></li>
                                                <li><Link href="elements.html">Elements</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="header-info-right d-none d-lg-block">
                                <Link href="/" className="btn header-btn"><span>Let&apos;s Talk <i className="ti-arrow-right"></i></span></Link>
                            </div>

                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header>
            <div class="header-area header-transparent">
                <div class="main-header header-sticky">
                    <div class="container-fluid">
                        <div class="menu-wrapper d-flex align-items-center justify-content-between">

                            <div class="logo">
                                <Link href="index.html"><div className='hero__caption'><h1>Ayanonize</h1></div></Link>
                            </div>

                            <div class="main-menu f-right d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li class="active"><Link href="index.html">Home</Link></li>
                                        <li><Link href="about.html">About</Link></li>
                                        <li><Link href="protfolio.html">Protfolio</Link></li>
                                        <li><Link href="blog.html">Blog</Link>
                                            <ul class="submenu">
                                                <li><Link href="blog.html">Blog</Link></li>
                                                <li><Link href="blog_details.html">Blog Details</Link></li>
                                                <li><Link href="elements.html">Elements</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="contact.html">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>

                            <div class="header-info-right d-none d-lg-block">
                                <Link href="/" class="btn header-btn"><span>Let's Talk <i class="ti-arrow-right"></i></span></Link>
                            </div>

                            <div class="col-12">
                                <div class="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

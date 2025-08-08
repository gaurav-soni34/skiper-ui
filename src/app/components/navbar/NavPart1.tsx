import React from 'react';

const NavPart1 = () => {
    return (
        <div className="flex items-center gap-4">
            {/* Logo and title */}
            <a href="https://skiper-ui.com/" className="flex items-center gap-4">
                <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
                    <ellipse cx="30.882" cy="30.803" rx="30.3097" ry="30.2769" fill="url(#paint0_radial_36_64)" />
                    <defs>
                        <radialGradient id="paint0_radial_36_64" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.572266 0.526062) rotate(44.969) scale(85.6825 85.6824)">
                            <stop offset="0.352001" stopColor="#090909" />
                            <stop offset="0.591494" stopColor="#2770EA" />
                            <stop offset="0.793825" stopColor="#FF7E97" />
                            <stop offset="0.972489" stopColor="#FF9203" />
                        </radialGradient>
                    </defs>
                </svg>
                <h4 className='font-bold text-lg text-black'>skiper/ui</h4>
                <p className="text-xs border border-orange-500 text-orange-500 rounded-full py-[1px] px-[8px]">Beta</p>
            </a>
            {/* Navigation links */}
            <a href="https://skiper-ui.com/docs/components/theme-toggle-animations" className="text-gray-400">Components</a>
            <a href="https://skiper-ui.com/pricing" className="text-gray-400">Pricing</a>
            <a href="https://skiper-ui.com/newsletter" className="text-gray-400">NewsLetter</a>
        </div>
    );
}

export default NavPart1;
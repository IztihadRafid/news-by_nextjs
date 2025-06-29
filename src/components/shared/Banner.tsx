import React from 'react';
import { Button } from '../ui/button';
import banner from "@/assests/banner.jpg"
import Image from 'next/image';
const Banner = () => {
    return (
        <div className='bg-slate-100'>
            <div className='p-8 grid grid-cols-1  md:grid-cols-2 items-center gap-8'>
                {/* image */}
                <div>
                    <Image src={banner} alt='banner'></Image>
                   
                </div>

                <div className='space-y-4 flex flex-col'>
                    <h4 className='text-sm font-medium text-gray-500'>Technology</h4>
                    <h2 className='font-bold text-3xl'>OpenAI is growing fast and burning through piles of money</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam hic commodi suscipit obcaecati amet velit quidem veniam atque animi voluptatem! Eveniet quo quidem saepe officiis. Similique reprehenderit commodi repellat facilis neque possimus laudantium minima ea, sequi veritatis hic velit sapiente eveniet, perspiciatis voluptate libero corporis numquam, consequuntur rerum natus odio quas. Sint,<br /><br /> veniam. Repellendus perferendis exercitationem fugiat ab dolorem cupiditate unde eius optio nisi harum qui, placeat aliquid quae impedit accusamus nihil quibusdam aliquam quasi iure quidem deserunt cumque commodi maiores quisquam? Eligendi iure voluptate laboriosam magni labore saepe! Harum iste, voluptatum recusandae quae soluta eos amet illum asperiores ratione!</p>
                    <Button variant={"default"}>Read More</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
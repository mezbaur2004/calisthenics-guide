import React from 'react';

interface PageProps {
    params: Promise<{slug:string}>
}

const Page =async ({params}:PageProps) => {
    const {slug} =await params;
    console.log(slug);
    return (
        <div>

        </div>
    );
};

export default Page;
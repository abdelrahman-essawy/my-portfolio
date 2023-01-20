import { Suspense } from 'react';
import '../styles/globals.css';
import Loading from './loading';
export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" >
            <Suspense fallback={<Loading />} >
                <body className='min-h-screen'>
                    <Loading />
                </body>
            </Suspense>
        </html >
    );
}
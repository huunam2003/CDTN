import { ReactNode } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer';
interface DefaultLayoutProps {
    children: ReactNode;
}
export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

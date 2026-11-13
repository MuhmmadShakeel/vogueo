import type { Metadata } from 'next';
import './globals.css';
import './theme.css';
import Site from '../components/Site';
export const metadata: Metadata = { title: 'Vogue Dental Aesthetics | The art of your smile', description: 'A premium dental aesthetics frontend concept. Explore a considered approach to smile design.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><Site>{children}</Site></body></html> }

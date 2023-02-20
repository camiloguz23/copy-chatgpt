import './globals.scss';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
  variable: '--roboto'
});

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='es' className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}

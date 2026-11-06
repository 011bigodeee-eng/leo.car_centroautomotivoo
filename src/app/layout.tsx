import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
const heading = localFont({src:'./fonts/BarlowCondensed-Bold.ttf', variable:'--font-heading', display:'swap'});
const body = localFont({src:'./fonts/Manrope.ttf',variable:'--font-body',display:'swap'});
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://leocar.pages.dev'),
  title: 'Leo Car | Centro Automotivo em Américo Brasiliense',
  description: 'Mecânica geral, troca de óleo do câmbio automático, suspensão, freios e revisão em Américo Brasiliense. Conheça a Leo Car e solicite atendimento pelo WhatsApp.',
  robots: {index:false,follow:false},
  openGraph: { title:'Leo Car — Precisão em cada detalhe.', description:'Conheça os serviços da Leo Car Centro Automotivo em Américo Brasiliense — SP.',locale:'pt_BR',type:'website',images:[{url:'/images/hero-desktop.webp',width:1600,height:900,alt:'Conceito visual ilustrativo Leo Car'}]},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><head><link rel="preload" as="image" href="/images/hero-desktop.webp" media="(min-width: 641px)"/><link rel="preload" as="image" href="/images/hero-mobile.webp" media="(max-width: 640px)"/></head><body className={`${heading.variable} ${body.variable}`}>{children}</body></html>}

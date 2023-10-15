import Sidebar from '@/components/Sidebar'
import './globals.css'

import { Figtree } from "next/font/google"
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvder from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getSongByUserId from '@/actions/getSongByUserId'
import Player from '@/components/Player'
import getActiveProductsWithPrices from '@/actions/getActiveProductsWithPrices'

const font = Figtree({ subsets: ["latin"] })

export const metadata = {
  title: 'Spotify',
  description: 'Listen ti music',
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const userSongs = await getSongByUserId();
  const products = await getActiveProductsWithPrices();


  return (
    <html lang="ja">
      <body className={font.className}>
        <SupabaseProvider>
          <ToasterProvider />
          <UserProvder>
            <ModalProvider
            products={products}
            />
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
            <Player />
          </UserProvder>
        </SupabaseProvider>
      </body>
    </html>
  )
}

import { LinkArray } from '@/types'
import Link from 'next/link'
import React from 'react'
import { v4 as uuid } from 'uuid'

export default function Sidebar({children, links}:{children:React.ReactNode, links: LinkArray[]}) {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
          <div className="mx-auto grid w-full max-w-6xl gap-2">
            <h1 className="text-3xl font-semibold">Settings</h1>
          </div>
          <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            <nav className="grid gap-4 text-sm text-muted-foreground">
             {
                links.map((link,index) =>(
                    <Link className='transition-all hover:font-semibold text-primary' href={link.link} key={uuid()}>{link.name}</Link>
                ))
             }
            </nav>

                {children}

          </div>
        </main>
      </div>
    </>
  )
}

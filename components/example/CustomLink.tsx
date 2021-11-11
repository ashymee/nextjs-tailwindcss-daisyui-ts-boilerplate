import Link from 'next/link'
import { ReactNode } from 'react'

type CustomLinkProps = {
  children: ReactNode
  href: string
}

const CustomLink = ({ children, href }: CustomLinkProps): JSX.Element => {
  return (
    <Link href={href}>
      <a className='p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'>
        {children}
      </a>
    </Link>
  )
}

export default CustomLink

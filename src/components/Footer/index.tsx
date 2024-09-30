/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
export const navigation = {
  product: [
    {
      name: 'User Guide',
      href: 'https://chainsafe.github.io/forest/introduction.html',
    },
    {
      name: 'CLI Reference',
      href: 'https://chainsafe.github.io/forest/rustdoc/forest_filecoin/index.html',
    },
    { name: 'Developer Documentation', href: 'https://chainsafe.github.io/forest/developer_documentation/introduction.html' },
    {
      name: 'Github Repo',
      href: 'https://github.com/ChainSafe/forest',
    },
  ],
  resources: [
    { name: 'About ChainSafe', href: 'https://chainsafe.io/' },
    { name: 'Careers', href: 'https://chainsafe.io/careers' },
    {
      name: 'Brand Assets',
      href: '/forest-logo-mini.zip',
    },
  ],
  reach: [
    { name: 'General', href: 'https://github.com/ChainSafe/forest/discussions' },
    { name: 'Security', href: 'mailto:security@chainsafe.io' }],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/ChainSafeth',
      icon: (props: any) => (
        <svg
          role='img'
          fill='#fff'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          {...props}>
          <title>Twitter</title>
          <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@ChainSafeSystems',
      icon: (props: any) => (
        <svg fill='#fff' {...props} viewBox='0 0 24 24'>
          <path
            fillRule='evenodd'
            d='M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    
    {
      name: 'Filecoin Slack',
      href: 'https://filecoinproject.slack.com/join/shared_invite/zt-1yxenlrc1-dwCCX7Mv3h9BHr~rQ6uUPw#/shared-invite/email',
      icon: (props: any) => (
       <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-slack" width="38" height="38" viewBox="0 0 32 32" strokeWidth="1.75" stroke="white" fill="none"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12v-6a2 2 0 0 1 4 0v6m0 -2a2 2 0 1 1 2 2h-6" /><path d="M12 12h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1 -2 2v-6" /><path d="M12 12v6a2 2 0 0 1 -4 0v-6m0 2a2 2 0 1 1 -2 -2h6" /><path d="M12 12h-6a2 2 0 0 1 0 -4h6m-2 0a2 2 0 1 1 2 -2v6" /></svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className='bg-neutral-900' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <img src="/banner.png" alt="Forest patterned banner" />
      <div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8'>
            <img
              className='w-[150px]'
              src='/full-mark.png'
              alt='Forest'
            />
            <p className='text-lg leading-6 text-neutral-400'>
              The Filecoin implementation in Rust.
            </p>
            <div className='flex space-x-6'>
              {navigation.social.map((item) => (
                <Link
                  target="_blank"
                  key={item.name}
                  href={item.href}
                  className='hover:brightness-50'>
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-7 w-7' aria-hidden='true' />
                </Link>
              ))}
            </div>
          </div>
          <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-lg font-semibold leading-6 text-white'>
                  Project
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        target="_blank"
                        href={item.href}
                        className='text-lg leading-6 text-neutral-400 hover:text-brand-400'>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-lg font-semibold leading-6 text-white'>
                  Resources
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        target="_blank"
                        href={item.href}
                        className='text-lg leading-6 text-neutral-400 hover:text-brand-400'>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-lg font-semibold leading-6 text-white'>
                  Reach us
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.reach.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        className='text-lg leading-6 text-neutral-400 hover:text-brand-400'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-16 border-t border-green-400/10 pt-8 sm:mt-20 lg:mt-24'>
          <p className='text-sm leading-5 text-neutral-500'>
            &copy; 2023 ChainSafe
          </p>
        </div>
      </div>
    </footer>
  );
}

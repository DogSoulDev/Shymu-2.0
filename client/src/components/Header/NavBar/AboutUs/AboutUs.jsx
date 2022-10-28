import React from "react";
import Footer from "../../../Footer/Footer";
import Header from "../../Header";

const stats = [
 { label: "Founded", value: "2021" },
 { label: "Employees", value: "5" },
 { label: "Beta Users", value: "521" },
 { label: "Raised", value: "$25M" },
];

const people = [
 {
  name: "Marcel Barreiro",
  role: "Senior Designer",
  imageUrl:
   "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  twitterUrl: "#",
  linkedinUrl: "#",
 },
 {
  name: "Alejandro Gaerste",
  role: "Senior Designer",
  imageUrl:
   "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  twitterUrl: "#",
  linkedinUrl: "#",
 },
 {
  name: "Javier Fernandez",
  role: "Senior Designer",
  imageUrl:
   "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  twitterUrl: "#",
  linkedinUrl: "#",
 },
 {
  name: "Ricardo Vieira",
  role: "Senior Designer",
  imageUrl:
   "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  twitterUrl: "#",
  linkedinUrl: "#",
 },
 {
  name: "Adriá Valles",
  role: "Senior Designer",
  imageUrl:
   "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  twitterUrl: "#",
  linkedinUrl: "#",
 },
 // More people...
];

function AboutUs() {
 return (
  <>
   <Header />
   <div className='relative bg-white py-16 sm:py-24'>
    <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8'>
     <div className='relative sm:py-16 lg:py-0'>
      <div
       aria-hidden='true'
       className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'
      >
       <div className='absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72' />
       <svg
        className='absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
        width={404}
        height={392}
        fill='none'
        viewBox='0 0 404 392'
       >
        <defs>
         <pattern
          id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits='userSpaceOnUse'
         >
          <rect
           x={0}
           y={0}
           width={4}
           height={4}
           className='text-gray-200'
           fill='currentColor'
          />
         </pattern>
        </defs>
        <rect
         width={404}
         height={392}
         fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)'
        />
       </svg>
      </div>
      <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20'>
       {/* Testimonial card*/}
       <div className='relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl'>
        <img
         className='absolute inset-0 h-full w-full object-cover'
         src='https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100'
         alt=''
        />
        <div className='absolute inset-0 bg-indigo-500 mix-blend-multiply' />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90' />
        <div className='relative px-8'>
         <div>
          <img
           className='h-12'
           src='https://tailwindui.com/img/logos/workcation.svg?color=white'
           alt='Workcation'
          />
         </div>
         <blockquote className='mt-8'>
          <div className='relative text-lg font-medium text-white md:flex-grow'>
           <svg
            className='absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400'
            fill='currentColor'
            viewBox='0 0 32 32'
            aria-hidden='true'
           >
            <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
           </svg>
           <p className='relative'>
            Tincidunt integer commodo, cursus etiam aliquam neque, et.
            Consectetur pretium in volutpat, diam. Montes, magna cursus nulla
            feugiat dignissim id lobortis amet.
           </p>
          </div>

          <footer className='mt-4'>
           <p className='text-base font-semibold text-indigo-200'>
            Sarah Williams, CEO at Workcation
           </p>
          </footer>
         </blockquote>
        </div>
       </div>
      </div>
     </div>

     <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
      {/* Content area */}
      <div className='pt-12 sm:pt-16 lg:pt-20'>
       <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
        On a mission to empower teams
       </h2>
       <div className='mt-6 space-y-6 text-gray-500'>
        <p className='text-lg'>
         Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna
         sed consectetur neque tristique pellentesque. Blandit amet, sed aenean
         erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor
         vitae ut. Amet vitae fames senectus vitae.
        </p>
        <p className='text-base leading-7'>
         Sollicitudin tristique eros erat odio sed vitae, consequat turpis
         elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra
         donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros
         erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget
         pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet
         quam urna.
        </p>
        <p className='text-base leading-7'>
         Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel
         ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in
         venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim
         sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
        </p>
       </div>
      </div>

      {/* Stats section */}
      <div className='mt-10'>
       <dl className='grid grid-cols-2 gap-x-4 gap-y-8'>
        {stats.map((stat) => (
         <div key={stat.label} className='border-t-2 border-gray-100 pt-6'>
          <dt className='text-base font-medium text-gray-500'>{stat.label}</dt>
          <dd className='text-3xl font-bold tracking-tight text-gray-900'>
           {stat.value}
          </dd>
         </div>
        ))}
       </dl>
       <div className='mt-10'>
        <a href='#' className='text-base font-medium text-indigo-600'>
         Learn more about how we're changing the world
         <span aria-hidden='true'> &rarr;</span>
        </a>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div className='bg-white'>
    <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
     <p className='text-center text-lg font-semibold text-gray-600'>
      Trusted by over 5 very average small businesses
     </p>
     <div className='mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8'>
      <div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
       <img
        className='max-h-12'
        src='https://tailwindui.com/img/logos/transistor-logo-gray-400.svg'
        alt='Workcation'
       />
      </div>
      <div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
       <img
        className='max-h-12'
        src='https://tailwindui.com/img/logos/mirage-logo-gray-400.svg'
        alt='Mirage'
       />
      </div>
      <div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
       <img
        className='max-h-12'
        src='https://tailwindui.com/img/logos/tuple-logo-gray-400.svg'
        alt='Tuple'
       />
      </div>
      <div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
       <img
        className='max-h-12'
        src='https://tailwindui.com/img/logos/laravel-logo-gray-400.svg'
        alt='Laravel'
       />
      </div>
      <div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
       <img
        className='max-h-12'
        src='https://tailwindui.com/img/logos/statickit-logo-gray-400.svg'
        alt='StaticKit'
       />
      </div>
      <div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
       <img
        className='max-h-12'
        src='https://tailwindui.com/img/logos/statamic-logo-gray-400.svg'
        alt='Statamic'
       />
      </div>
     </div>
    </div>
   </div>
   <div className='bg-gray-900'>
    <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24'>
     <div className='space-y-12'>
      <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
       <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
        Meet our team
       </h2>
       <p className='text-xl text-gray-300'>
        Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus
        sit pretium egestas vel mattis neque.
       </p>
      </div>
      <ul
       role='list'
       className='space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8'
      >
       {people.map((person) => (
        <li
         key={person.name}
         className='rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left'
        >
         <div className='space-y-6 xl:space-y-10'>
          <img
           className='mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56'
           src={person.imageUrl}
           alt=''
          />
          <div className='space-y-2 xl:flex xl:items-center xl:justify-between'>
           <div className='space-y-1 text-lg font-medium leading-6'>
            <h3 className='text-white'>{person.name}</h3>
            <p className='text-indigo-400'>{person.role}</p>
           </div>

           <ul role='list' className='flex justify-center space-x-5'>
            <li>
             <a
              href={person.twitterUrl}
              className='text-gray-400 hover:text-gray-300'
             >
              <span className='sr-only'>Twitter</span>
              <svg
               className='h-5 w-5'
               aria-hidden='true'
               fill='currentColor'
               viewBox='0 0 20 20'
              >
               <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
              </svg>
             </a>
            </li>
            <li>
             <a
              href={person.linkedinUrl}
              className='text-gray-400 hover:text-gray-300'
             >
              <span className='sr-only'>LinkedIn</span>
              <svg
               className='h-5 w-5'
               aria-hidden='true'
               fill='currentColor'
               viewBox='0 0 20 20'
              >
               <path
                fillRule='evenodd'
                d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                clipRule='evenodd'
               />
              </svg>
             </a>
            </li>
           </ul>
          </div>
         </div>
        </li>
       ))}
      </ul>
     </div>
    </div>
   </div>
   <div className='overflow-hidden bg-gray-50 py-16'>
    <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
     <div className='mx-auto max-w-prose text-base lg:max-w-none'>
      <h2 className='text-lg font-semibold text-indigo-600'>Transactions</h2>
      <p className='mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
       What makes us different
      </p>
     </div>
     <div className='relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72'>
      <p className='text-lg text-gray-500'>
       Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna
       sed consectetur neque tristique pellentesque. Blandit amet, sed aenean
       erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor
       vitae ut. Amet vitae fames senectus vitae.
      </p>
     </div>

     <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'>
      <div className='relative z-10'>
       <div className='prose prose-indigo mx-auto text-gray-500 lg:max-w-none'>
        <p>
         Sollicitudin tristique eros erat odio sed vitae, consequat turpis
         elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra
         donec ut volutpat donec laoreet quam urna.
        </p>
        <ul role='list'>
         <li>Quis elit egestas venenatis mattis dignissim.</li>
         <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
         <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
        </ul>
        <p>
         Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel
         ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in
         venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim
         sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
        </p>
        <h3>We’re here to help</h3>
        <p>
         Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur
         pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim
         id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus.
         Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.
        </p>
       </div>
       <div className='mx-auto mt-10 flex max-w-prose text-base lg:max-w-none'>
        <div className='rounded-md shadow'>
         <a
          href='#'
          className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700'
         >
          Contact sales
         </a>
        </div>
        <div className='ml-4 rounded-md shadow'>
         <a
          href='#'
          className='flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50'
         >
          Learn more
         </a>
        </div>
       </div>
      </div>
      <div className='relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none'>
       <svg
        className='absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20'
        width={404}
        height={384}
        fill='none'
        viewBox='0 0 404 384'
        aria-hidden='true'
       >
        <defs>
         <pattern
          id='bedc54bc-7371-44a2-a2bc-dc68d819ae60'
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits='userSpaceOnUse'
         >
          <rect
           x={0}
           y={0}
           width={4}
           height={4}
           className='text-gray-200'
           fill='currentColor'
          />
         </pattern>
        </defs>
        <rect
         width={404}
         height={384}
         fill='url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)'
        />
       </svg>
       <blockquote className='relative rounded-lg bg-white shadow-lg'>
        <div className='rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8'>
         <img
          src='https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg'
          alt='Workcation'
          className='h-8'
         />
         <div className='relative mt-8 text-lg font-medium text-gray-700'>
          <svg
           className='absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-200'
           fill='currentColor'
           viewBox='0 0 32 32'
           aria-hidden='true'
          >
           <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
          </svg>
          <p className='relative'>
           Tincidunt integer commodo, cursus etiam aliquam neque, et.
           Consectetur pretium in volutpat, diam. Montes, magna cursus nulla
           feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu
           proin massa, lectus.
          </p>
         </div>
        </div>
        <cite className='relative flex items-center rounded-b-lg bg-indigo-600 py-5 px-6 not-italic sm:mt-10 sm:items-start sm:py-5 sm:pl-12 sm:pr-10'>
         <span className='relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:-translate-y-1/2 sm:transform'>
          <img
           className='h-12 w-12 rounded-full bg-indigo-300 sm:h-20 sm:w-20'
           src='https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80'
           alt=''
          />
         </span>
         <span className='relative ml-4 font-semibold leading-6 text-indigo-300 sm:ml-24 sm:pl-1'>
          <span className='font-semibold text-white sm:inline'>
           Judith Black
          </span>{" "}
          <span className='sm:inline'>CEO at Workcation</span>
         </span>
        </cite>
       </blockquote>
      </div>
     </div>
    </div>
   </div>

   <Footer />
  </>
 );
}

export default AboutUs;

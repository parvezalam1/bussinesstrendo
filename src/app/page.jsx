
import Image from 'next/image';
import { Hero } from './components/Hero';
import { Form } from './components/Form';
import { LatestNews } from './components/LatestNews';
import { Footer } from './components/Footer';
const Homepage = () => <div className="overflow-x-hidden">
  <Hero />
  {/* collaboraion process */}

  <div className='lg:p-20 p-2 lg:translate-x-32 lg:w-4/5 w-full gap-4 flex flex-wrap lg:justify-between justify-center items-center lg:h-[50vh] h-auto shadow-xl shadow-gray-300'>
    <div className="flex justify-center items-center flex-col gap-3">
      <Image src={'https://cdn.pixabay.com/photo/2017/06/07/14/10/at-sign-2380473_640.png'} width={70} height={50} alt='' />
      <div className="title font-semibold text-2xl text-purple-500">Estemating Proect</div>
      <h5 className='font-medium text-md text-red-300'>Preparing Requirements</h5>
    </div>
    <div className="flex justify-center items-center flex-col gap-3">
      <Image src={'https://cdn.pixabay.com/photo/2017/06/07/14/10/at-sign-2380473_640.png'} width={70} height={50} alt='' />
      <div className="title font-semibold text-2xl text-purple-500">Estemating Proect</div>
      <h5 className='font-medium text-md text-red-300'>Preparing Requirements</h5>
    </div>
    <div className="flex justify-center items-center flex-col gap-3">
      <Image src={'https://cdn.pixabay.com/photo/2017/06/07/14/10/at-sign-2380473_640.png'} width={70} height={50} alt='' />
      <div className="title font-semibold text-2xl text-purple-500">Estemating Proect</div>
      <h5 className='font-medium text-md text-red-300'>Preparing Requirements</h5>
    </div>
  </div>

  {/* marketing company */}

  <div className='lg:px-20 lg:py-5 p-2 w-full h-fit flex lg:flex-row flex-col gap-3'>
    {/* left */}
    <div className='relative w-full lg:w-2/4 lg:h-[50vh] h-[50vh]'>
      <Image
        src={'https://cdn.pixabay.com/photo/2022/07/08/05/43/seo-7308528_640.png'}
        fill
        alt='' />
    </div>
    {/* right */}
    <div className='lg:px-12 p-2 lg:py-4 flex justify-center md:items-center items-start flex-col gap-4 lg:w-2/4 w-full lg:h-fit h-2/4'>
      {/* title */}
      <h2 className='lg:text-3xl md:text-2xl sm:text-2xl text-xl font-semibold text-gray-400'>Digital Marketing Agency Comapny That Offers Greate Results</h2>
      {/* description */}
      <h5 className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia eligendi, in natus deleniti et commodi quae error adipisci eveniet explicabo iure quaerat ullam magnam libero autem saepe dignissimos nostrum veniam voluptatem non quis molestias ad! Ipsam asperiores animi repudiandae quas officia! Blanditiis numquam nostrum nulla neque, aliquam pariatur voluptas?
        Labore mollitia dolorem corrupti ratione.</h5>
      <button className='font-extrabold text-3xl text-cyan-400 bg-slate-500 px-7 py-2 items-end'>See More</button>
    </div>
  </div>

  <div className='flex lg:flex-row flex-col w-full'>
    {/* left */}
    <div className='flex justify-center items-center flex-col gap-3 lg:w-2/4 w-full h-full lg:p-20 p-2'>
      <h2 className='capitalize font-extrabold lg:text-3xl md:text-2xl text:xl text-gray-400'>
        great experienced deliver quickly with the best digital marketing company</h2>
      <h5 className='lg:font-medium font-normal lg:text-md text-md text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi reiciendis officia minus atque consectetur magni, nihil sed error animi maiores ratione repellendus! Eaque omnis beatae quas sunt tenetur consectetur, impedit ipsam ut nostrum id ullam ipsa, rem vitae itaque sint cupiditate deleniti facilis quis amet. Fugit libero sunt dolores sint repudiandae veniam totam! Quis temporibus obcaecati, possimus reprehenderit quidem aut tempore optio animi quam accusamus deleniti sequi eum. Quidem ex, nam quasi maxime tempore dicta aliquid rerum ullam eligendi fuga magnam, consequuntur et facilis! Dicta distinctio quam adipisci rerum recusandae corrupti sit nemo quibusdam accusantium fuga,
        cupiditate id possimus perspiciatis?</h5>
    </div>
    {/* right */}
    <div className='perspective-dramatic p-2 lg:w-2/4 w-full flex justify-center items-center gap-3 flex-wrap transition-all hover:rotate-x-90 origin-center'>
      {/* cards */}
      <div className='relative w-72 h-52 rounded-md lg:flex-shrink-0 lg:flex-grow-0 flex-shrink flex-grow  bg-red-200'>
        <Image
          className='rounded-md z-0'
          src={'https://cdn.pixabay.com/photo/2016/03/09/13/58/online-marketing-1246457_640.jpg'} fill alt='' />
        {/* text */}
        <span className='z-50 block p-2 w-72 h-52 justify-center items-center rounded-md lg:flex-shrink-0 lg:flex-grow-0 flex-shrink flex-grow'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt commodi minima
          veniam libero fuga reiciendis placeat beatae exercitationem debitis?</span>
      </div>
    </div>
  </div>

  {/* our specialization digial services */}

  <div className='lg:px-20 lg:py-2 p-2 w-full h-fit'>
    <h2 className='text-center font-semibold lg:text-4xl md:text-2xl text-xl capitalize'>
      our specialization digital services</h2>
    <h5 className='text-center mt-4'>We can cover all your need digital marketing services</h5>
    {/* services */}
    <div className='lg:p-20 p-2 w-full h-fit flex justify-center items-center gap-5 flex-wrap'>
      {/* cards */}
      <div className=' p-3 rounded-md w-80 h-72 shadow-md flex justify-center items-center flex-col gap-3'>
        <Image src={'https://cdn.pixabay.com/photo/2022/07/23/05/05/computer-7339324_640.png'} width={100} height={50} alt='' />
        <h2 className='text-2xl font-medium'>Content Marketing</h2>
        <h5 className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, numquam ipsa. Id voluptatum iusto nihil?</h5>
      </div>
      <div className=' p-3 rounded-md w-80 h-72 shadow-md flex justify-center items-center flex-col gap-3'>
        <Image src={'https://cdn.pixabay.com/photo/2022/07/23/05/05/computer-7339324_640.png'} width={100} height={50} alt='' />
        <h2 className='text-2xl font-medium'>Content Marketing</h2>
        <h5 className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, numquam ipsa. Id voluptatum iusto nihil?</h5>
      </div>
      <div className=' p-3 rounded-md w-80 h-72 shadow-md flex justify-center items-center flex-col gap-3'>
        <Image src={'https://cdn.pixabay.com/photo/2022/07/23/05/05/computer-7339324_640.png'} width={100} height={50} alt='' />
        <h2 className='text-2xl font-medium'>Content Marketing</h2>
        <h5 className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, numquam ipsa. Id voluptatum iusto nihil?</h5>
      </div>
      <div className=' p-3 rounded-md w-80 h-72 shadow-md flex justify-center items-center flex-col gap-3'>
        <Image src={'https://cdn.pixabay.com/photo/2022/07/23/05/05/computer-7339324_640.png'} width={100} height={50} alt='' />
        <h2 className='text-2xl font-medium'>Content Marketing</h2>
        <h5 className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, numquam ipsa. Id voluptatum iusto nihil?</h5>
      </div>
      <div className=' p-3 rounded-md w-80 h-72 shadow-md flex justify-center items-center flex-col gap-3'>
        <Image src={'https://cdn.pixabay.com/photo/2022/07/23/05/05/computer-7339324_640.png'} width={100} height={50} alt='' />
        <h2 className='text-2xl font-medium'>Content Marketing</h2>
        <h5 className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, numquam ipsa. Id voluptatum iusto nihil?</h5>
      </div>
    </div>
  </div>

  {/* company facts */}

  <div className='lg:px-20  p-2 w-full h-fit'>
    <h1 className='text-center font-extrabold lg:text-3xl text-xl'>Company Facts</h1>
    <h5 className='text-center mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi beatae officiis alias!</h5>
    {/* card hover effects */}
    <div className='lg:p-20 p-2 w-full h-fit flex justify-center items-center flex-wrap gap-4 shadow-2xl'>
      {/* card */}
      <div className='p-2 w-64 h-fit rounded-md shadow-md hover:shadow-xl bg-slate-100 hover:bg-slate-200 hover:-translate-y-7 transition-all flex justify-center items-center flex-col gap-3'>
        <Image src={'https://cdn.pixabay.com/photo/2020/09/17/18/09/computer-5579986_640.png'} width={120} height={70} alt='' />
        <h2 className='text-center font-extrabold lg:text-2xl text-xl'>202+ Happy Clients</h2>
        <h5 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ad repudiandae
          delectus neque inventore excepturi minima, tempora error adipisci. Quasi!</h5>
      </div>
      <div className='p-2 w-64 h-fit rounded-md shadow-md hover:shadow-xl bg-slate-100 hover:bg-slate-200 hover:-translate-y-7 transition-all flex justify-center items-center flex-col gap-3'>
        <Image src={'https://cdn.pixabay.com/photo/2020/09/17/18/09/computer-5579986_640.png'} width={120} height={70} alt='' />
        <h2 className='text-center font-extrabold lg:text-2xl text-xl'>202+ Happy Clients</h2>
        <h5 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ad repudiandae
          delectus neque inventore excepturi minima, tempora error adipisci. Quasi!</h5>
      </div>
      <div className='p-2 w-64 h-fit rounded-md shadow-md hover:shadow-xl bg-slate-100 hover:bg-slate-200 hover:-translate-y-7 transition-all flex justify-center items-center flex-col gap-3'>
        <Image src={'https://cdn.pixabay.com/photo/2020/09/17/18/09/computer-5579986_640.png'} width={120} height={70} alt='' />
        <h2 className='text-center font-extrabold lg:text-2xl text-xl'>202+ Happy Clients</h2>
        <h5 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ad repudiandae
          delectus neque inventore excepturi minima, tempora error adipisci. Quasi!</h5>
      </div>
    </div>
  </div>

  {/* form section  */}

  <div className='flex lg:flex-row flex-col lg:px-20 py-10 w-full h-fit'>
    {/* left */}
    <div className='lg:order-1 order-2 lg:w-2/4 lg:h-[70vh] w-full h-2/4 flex justify-center items-center'>
      <Form/>
    </div>
    {/* right */}
    <div className='lg:order-2 order-1 lg:w-2/4 lg:h-[70vh] w-full h-2/4 p-2'>
      <h2 className='p-2 lg:font-extrabold font-semibold lg:text-3xl md:text-2xl text-xl text-teal-500'>Be on the Top & Get More Traffic to Your Website</h2>
      <h5 className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores soluta esse impedit.</h5>
      <div className='flex justify-between items-center p-2'>
        <span className='block w-7 h-7 rounded-full bg-blue-600 cursor-pointer hover:scale-110'></span>
        <span className='text-md lg:w-[90%] w-[85%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab quibusdam consectetur alias quod et.</span>
      </div>
    
      <div className='flex justify-between items-center p-2'>
        <span className='block w-7 h-7 rounded-full bg-blue-600 cursor-pointer hover:scale-110'></span>
        <span className='text-md lg:w-[90%] w-[85%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab quibusdam consectetur alias quod et.</span>
      </div>
    
      <div className='flex justify-between items-center p-2'>
        <span className='block w-7 h-7 rounded-full bg-blue-600 cursor-pointer hover:scale-110'></span>
        <span className='text-md lg:w-[90%] w-[85%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab quibusdam consectetur alias quod et.</span>
      </div>
    
    </div>
  </div>
  <LatestNews/>
</div>;

export default Homepage;

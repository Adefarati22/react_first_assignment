
export default function HomeCom() {
  return (
    <div className='container mx-auto px-4 py-10 lg:grid grid-cols-12 justify-center items-center'>
    <div className='col-span-12 md:col-span-6 lg:w- lg:text-start my-8 lg:mt-0 '>
        <h1 className='font-bold text-5xl text-center md:text-start'>Manage your Task on <br/> <span className='text-[#974FD0]'>TaskDuty</span></h1>
        <p className='my-4 mx-auto lg:mx-0 lg:w-[70%] text-center md:text-start'>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi voluptatum beatae dolore eaque doloribus repudiandae iure in culpa doloremque aut, aspernatur nostrum quaerat cum odit temporibus molestiae, voluptatem omnis vero, fugit impedit magni atque mollitia autem.
        </p>
        <button className="btn btn-lg bg-[#974FD0] text-white mx-auto block md:mx-0 md:inline-block" type='button'>Go To My Task</button>
    </div>
    <div className='col-span-12 md:col-span-6 h-[350px] md:h-[580px]'>
        <img src='/public/hero-eGcUghao.png' alt='hero image' className='w-full h-full'/>
    </div>
    </div>
  )
}

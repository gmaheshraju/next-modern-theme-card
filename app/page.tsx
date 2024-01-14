import Shoecrad from './components/ShoeCard'

export default function Home() {
  return (
    <section className='py-36'>
      <div className='container flex items-center justify-center space-x-4'>
        <Shoecrad
          price={'100'}
          desc1={'Adidias Air Strong'}
          desc2={'Fast Flexible Durable Years'}
          discount={'30'}
          imageUrl={'/images/shoe.jpeg'}
        ></Shoecrad>
        <Shoecrad
          price={'120'}
          desc1={'Adidas Run Faster'}
          desc2={'Fast Light Awesome'}
          discount={'20'}
          imageUrl={'/images/shoe2.jpeg'}
        ></Shoecrad>
      </div>
    </section>
  )
}

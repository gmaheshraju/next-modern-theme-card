import Image from 'next/image'
import { Button } from '@nextui-org/button'
import { Card, CardBody } from '@nextui-org/card'
import ProductSize from './ProductSize'

interface Props {
  price: string
  desc1: string
  desc2: string
  discount: string
  imageUrl: string
}

export default function Shoecrad({
  price,
  desc1,
  desc2,
  discount,
  imageUrl
}: Props) {
  return (
    <Card className='py-4 lg:w-3/4 xl:w-1/2'>
      <CardBody className='overflow-visible py-2'>
        <div className='flex flex-col gap-6 lg:flex-row'>
          <div className='lg:w-1/2'>
            <Image
              alt='Shoe'
              className='w-full object-cover'
              width='100'
              height='100'
              src={imageUrl}
            />
          </div>
          <div className='lg:w-1/2'>
            <h2 className='text-lg font-bold uppercase'>{desc1}</h2>
            <p className='text-sm text-default-500'>{desc2}</p>

            <div className='mb-6 mt-2 flex gap-3'>
              <span className='font-bold'>{price}</span>
              <span className='text-default-600 line-through'>$350</span>
              <span className='text-success'>{discount}% off</span>
            </div>

            <ProductSize />

            <div className='mt-6 flex gap-6'>
              <Button color='primary'>Buy now</Button>
              <Button color='primary' variant='bordered' radius='full'>
                Add to bag
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

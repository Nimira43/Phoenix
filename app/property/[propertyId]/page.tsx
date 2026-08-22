import PropertyStatusBadge from '@/components/property-status-badge'
import { Button } from '@/components/ui/button'
import { getPropertyById } from '@/data/properties'
import numeral from 'numeral'
import ReactMarkdown from 'react-markdown'
import { LiaBathSolid, LiaBedSolid } from 'react-icons/lia'

export default async function Property({
  params,
}: {
  params: Promise<any>
}) {
  const paramsValue = await params;
  const property = await getPropertyById(paramsValue.propertyId)
  console.log(property)
  
  const addressLines = [
    property.address1,
    property.address2,
    property.city,
    property.postcode
  ]
    .filter(addressLine => !!addressLine)
 
  return (
    <div className='grid grid-cols-[1fr_500px]'>
      <div>
        <div className='property-description max-w-screen-md mx-auto py-10 px-4'>
          <Button>
            Back
          </Button>
          <ReactMarkdown>
            {property.description}
          </ReactMarkdown>
        </div>
      </div>
      <div className='bg-grey-4 h-screen p-10 sticky top-0 grid place-items-center'>
        <div className='flex flex-col gap-10 w-full'>
          <PropertyStatusBadge
            status={property.status}
            className='mr-auto text-base'
          />
          <h1 className='text-4xl font-medium'>
            {addressLines.map((addressLine, index) => (
              <div key={index}>
                {addressLine}
                {index < addressLines.length - 1 && ','}
              </div>
            ))}
          </h1>
          <h2 className='text-3xl font-light'>
            £{numeral(property.price).format('0,0')}
          </h2>
          <div className='flex gap-10'>
            <div className='flex gap-2 item-center'>
              <LiaBedSolid className='text-xl' /> {property.bedrooms} Bedrooms
              <LiaBathSolid className='text-xl'/> {property.bathrooms} Bathrooms
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

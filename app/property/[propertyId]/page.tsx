import { Button } from '@/components/ui/button';
import { getPropertyById } from '@/data/properties'
import ReactMarkdown from 'react-markdown'

export default async function Property({
  params,
}: {
  params: Promise<any>;
}) {
  const paramsValue = await params;
  const property = await getPropertyById(paramsValue.propertyId)
  console.log(property)
  return (
    <div className='grid grid-cols-[1fr_400px]'>
      <div>
        <div className='property-description max-w-screen-md mx-auto py-10 px-4'>
          <Button>
            Back
          </Button>
          <ReactMarkdown >
            {property.description}
          </ReactMarkdown>
        </div>
      </div>
      <div className='bg-grey-4 h-screen sticky'>
        
      </div>
    </div>
  )
}

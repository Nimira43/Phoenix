'use client'

import PropertyForm from '@/components/property-form'
import { propertyDataSchema } from '@/validation/propertySchema'
import { z } from 'zod'

export default function NewPropertyForm() {
  const handleSubmit = async (data: z.infer<typeof propertyDataSchema>) => {
    console.log(data)
  }
  
  return (
    <div>
      <PropertyForm
        submitButtonLabel={
          <>
            Create Property
          </>
        }
        handleSubmit={handleSubmit}
      />
    </div>
  )
}
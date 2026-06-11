import { Breadcrumbs } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import PropertiesTable from './properties-table'

export default async function AdminDashboard({
  searchParams
}: {
  searchParams?: Promise<any>
}) {
  const searchParamsValue = await searchParams
  console.log({searchParamsValue})

  return (
    <div>
      <Breadcrumbs
        items={[
          {
            label: 'Dashboard'
          }
        ]}
      />
      <h1 className='text-4xl font-medium mt-6 text-primary'>Admin Dashboard</h1>
      <Button
        asChild
        className='mt-4'
      >
        <Link href='/admin-dashboard/new'>
          New Property
        </Link>
      </Button>
      <PropertiesTable
        page={
          searchParamsValue
            ? parseInt(searchParamsValue.page)
            : 1
        }
      />
    </div>
  )
}
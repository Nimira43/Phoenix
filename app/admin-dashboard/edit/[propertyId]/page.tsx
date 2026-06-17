export default async function EditProperty({
  params
}: {
  params: Promise<any>
}) {
  const paramsValue = await params
  console.log({params})
  
  return (
    <div>Edit Property Page</div>
  )
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FiltersForm from "./filters-form";
import { Suspense } from "react";

export default function PropertySearch() {
  return (
    <div className='max-w-screen-lg mx-auto'>
      <h1 className='text-4xl font-medium p-5'>
        Property Search
      </h1>
      <Card>
        <CardHeader>
          <CardTitle className='font-medium'>
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense>
            <FiltersForm />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}
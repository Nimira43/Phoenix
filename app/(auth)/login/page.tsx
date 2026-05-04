import GoogleButton from '@/components/google-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Login() {
  return (
    <div>
      <Card className='mt-40'>
        <CardHeader>
          <CardTitle className='font-medium text-center'>
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <GoogleButton />
        </CardContent>
      </Card>
    </div>
  )
}
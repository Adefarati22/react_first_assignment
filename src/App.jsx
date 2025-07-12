import AppRoutes from './routes/AppRoutes'
import { Toaster } from 'sonner'
import AuthProvider from './contextStore/AuthProvider'

export default function App() {
  return (
    <>
    <Toaster position='top-center' richColors={true}/>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
    </>
  )
}

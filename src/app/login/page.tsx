// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// // import { useAuthStore } from '@/stores/authStore';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Eye, EyeOff } from 'lucide-react';
// import { useRouter } from 'next/navigation';

// const Login: React.FC = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   // const { login, isLoading, error, clearError } = useAuthStore();
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     clearError();
//     const success = await login(email, password);
//     if (success) {
//       // if (rememberMe) {
//       //   // Handle remember me functionality if needed
//       // }
//       router.push('/profile');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
//       <div className="w-full max-w-md bg-white text-black rounded-lg shadow-sm">
//         <div className="mt-8 p-6 sm:p-8">
//           <div className="flex flex-col items-start mb-8">
//             <h1 className="text-2xl font-bold text-[#FF385C]">Unicflo</h1>
//             <h2 className="text-2xl font-bold mt-4">Добро пожаловать</h2>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-2">
//               <Label htmlFor="email">Электронная почта</Label>
//               <Input
//                 id="email"
//                 placeholder="Адрес электронной почты"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 type="email"
//                 className="bg-white border-gray-300 focus-visible:border-[#FF385C] focus-visible:ring-[#FF385C]"
//               />
//             </div>

//             <div className="space-y-2 relative">
//               <Label htmlFor="password">Пароль</Label>
//               <div className="relative">
//                 <Input
//                   id="password"
//                   placeholder="Введите пароль"
//                   type={showPassword ? 'text' : 'password'}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="bg-white border-gray-300 focus-visible:border-[#FF385C] focus-visible:ring-[#FF385C] pr-10"
//                 />
//                 <button
//                   type="button"
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-500"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-center justify-between text-sm flex-wrap gap-2">
//               <div className="flex items-center space-x-2">
//                 <Checkbox
//                   id="remember"
//                   className="border border-black"
//                   checked={rememberMe}
//                   onCheckedChange={(checked) => setRememberMe(!!checked)}
//                 />
//                 <label htmlFor="remember" className="text-gray-600">
//                   Запомнить на 30 дней
//                 </label>
//               </div>
//               <Link href="/resetPassword" className="text-[#FF385C] hover:underline whitespace-nowrap">
//                 Забыли пароль
//               </Link>
//             </div>

//             {error && (
//               <div className="text-sm text-red-600 bg-red-100 p-3 rounded-md">
//                 {error}
//               </div>
//             )}

//             <Button
//               className="w-full bg-[#FF385C] hover:bg-[#E0314D] text-white"
//               type="submit"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Вход...' : 'Авторизоваться'}
//             </Button>

//             <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50" type="button">
//               <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
//                 <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
//                 <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
//                 <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
//               </svg>
//               Продолжить с Google
//             </Button>

//             <p className="text-center text-sm text-gray-600">
//               У вас еще нет аккаунта?{' '}
//               <Link href="/register" className="text-[#FF385C] font-medium hover:underline">
//                 Зарегистрируйтесь здесь
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Page() {
  return (<><Navbar /><main className="pt-20 min-h-screen bg-gray-50"><div className="max-w-3xl mx-auto px-6 py-24"><div className="bg-white rounded-3xl p-12 border border-gray-100"><h1 className="text-4xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1><p className="text-gray-500 text-sm">Last updated: January 2024. For questions contact <a href="mailto:pwtvizag@gmail.com" className="text-brand hover:underline">pwtvizag@gmail.com</a>.</p></div></div></main><Footer /></>);
}

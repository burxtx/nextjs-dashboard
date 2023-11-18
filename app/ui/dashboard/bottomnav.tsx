import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 w-full flex h-16 px-3 py-2 bg-gray-50 md:hidden">
      <Link href="/">
        <div className="flex-1 flex items-center justify-center">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex-1 flex items-center justify-center">
        <NavLinks />
      </div>
      <form className="flex-1 flex items-center justify-center">
        <button className="flex items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600">
          <PowerIcon className="w-6" />
          <div>Sign Out</div>
        </button>
      </form>
    </div>
  );
}

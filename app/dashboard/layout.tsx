import type { Metadata } from 'next';
import NavBar from '@components/dashboard/navbar/NavBar';
import SideBar from '@components/dashboard/sidebar/SideBar';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Next.js',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div>
        <NavBar />
        { children }
      </div>
    </div>
  );
}

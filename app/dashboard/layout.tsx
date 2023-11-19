import type { Metadata } from 'next';
import SideBar from '../ui/dashboard/sidebar/SideBar';
import NavBar from '../ui/dashboard/navbar/NavBar';

export const metadata: Metadata = {
  title: 'Next.js - Dashboard Layout',
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
        {children}
      </div>
    </div>
  );
}

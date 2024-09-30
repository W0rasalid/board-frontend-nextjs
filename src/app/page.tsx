// project import
// import DashboardLayout from 'layout/DashboardLayout';
import GuestGuard from 'utils/route-guard/GuestGuard';
import Login from 'views/auth/login';
// import BoardPage from 'views/board';

export default function HomePage() {
  return (
    <GuestGuard>
      <Login />
    </GuestGuard>
  );
}

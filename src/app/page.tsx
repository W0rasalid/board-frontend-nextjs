// project import
import DashboardLayout from 'layout/DashboardLayout';
import GuestGuard from 'utils/route-guard/GuestGuard';
import BoardPage from 'views/board';

export default function HomePage() {
  return (
    <GuestGuard>
      {/* <Login /> */}
      <DashboardLayout>
        <BoardPage />
      </DashboardLayout>
    </GuestGuard>
  );
}

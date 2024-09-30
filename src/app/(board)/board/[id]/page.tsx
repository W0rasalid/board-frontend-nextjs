import AuthGuard from 'utils/route-guard/AuthGuard';
import PostDetails from 'views/board/details';

// ==============================|| PAGE ||============================== //

export default function PostDetailPage() {
  return (
    <AuthGuard>
      <PostDetails />
    </AuthGuard>
  );
}

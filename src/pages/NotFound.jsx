import EmptyState from '../components/common/EmptyState.jsx';

export default function NotFound() {
  return <main className="not-found"><EmptyState icon="?" title="This page wandered off" description="Let's get you back to a conversation." /></main>;
}

import { getConversations } from '@/app/lib/repositories/conversationRepository';
import ClientDashboard from '@/app/dashboard/components/ClientDashboard';

export default async function Dashboard() {
  const conversations = await getConversations();
  console.log('server dashboard conversations: ', conversations);

  return <ClientDashboard conversations={conversations}></ClientDashboard>;
}

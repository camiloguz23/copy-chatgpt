import { Container } from '@/components';
import { ContainerChat, Sidebar } from './components';

export default function Home(): JSX.Element {
  return (
    <>
      <Container>
        <Sidebar />
        <ContainerChat />
      </Container>
    </>
  );
}

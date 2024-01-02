import { memo, useState } from 'react';
import { HomeContext, HomeState, THomeState } from './config';
import './index.less';
import Container from '@/components/container';

const Home = memo(() => {
  const [state, setState] = useState<THomeState>(HomeState);

  return (
    <div className='Home'>
      <HomeContext.Provider value={[state, setState]}>
        <Container>
          <header />
        </Container>
      </HomeContext.Provider>
    </div>
  );
});

export default Home;

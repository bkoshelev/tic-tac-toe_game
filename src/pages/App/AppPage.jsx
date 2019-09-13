import React, { useContext } from 'react';
import { css } from 'linaria';

import { AppProvider, AppContext } from './AppContext';

import OnEnterGameScreen from '../../screens/OnEnterGameScreen';
import LoadGameScreen from '../../screens/LoadGameScreen';
import GameScreen from '../../screens/GameScreen';
import OnFinishGameScreen from '../../screens/OnFinishGameScreen';

const appStyle = css`
  :global() {
    @import 'normalize.css';
    @import 'sanitize.css';

    #root {
      width: 100vw;
      height: 100vh;
      display: grid;
      align-content: center;
      justify-content: center;
      background-color: #1b1942;
      overflow: hidden;
    }
  }
`;

const getPage = currentState => {
  if (currentState === 'enter') {
    return <OnEnterGameScreen show={true}></OnEnterGameScreen>;
  }
  if (currentState === 'prepareGame') {
    return (
      <>
        <OnEnterGameScreen show={false}></OnEnterGameScreen>
        <LoadGameScreen show={true}></LoadGameScreen>
      </>
    );
  }
  if (currentState === 'game') {
    return (
      <>
        <LoadGameScreen show={false}></LoadGameScreen>
        <GameScreen show={true}></GameScreen>
      </>
    );
  }
  if (currentState === 'finishGame') {
    return (
      <>
        <GameScreen show={false}></GameScreen>
        <OnFinishGameScreen show={true}></OnFinishGameScreen>
      </>
    );
  }
  return null;
};

const AppPage = () => {
  const { value: appStateValue } = useContext(AppContext);
  return <div className={appStyle}>{getPage(appStateValue)}</div>;
};

const ConnectAppPageToContext = () => {
  return (
    <AppProvider>
      <AppPage></AppPage>
    </AppProvider>
  );
};
export default ConnectAppPageToContext;

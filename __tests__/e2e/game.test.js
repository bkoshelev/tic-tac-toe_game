const puppeteer = require('puppeteer');
const Differencify = require('differencify');

const iPhone = puppeteer.devices['iPhone X'];

const differencify = new Differencify({ saveDifferencifiedImage: false });

const target = differencify.init({ chain: false, testName: 'game' });
let page = null;
let page2 = null;

const pauseTime = 1000;
const waitingTime = 2000;

jest.setTimeout(30000);

beforeAll(async () => {
  await target.launch({ headless: true });

  page = await target.newPage();
  await page.emulate(iPhone);
  page2 = await target.newPage();

  const navigationPromise = page.waitForNavigation();
  const navigationPromise2 = page2.waitForNavigation();

  await page.goto('http://localhost:8081/');
  await page2.goto('http://localhost:8081/');

  await page._client.send('Animation.setPlaybackRate', { playbackRate: 4 });
  await page2._client.send('Animation.setPlaybackRate', { playbackRate: 4 });
  await page2.setViewport({ width: 1024, height: 1024 });

  await navigationPromise;
  await navigationPromise2;
});

it('test 1', async () => {
  await page.bringToFront();
  await page.waitForSelector('body #root main button');

  // const image = await page.screenshot();
  // await target.toMatchSnapshot(image);

  await page.click('body #root main button');
  await page.waitFor(pauseTime);
  await page2.bringToFront();
  await page2.waitForSelector('body #root main button', {
    visible: true,
    timeout: waitingTime,
  });

  // const image2 = await page2.screenshot();
  // await target.toMatchSnapshot(image2);

  await page2.click('body #root main button');

  await page.bringToFront();
  await page.waitFor(pauseTime);
  await page.waitForSelector('#root main h1 span', {
    visible: true,
    timeout: waitingTime,
  });
  await expect(page).toMatchElement('#root main h1 span', { text: 'Ваш ход' });

  await page.waitFor(pauseTime);
  await page2.bringToFront();

  await page2.waitForSelector('#root main h1 span', {
    visible: true,
    timeout: waitingTime,
  });
  await expect(page2).toMatchElement('#root main h1 span', {
    text: 'Ход противника',
  });

  await page.waitFor(pauseTime);
  await page.bringToFront();
  await page.waitForSelector('#root main  div > button:nth-child(1)', {
    visible: true,
    timeout: waitingTime,
  });
  const image3 = await page.screenshot();
  await target.toMatchSnapshot(image3);
  await page.click('#root main  div > button:nth-child(1)');
  await page.waitForSelector('#root main h1 span', {
    visible: true,
    timeout: waitingTime,
  });
  await expect(page).toMatchElement('#root main h1 span', {
    text: 'Ход противника',
  });

  await page.waitFor(pauseTime);
  await page2.bringToFront();

  await page2.waitForSelector('#root main h1 span', {
    visible: true,
    timeout: waitingTime,
  });
  await expect(page2).toMatchElement('#root main h1 span', { text: 'Ваш ход' });
  await page2.waitForSelector('#root main  div > button:nth-child(4)', {
    visible: true,
    timeout: waitingTime,
  });
  const image4 = await page2.screenshot();
  await target.toMatchSnapshot(image4);
  await page2.click('#root main  div > button:nth-child(4)');

  await page.waitFor(pauseTime);
  await page.bringToFront();

  await page.waitForSelector('#root main h1 span', {
    visible: true,
    timeout: waitingTime,
  });
  await expect(page).toMatchElement('#root main h1 span', { text: 'Ваш ход' });
  await page.waitForSelector('#root main  div > button:nth-child(2)', {
    visible: true,
    timeout: waitingTime,
  });
  await page.click('#root main  div > button:nth-child(2)');

  await page.waitFor(pauseTime);
  await page2.bringToFront();
  await page2.waitForSelector('#root main h1 span', {
    visible: true,
    timeout: waitingTime,
  });
  await expect(page2).toMatchElement('#root main h1 span', { text: 'Ваш ход' });
  await page2.waitForSelector('#root main  div > button:nth-child(5)', {
    visible: true,
    timeout: waitingTime,
  });
  await page2.click('#root main  div > button:nth-child(5)');

  await page.waitFor(pauseTime);
  await page.bringToFront();
  await page.waitForSelector('#root main h1 span', {
    visible: true,
    timeout: waitingTime,
  });
  await expect(page).toMatchElement('#root main h1 span', { text: 'Ваш ход' });
  await page.waitForSelector('#root main  div > button:nth-child(3)', {
    visible: true,
    timeout: waitingTime,
  });
  await page.click('#root main  div > button:nth-child(3)');

  await page.waitFor(pauseTime);

  await page.waitForSelector('#root main section h2', {
    visible: true,
    timeout: waitingTime,
  });
  await expect(page).toMatch('Вы выиграли!');
  // const image5 = await page.screenshot();
  // await target.toMatchSnapshot(image5);
  await target.close();
}, 999999);

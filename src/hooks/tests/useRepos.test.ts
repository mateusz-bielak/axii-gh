import { renderHook, act } from '@testing-library/react-hooks';
import fetchMock from 'fetch-mock';

import useRepos, { Repo } from '../useRepos';

const mockedRepos: Repo[] = [
  {
    description: 'This is repository',
    html_url: 'https://url.com',
    id: 1,
    name: 'Super repos',
    stargazers_count: 1,
  },
  {
    description: 'Facebulb',
    html_url: 'https://face-bulb-url.any',
    id: 2,
    name: 'Super repos',
    stargazers_count: 17421,
  },
  {
    description: 'This is another repository',
    html_url: 'https://url.abc',
    id: 3,
    name: 'Super repos',
    stargazers_count: 113,
  },
];

afterEach(fetchMock.restore);

describe('fetch repos successfully', () => {
  beforeEach(() =>
    fetchMock.mock('*', {
      status: 200,
      body: mockedRepos,
    })
  );

  it('should handle fetching status', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useRepos('mat'));

    expect(result.current.fetchingRepos).toBeTruthy();

    await act(async () => await waitForNextUpdate());

    expect(result.current.fetchingRepos).toBeFalsy();
  });

  it('should store sorted repos', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useRepos('mat'));

    expect(result.current.fetchingRepos).toBeTruthy();

    await act(async () => await waitForNextUpdate());

    expect(result.current.repos).toHaveLength(mockedRepos.length);
    expect(result.current.repos[0]).toHaveProperty('id', 2);
  });
});

describe('handle fetching errors', () => {
  beforeEach(() =>
    fetchMock.mock('*', {
      status: 404,
    })
  );

  it('should not fetch without username prop', async () => {
    const { result } = renderHook(() => useRepos());

    expect(result.current.fetchingRepos).toBeFalsy();
    expect(result.current.repos).toHaveLength(0);
  });
});

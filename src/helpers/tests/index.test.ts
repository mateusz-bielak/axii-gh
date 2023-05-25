import { handleErrors, sortAndGetTopRepos } from '../index';

const mockedRepos = [
  {
    description: 'Mocked description 1',
    html_url: 'http://fake.url',
    id: 1,
    name: 'First',
    stargazers_count: 0,
  },
  {
    description: 'Mocked description 2',
    html_url: 'http://fake.url',
    id: 2,
    name: 'Second',
    stargazers_count: 0,
  },
  {
    description: 'Mocked description 3',
    html_url: 'http://fake.url',
    id: 3,
    name: 'Third',
    stargazers_count: 2,
  },
  {
    description: 'Mocked description 4',
    html_url: 'http://fake.url',
    id: 4,
    name: 'Fourth',
    stargazers_count: 0,
  },
  {
    description: 'Mocked description 5',
    html_url: 'http://fake.url',
    id: 5,
    name: 'Fifth',
    stargazers_count: 1,
  },
];

describe('handleErrors helper', () => {
  it('should return response', done => {
    const data = { name: 'Johnny' };
    const response = { ok: true, json: () => Promise.resolve(data) } as Response;

    const promise = handleErrors(response);

    promise.then(handledResponse => {
      expect(handledResponse).toEqual(data);
      done();
    });
  });

  it('should return error', () => {
    const response = { ok: false, statusText: 'Error' } as Response;

    expect(() => handleErrors(response)).toThrow(response.statusText);
  });
});

describe('sortAndGetTopRepos helper', () => {
  it('should sort repositories correctly', () => {
    const sortedRepos = sortAndGetTopRepos(mockedRepos);

    expect(sortedRepos).toHaveLength(3);
    expect(sortedRepos).toEqual([mockedRepos[2], mockedRepos[4], mockedRepos[0]]);
  });

  it('should use provided repos amount prop', () => {
    const sortedRepos = sortAndGetTopRepos(mockedRepos, 1);

    expect(sortedRepos).toHaveLength(1);
  });
});

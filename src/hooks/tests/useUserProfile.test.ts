import { act, renderHook } from '@testing-library/react-hooks';
import fetchMock from 'fetch-mock';

import useUserProfile, { UserProfile } from '../useUsersSearch';

const mockedUserProfile: UserProfile = {
  avatar_url: 'https://google.com',
  bio: 'This is one of the GitHub users.',
  id: 1,
  login: 'tom-hanks',
  name: 'Tom',
};

afterEach(fetchMock.restore);

describe('useUserProfile hook', () => {
  beforeEach(() =>
    fetchMock.mock('*', {
      status: 200,
      body: mockedUserProfile,
    })
  );

  it('should fetch user profile', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useUserProfile());

    expect(result.current.userProfile.id).toBeNull();

    await act(async () => {
      result.current.setUsername(mockedUserProfile.login);
      await waitForNextUpdate();
    });

    expect(result.current.userProfile).toEqual(mockedUserProfile);
  });
});

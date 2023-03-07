import { fetch as netInfoFetch, NetInfoState } from '@react-native-community/netinfo';

const hasInternetConnection = (connectionStatus: NetInfoState) => {
  const isInternetReachable = !!connectionStatus.isInternetReachable;
  const isConnected = !!connectionStatus.isConnected;

  return isInternetReachable || isConnected;
};

export const checkInternetConnectionHelper = async () => {
  try {
    const connectionStatus: NetInfoState = await netInfoFetch();

    return hasInternetConnection(connectionStatus);
  } catch (error) {
    return false;
  }
};

import React, { useEffect } from 'react';

import { ROOT_NAVIGATOR_ROUTE } from '@enums/routesEnum';
import { messageAlert } from '@helpers/alertHelper';
import { checkInternetConnectionHelper } from '@helpers/checkInternetConnectionHelper';
import { BottomTabNavigator } from '@navigation/bottomTabNavigator/BottomTabNavigator';
import { RootNativeStackNavigatorParamListType } from '@navigation/rootNavigator/types';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { instance } from '@root/api/instance';
import { setIsDataLoadedAction } from '@store/actions/appReducerActions/setIsDataLoadedAction';
import { setTasksAction } from '@store/actions/tasksReducerActions/setTasksAction';
import { setUsersAction } from '@store/actions/usersReducerActions/setUsersAction';
import { TaskBeforeConvertType, TaskType } from '@store/reducers/tasksReducer/types';
import { UserReducerStateType, UserType } from '@store/reducers/usersReducer/types';
import { isDataLoadedSelector } from '@store/selectors/appSelectors';
import { AxiosResponse } from 'axios';
import { BackHandler } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

const { Navigator, Screen } =
  createNativeStackNavigator<RootNativeStackNavigatorParamListType>();

export const RootNavigator = () => {
  const dispatch = useDispatch();

  const isDataLoaded = useSelector(isDataLoadedSelector);

  useEffect(() => {
    if (!isDataLoaded) {
      const getData = async () => {
        const hasInternetConnection = await checkInternetConnectionHelper();

        if (!hasInternetConnection) {
          messageAlert({
            message: 'No internet connection, please reopen the app',
            onOkPress: () => BackHandler.exitApp(),
          });

          throw Error;
        } else {
          const usersResponse: AxiosResponse<UserReducerStateType['users']> =
            await instance.get<UserType[]>('users');
          const tasksResponse: AxiosResponse<TaskBeforeConvertType[]> =
            await instance.get<TaskBeforeConvertType[]>('todos');

          const convertedTasks = tasksResponse.data.map((task) => {
            const convertedTask: TaskType = { ...task, usersId: [task.userId] };

            return convertedTask;
          });

          dispatch(setUsersAction({ users: usersResponse.data }));
          dispatch(setTasksAction({ tasks: convertedTasks }));
        }
      };

      getData()
        .then(() => {
          dispatch(setIsDataLoadedAction({ isDataLoaded: true }));
        })
        .catch(() => {
          dispatch(setIsDataLoadedAction({ isDataLoaded: false }));
        });
    }
  }, [isDataLoaded]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator>
          <Screen
            component={BottomTabNavigator}
            name={ROOT_NAVIGATOR_ROUTE.APP_NAVIGATOR}
            options={{ headerShown: false }}
          />
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

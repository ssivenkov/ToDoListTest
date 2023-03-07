import React, { useState } from 'react';

import { IconButton } from '@components/buttons/iconButton/IconButton';
import { ModalMenuButton } from '@components/buttons/modalMenuButton/ModalMenuButton';
import { modalStyles } from '@components/buttons/modalMenuButton/modalStyles';
import { Separator } from '@components/buttons/modalMenuButton/Separator';
import { COMPLETED_TASK_ICON_SIZE, MODAL_CHECKBOX_ICON_SIZE } from '@constants/constants';
import { faSquare } from '@fortawesome/free-regular-svg-icons/faSquare';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useStyles } from '@hooks/useStyles';
import { taskItemStyles } from '@screens/tasksScreen/taskItem/styles';
import { UsersSelectButtonPropsType } from '@screens/tasksScreen/taskItem/usersSelectButton/types';
import { setTaskOwnersAction } from '@store/actions/tasksReducerActions/setTaskOwnersAction';
import { TaskType } from '@store/reducers/tasksReducer/types';
import { Modal, ScrollView, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

export const UsersSelectButton = (props: UsersSelectButtonPropsType) => {
  const { owners, users, taskId } = props;

  const dispatch = useDispatch();

  const styles = useStyles(modalStyles);

  const [isModalWindowOpen, setIsModalWindowOpen] = useState<boolean>(false);
  const [selectedOwners, setSelectedOwners] = useState<TaskType['usersId']>(owners);

  const showModalWindow = () => {
    setIsModalWindowOpen(true);
  };

  const onOkButtonPress = () => {
    dispatch(setTaskOwnersAction({ userId: selectedOwners, taskId }));
    setIsModalWindowOpen(false);
  };

  const onCloseButtonPress = () => {
    setSelectedOwners(owners);
    setIsModalWindowOpen(false);
  };

  return (
    <View>
      <Modal
        onRequestClose={onCloseButtonPress}
        transparent={true}
        visible={isModalWindowOpen}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.descriptionContainer}>
              <Text style={styles.text}>Select users for this task</Text>
            </View>

            <ScrollView contentContainerStyle={styles.contentContainer}>
              {users.map((user) => {
                return (
                  <View key={user.id} style={styles.userContainer}>
                    <Text style={taskItemStyles.text}>{user.name}</Text>
                    {selectedOwners.some((owner) => user.id === owner) ? (
                      <IconButton
                        icon={
                          <Text style={taskItemStyles.text}>
                            <FontAwesomeIcon
                              icon={faSquareCheck}
                              size={MODAL_CHECKBOX_ICON_SIZE}
                              style={taskItemStyles.icon}
                            />
                          </Text>
                        }
                        onPress={() => {
                          setSelectedOwners(
                            selectedOwners.filter((owner) => {
                              return owner !== user.id;
                            }),
                          );
                        }}
                      />
                    ) : (
                      <IconButton
                        icon={
                          <Text style={taskItemStyles.text}>
                            <FontAwesomeIcon
                              icon={faSquare}
                              size={MODAL_CHECKBOX_ICON_SIZE}
                              style={taskItemStyles.icon}
                            />
                          </Text>
                        }
                        onPress={() => {
                          setSelectedOwners([...selectedOwners, user.id]);
                        }}
                      />
                    )}
                  </View>
                );
              })}
            </ScrollView>

            <View style={styles.buttonsContainer}>
              <ModalMenuButton onPress={onOkButtonPress} title='Ok' />
              <Separator />
              <ModalMenuButton onPress={onCloseButtonPress} title='Close' />
            </View>
          </View>
        </View>
      </Modal>
      <IconButton
        icon={
          <View style={taskItemStyles.userIconContainer}>
            <Text style={taskItemStyles.text}>
              <FontAwesomeIcon
                icon={faUser}
                size={COMPLETED_TASK_ICON_SIZE}
                style={taskItemStyles.icon}
              />
            </Text>
            <Text style={taskItemStyles.text}>{owners.length}</Text>
          </View>
        }
        onPress={showModalWindow}
      />
    </View>
  );
};

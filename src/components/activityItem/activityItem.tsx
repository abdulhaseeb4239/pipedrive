import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ActivityModel} from '../../common/types';
import styles from './styles';

interface Props {
  activity: ActivityModel;
  showDivider: boolean;
}

const ActivityItem = ({activity, showDivider}: Props) => {
  return (
    <TouchableOpacity>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={styles.subject}>{activity.subject}</Text>
            <Text style={styles.detail}>{activity.org_name}</Text>
          </View>
          <Text style={styles.detail}>{activity.due_date.toString()}</Text>
        </View>
        {showDivider ? <View style={styles.divider}></View> : null}
      </View>
    </TouchableOpacity>
  );
};

export default ActivityItem;

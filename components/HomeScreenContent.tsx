import { StyleSheet, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function HomeScreenContent({ name }: { name: string }) {

    function _startFavoriteWorkout() {
        alert("start workout")
    }
    function _viewWorkouts() {
        alert("view workouts")
    }
    function _viewExercises() {
        alert("view exercises")
    }
    function _viewProgress() {
        alert("view progress")
    }
    function _newWorkout() {
        alert("new workout")
    }
    function _newExercise() {
        alert("new exercise")
    }

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Welcome back
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>{name}</MonoText>
        </View>
      </View>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View >
        <Pressable
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? Colors.bgPrimaryDark.background : Colors.bgPrimary.background
                },
                styles.buttonStartWorkout
            ]}
            onPress={_startFavoriteWorkout}
        >
            <Text style={styles.buttonText}>
                Start My Workout
            </Text>
        </Pressable>
      </View>
      <View style={styles.buttonPair}>
        <Pressable
        style={({ pressed }) => [
            {
                backgroundColor: pressed ? Colors.bgSecondaryDark.background : Colors.bgSecondary.background
            },
            styles.buttonView
        ]}
        onPress={_viewWorkouts}>
            <Text style={styles.buttonText}>
                View Workouts
            </Text>
        </Pressable>
        <Pressable
        style={({ pressed }) => [
            {
                backgroundColor: pressed ? Colors.bgSecondaryDark.background : Colors.bgSecondary.background
            },
            styles.buttonView
        ]}
        onPress={_viewExercises}>
            <Text style={styles.buttonText}>
                View Exercises
            </Text>
        </Pressable>
      </View>

      <View >
        <Pressable 
        style={({ pressed }) => [
            {
                backgroundColor: pressed ? Colors.bgTertiaryDark.background : Colors.bgTertiary.background
            },
           styles.buttonViewProgress
        ]}
        onPress={_viewProgress}>
            <Text style={styles.buttonText}>
                My Progress
            </Text>
        </Pressable>
      </View>

      <View style={styles.buttonPair}>
        <Pressable
        style={({ pressed }) => [
            {
                backgroundColor: pressed ? Colors.bgQuaternaryDark.background : Colors.bgQuaternary.background
            },
            styles.buttonNew
        ]}
        onPress={_newWorkout}>
            <Text style={styles.buttonText}>
                New Workout
            </Text>
        </Pressable>
        <Pressable
        style={({ pressed }) => [
            {
                backgroundColor: pressed ? Colors.bgQuaternaryDark.background : Colors.bgQuaternary.background
            },
            styles.buttonNew
        ]}
        onPress={_newExercise}>
            <Text style={[styles.buttonText]}>
                New Exercise
            </Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },

  buttonPair: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  buttonStartWorkout: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 36,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3
  },
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
    width: '48%'
  },
  buttonViewProgress: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 4,
    elevation: 3
  },
  buttonNew: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
    width: '48%'
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  }
});

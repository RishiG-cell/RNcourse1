import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressedItem}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalsText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 5,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#311b6b",
  },
  goalsText: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.2,
  },
});

export default GoalItem;
1;

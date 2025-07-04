import React, { useRef } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DraxProvider, DraxList, DraxListItem } from "react-native-drax";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getBackgroundColor = (alphaIndex: number) => {
  switch (alphaIndex % 6) {
    case 0:
      return "#ffaaaa";
    case 1:
      return "#aaffaa";
    case 2:
      return "#aaaaff";
    case 3:
      return "#ffffaa";
    case 4:
      return "#ffaaff";
    case 5:
      return "#aaffff";
    default:
      return "#aaaaaa";
  }
};

const getHeight = (alphaIndex: number) => {
  let height = 50;
  if (alphaIndex % 2 === 0) {
    height += 10;
  }
  if (alphaIndex % 3 === 0) {
    height += 20;
  }
  return height;
};

const getItemStyleTweaks = (alphaItem: string) => {
  const alphaIndex = alphabet.indexOf(alphaItem);
  return {
    backgroundColor: getBackgroundColor(alphaIndex),
    height: getHeight(alphaIndex),
  };
};

const ReorderableList = () => {
  const [alphaData, setAlphaData] = React.useState(alphabet);
  const listRef = useRef<FlatList | null>(null);
  return (
    <DraxProvider>
      <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
        <DraxList
          ref={listRef}
          data={alphaData}
          // Apply style to the internal FlatList
          style={styles.list}
          // Use parentDraxViewProps to style the parent DraxView
          parentDraxViewProps={{
            style: styles.container,
          }}
          // Use renderItem instead of renderItemContent
          renderItem={(info, itemProps) => (
            <DraxListItem
              itemProps={itemProps}
              style={[styles.alphaItem, getItemStyleTweaks(info.item)]}
              draggingStyle={styles.hover}
            >
              <Text style={styles.alphaText}>{info.item}</Text>
            </DraxListItem>
          )}
          // Log events
          onItemDragStart={({ index, item }) => {
            console.log(`Item #${index} (${item}) drag start`);
          }}
          onItemDragEnd={({ index, item, toIndex, toItem }) => {
            console.log(
              `Item #${index} (${item}) drag ended at index ${toIndex} (${toItem})`
            );
          }}
          // Handle reordering
          onItemReorder={({ fromIndex, fromItem, toIndex, toItem }) => {
            console.log(
              `Item dragged from index ${fromIndex} (${fromItem}) to index ${toIndex} (${toItem})`
            );
            const newData = alphaData.slice();
            newData.splice(toIndex, 0, newData.splice(fromIndex, 1)[0]);
            setAlphaData(newData);
          }}
          keyExtractor={(item) => item}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <Text style={styles.headerText}>
                Long-press any list item to drag it to a new position. Dragging
                an item over the top or bottom edge of the container will
                automatically scroll the list. Swiping up or down without the
                initial long-press will scroll the list normally.
              </Text>
            </View>
          )}
        />
      </SafeAreaView>
    </DraxProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  header: {
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontStyle: "italic",
  },
  alphaItem: {
    backgroundColor: "#aaaaff",
    borderRadius: 8,
    margin: 4,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  alphaText: {
    fontSize: 28,
  },
  hover: {
    opacity: 0,
  },
});

export default ReorderableList;

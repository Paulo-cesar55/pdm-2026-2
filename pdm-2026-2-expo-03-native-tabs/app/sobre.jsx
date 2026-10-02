import { StyleSheet, View } from "react-native";
import { Card, Divider, List, Text, useTheme } from "react-native-paper";

export default function PaginaSobre() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text variant="headlineSmall" style={styles.title}>
        Sobre o Aplicativo
      </Text>
      <Text
        variant="bodyMedium"
        style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}
      >
        Exemplo de Native Tabs e Stack Navigation
      </Text>

      <Card mode="elevated" style={styles.card}>
        <Card.Title
          title="Informações do Projeto"
          titleVariant="titleMedium"
          left={(props) => <List.Icon {...props} icon="school" />}
        />
        <Card.Content>
          <List.Item
            title="Disciplina"
            description="Programação para Dispositivos Móveis"
            left={(props) => <List.Icon {...props} icon="book-education" />}
          />
          <Divider />
          <List.Item
            title="Instituição"
            description="UNICAP"
            left={(props) => <List.Icon {...props} icon="bank" />}
          />
          <Divider />
          <List.Item
            title="Tecnologias"
            description="Expo SDK 57, Native Tabs, React Native Paper"
            left={(props) => <List.Icon {...props} icon="cellphone-cog" />}
          />
          <Divider />
          <List.Item
            title="Objetivo"
            description="Demonstrar abas nativas integradas com pilha (Stack) e diferentes animações."
            descriptionNumberOfLines={3}
            left={(props) => <List.Icon {...props} icon="lightbulb" />}
          />
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    marginHorizontal: 4,
  },
});

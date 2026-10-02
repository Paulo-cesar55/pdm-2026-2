import { StyleSheet, View } from "react-native";
import { Card, List, Text, useTheme } from "react-native-paper";

export default function PaginaInicial() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text variant="headlineSmall" style={styles.title}>
        Página Inicial
      </Text>
      <Text
        variant="bodyMedium"
        style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}
      >
        Bem-vindo ao aplicativo com navegação Native Tabs!
      </Text>

      <Card mode="elevated" style={styles.card}>
        <Card.Title
          title="Navegação por Abas"
          titleVariant="titleMedium"
          left={(props) => <List.Icon {...props} icon="tab" />}
        />
        <Card.Content>
          <Text variant="bodyMedium" style={styles.cardDescription}>
            Utilize a barra inferior nativa para alternar entre as abas:
          </Text>
          <List.Item
            title="Início"
            description="Esta tela principal"
            left={(props) => <List.Icon {...props} icon="home" />}
          />
          <List.Item
            title="Sobre"
            description="Informações sobre o aplicativo"
            left={(props) => <List.Icon {...props} icon="information" />}
          />
          <List.Item
            title="Configurações"
            description="Pilha de navegação (Stack)"
            left={(props) => <List.Icon {...props} icon="cog" />}
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
  cardDescription: {
    marginBottom: 8,
  },
});

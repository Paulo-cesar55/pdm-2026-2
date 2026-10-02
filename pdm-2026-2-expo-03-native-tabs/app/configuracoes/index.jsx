import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Divider, List, Switch, Text, useTheme } from "react-native-paper";
import { useThemeStore } from "@/zustand";

export default function Configuracoes() {
  const router = useRouter();
  const theme = useTheme();

  const [notificacoesAtivas, setNotificacoesAtivas] = useState(true);
  const { modoEscuro, toggleModoEscuro } = useThemeStore((state) => state);

  function irParaEditarPerfil(animacao = "slide_from_right") {
    router.push({
      pathname: "/configuracoes/editarPerfil",
      params: { animacao },
    });
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Card mode="elevated" style={styles.card}>
        <Card.Title
          title="Opções do Aplicativo"
          titleVariant="titleMedium"
          left={(props) => <List.Icon {...props} icon="tune" />}
        />
        <Card.Content>
          {/* Opção 1: Perfil */}
          <List.Item
            title="Perfil"
            description="Toque para editar o seu perfil"
            left={(props) => <List.Icon {...props} icon="account-circle" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => irParaEditarPerfil("slide_from_right")}
          />

          {/* Seção de teste de animações com botões do Paper */}
          <View style={styles.animationContainer}>
            <Text
              variant="labelSmall"
              style={[styles.animationLabel, { color: theme.colors.onSurfaceVariant }]}
            >
              Testar transição do Stack com animações:
            </Text>
            <View style={styles.buttonsRow}>
              <Button
                mode="tonal"
                compact
                style={styles.animBtn}
                onPress={() => irParaEditarPerfil("slide_from_right")}
              >
                Slide
              </Button>
              <Button
                mode="tonal"
                compact
                style={styles.animBtn}
                onPress={() => irParaEditarPerfil("fade")}
              >
                Fade
              </Button>
              <Button
                mode="tonal"
                compact
                style={styles.animBtn}
                onPress={() => irParaEditarPerfil("slide_from_bottom")}
              >
                Baixo
              </Button>
            </View>
          </View>

          <Divider style={styles.divider} />

          {/* Opção 2: Notificações */}
          <List.Item
            title="Notificações"
            description={notificacoesAtivas ? "Ativadas" : "Desativadas"}
            left={(props) => <List.Icon {...props} icon="bell-outline" />}
            right={() => (
              <Switch
                value={notificacoesAtivas}
                onValueChange={setNotificacoesAtivas}
              />
            )}
          />

          <Divider style={styles.divider} />

          {/* Opção 3: Aparência */}
          <List.Item
            title="Aparência"
            description={modoEscuro ? "Tema Escuro" : "Tema Claro"}
            left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
            right={() => (
              <Switch
                value={modoEscuro}
                onValueChange={toggleModoEscuro}
              />
            )}
          />
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-start",
  },
  card: {
    marginVertical: 8,
  },
  animationContainer: {
    paddingLeft: 16,
    paddingRight: 8,
    marginBottom: 8,
  },
  animationLabel: {
    marginBottom: 8,
  },
  buttonsRow: {
    flexDirection: "row",
    gap: 8,
  },
  animBtn: {
    flex: 1,
  },
  divider: {
    marginVertical: 4,
  },
});

import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Card, Chip, TextInput, useTheme } from "react-native-paper";

export default function EditarPerfil() {
  const router = useRouter();
  const theme = useTheme();
  const { animacao } = useLocalSearchParams();

  const [nome, setNome] = useState("Marcio Bueno");
  const [email, setEmail] = useState("marcio.bueno@unicap.br");
  const [bio, setBio] = useState("Professor da UNICAP - Programação para Dispositivos Móveis");

  function handleSalvar() {
    Alert.alert("Sucesso", "Perfil atualizado com sucesso!", [
      {
        text: "OK",
        onPress: () => router.back(),
      },
    ]);
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Card mode="elevated" style={styles.card}>
        <Card.Title title="Editar Perfil" titleVariant="titleLarge" />
        <Card.Content>
          {/* Indicador da animação com Chip do Paper */}
          <Chip icon="movie-open-play-outline" style={styles.chip}>
            Animação: {animacao || "slide_from_right (padrão)"}
          </Chip>

          {/* Campos do formulário com TextInput do Paper */}
          <TextInput
            label="Nome Completo"
            mode="outlined"
            value={nome}
            onChangeText={setNome}
            style={styles.input}
          />

          <TextInput
            label="E-mail"
            mode="outlined"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />

          <TextInput
            label="Biografia"
            mode="outlined"
            value={bio}
            onChangeText={setBio}
            multiline
            numberOfLines={3}
            style={styles.input}
          />

          {/* Botões de Ação */}
          <Button
            mode="contained"
            icon="content-save"
            onPress={handleSalvar}
            style={styles.saveBtn}
          >
            Salvar Alterações
          </Button>

          <Button
            mode="text"
            onPress={() => router.back()}
            style={styles.backBtn}
          >
            Voltar
          </Button>
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
  chip: {
    marginBottom: 16,
    alignSelf: "flex-start",
  },
  input: {
    marginBottom: 14,
  },
  saveBtn: {
    marginTop: 8,
  },
  backBtn: {
    marginTop: 6,
  },
});

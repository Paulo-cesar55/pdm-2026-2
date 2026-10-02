import { Stack } from "expo-router";
import { useTheme } from "react-native-paper";

export default function ConfiguracoesLayout() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: theme.colors.background },
        headerStyle: { backgroundColor: theme.colors.elevation.level2 },
        headerTintColor: theme.colors.onSurface,
      }}
    >
      {/* 1. Tela principal "Configurações" */}
      <Stack.Screen
        name="index"
        options={{
          title: "Configurações",
        }}
      />

      {/* 
        2. Tela de detalhes "Editar Perfil" 
        Configuração de animação de transição do Stack.
      */}
      <Stack.Screen
        name="editarPerfil"
        options={({ route }) => ({
          title: "Editar Perfil",
          animation: route.params?.animacao || "slide_from_right",
        })}
      />
    </Stack>
  );
}

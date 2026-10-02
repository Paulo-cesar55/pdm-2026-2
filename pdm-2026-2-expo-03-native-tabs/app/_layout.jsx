import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useThemeStore } from "@/zustand";

export default function RootLayout() {
  const modoEscuro = useThemeStore((state) => state.modoEscuro);
  const theme = modoEscuro ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider theme={theme}>
      <NativeTabs>
        {/* Aba 1: Página Inicial */}
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Label>Início</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
        </NativeTabs.Trigger>

        {/* Aba 2: Página Sobre */}
        <NativeTabs.Trigger name="sobre">
          <NativeTabs.Trigger.Label>Sobre</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="info.circle.fill" md="info" />
        </NativeTabs.Trigger>

        {/* Aba 3: Página Configurações (com navegação Stack interna) */}
        <NativeTabs.Trigger name="configuracoes">
          <NativeTabs.Trigger.Label>Configurações</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="gear" md="settings" />
        </NativeTabs.Trigger>
      </NativeTabs>
    </PaperProvider>
  );
}

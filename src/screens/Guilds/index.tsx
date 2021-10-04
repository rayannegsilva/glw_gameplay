import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";

import { theme } from "../../global/styles/theme";
import { styles } from './styles';

import { Guild, GuildProps } from "../../components/Guild";
import { Load } from "../../components/Load";
import { ListDivider } from "../../components/ListDivider";
import { api } from "../../serves/api";

type Props = {
    handleGuildsSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildsSelect }: Props) {
    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchGuilds() {
        const response = await api.get('/users/@me/guilds');

        setGuilds(response.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchGuilds();
    }, []);

    return (
        <View style={styles.container}>
            {
                loading ? <Load /> :
                    <FlatList
                        data={guilds}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Guild
                                onPress={() => handleGuildsSelect(item)}
                                data={item}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
                        ListHeaderComponent={() => <ListDivider isCentered />}
                        ItemSeparatorComponent={() => <ListDivider isCentered />}
                        style={styles.guilds}
                    />}
        </View>
    )
}
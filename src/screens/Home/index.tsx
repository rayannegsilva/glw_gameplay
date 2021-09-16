import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Profile } from "../../components/Profile";
import { CategorySelect } from "../../components/CategorySelect"
import { ButtonAdd } from "../../components/ButtonAdd";

import { styles } from './styles'
import { ListHeader } from "../../components/ListHeader";



export function Home() {
    const [category, setCategory] = useState('');

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd></ButtonAdd>
            </View>
            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
                <View style={styles.content}>
                    <ListHeader
                        title='Partidas Agendadas'
                        subtitle='Total 6'
                    />
                    <FlatList

                    />
                </View>
            </View>
        </View>
    )
}
import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import styles from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { ChevronRight } from "@fontawesome/free-solid-svg-icons"
import items from "./items"

const Menu = () => {
    return (
        <View style={styles.menuItems}>
            {items.map(item => (            
                <TouchableOpacity
                key={item.id}>
            <View style={styles.menuRow}>
<FontAwesomeIcon
style={styles.icon}
icon={ item.icon }
size={24}
/>
<View style={styles.menuTextBox}>
    <Text style={styles.menuText}> {item.title} </Text>
    {item.subTitle && (
        <Text style={styles.subTitle}>
            {item.subTitle}
        </Text>
    )}
</View>

<FontAwesomeIcon
style={styles.arrowIcon}
icon={ faChevronRight }
size={24}
/>
            </View>
           </TouchableOpacity>
            ))}
            
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({})

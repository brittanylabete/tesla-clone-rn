import React, { useState } from 'react'
import { ScrollView, View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import styles from "./styles";
import { FontAwesomeIcon } from "@fontawesome/react-native-fontawesome";
import { faCog, faToolbox, faFan, faKey, faLock, faUnlockAlt } from "@fontawesome/free-solid-svg-icons";
import Menu from '../Menu/index';

const CarItem = () => {
    const [locked, setLocked] = useState(false)
    const clickLock = () => {
        if(locked) {
            setLocked(false);
        } else {
            setLocked(true);
        }

    }

    return (
        <View style={styles.carContainer}>
            <ImageBackground
            source={require("../../assets/background.png")}
            style={styles.backgroundImage}
             />
     <View style={styles.header}>
         <TouchableOpacity>
         <FontAwesomeIcon
         style={styles.icon}
         icon={ faCog }
         size={24} />
         <Text style={styles.headerTitle}> britt </Text>
         </TouchableOpacity>
         <TouchableOpacity>
         <FontAwesomeIcon
        style={styles.icon}
        icon={ faToolbox }
        size={24} />
         </TouchableOpacity>
      
{/* Mileage */}
    <View style={styles.batterySection}>
        <Image
        source={require("../../assets/battery.png")}
        style={styles.batteryImage}
        />
        <Text style={styles.batteryText}> 150 mi </Text>
    </View>

     <View style={styles.status}>
            <Text style={styles.statusText}>Parked</Text>
        </View>

<ScrollView>

    <View style={styles.controls}>
        <TouchableOpacity>
        <View style={styles.controlsButton}>
  <FontAwesomeIcon styles={styles.icon}
        icon={ faFan }
        size={24} 
        />
        </View>
</TouchableOpacity>

      <TouchableOpacity>
      <View style={styles.controlsButton} >
  <FontAwesomeIcon styles={styles.icon}
        icon={ faKey }
        size={24} 
        />
        </View>
      </TouchableOpacity>
     

<TouchableOpacity
onPress={clickLock}>
     <View style={styles.controlsButton} >
  <FontAwesomeIcon styles={styles.icon}
        icon={ locked ? faLock : faUnlockAlt }
        size={24} 
        />
        </View>

</TouchableOpacity>
        

         </View>
         <Menu />


</ScrollView>
 </View>
 </View>

    )
};

export default CarItem;


